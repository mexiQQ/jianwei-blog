import React, { useEffect, useState, useRef } from "react";

const BOARD_SIZE = 20;
const INITIAL_PLAYER = { x: 10, y: 18, dir: "up" };

const ALL_DIRECTIONS = {
  w: { x: 0, y: -1, dir: "up" },
  ArrowUp: { x: 0, y: -1, dir: "up" },
  s: { x: 0, y: 1, dir: "down" },
  ArrowDown: { x: 0, y: 1, dir: "down" },
  a: { x: -1, y: 0, dir: "left" },
  ArrowLeft: { x: -1, y: 0, dir: "left" },
  d: { x: 1, y: 0, dir: "right" },
  ArrowRight: { x: 1, y: 0, dir: "right" },
};

const dirArrow = {
  up: "▲",
  down: "▼",
  left: "◄",
  right: "►",
};

function dirToVector(dir) {
  switch (dir) {
    case "up": return { x: 0, y: -1 };
    case "down": return { x: 0, y: 1 };
    case "left": return { x: -1, y: 0 };
    case "right": return { x: 1, y: 0 };
    default: return { x: 0, y: 0 };
  }
}

export default function TankBattle({ onClose }) {
  const [player, setPlayer] = useState(INITIAL_PLAYER);
  const [playerBullets, setPlayerBullets] = useState([]);
  const [enemyBullets, setEnemyBullets] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // === Refs ===
  const keysPressed = useRef({});
  const playerRef = useRef(player);
  const enemiesRef = useRef(enemies);
  const playerBulletsRef = useRef(playerBullets);
  const enemyBulletsRef = useRef(enemyBullets);
  const gameOverRef = useRef(isGameOver);

  useEffect(() => { playerRef.current = player }, [player]);
  useEffect(() => { enemiesRef.current = enemies }, [enemies]);
  useEffect(() => { playerBulletsRef.current = playerBullets }, [playerBullets]);
  useEffect(() => { enemyBulletsRef.current = enemyBullets }, [enemyBullets]);
  useEffect(() => { gameOverRef.current = isGameOver }, [isGameOver]);

  // === Keyboard control: press and hold ===
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      
      // Prevent default for space and arrow keys
      if ([" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
        e.preventDefault();
      }

      if (key === " ") {
        const { x, y, dir } = playerRef.current;
        setPlayerBullets(prev => [...prev, { x, y, dir }]);
      } else {
        keysPressed.current[key] = true;
      }
    };

    const handleKeyUp = (e) => {
      delete keysPressed.current[e.key];
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const moveInterval = setInterval(() => {
      if (gameOverRef.current) return;

      const keys = Object.keys(keysPressed.current);
      for (const key of keys) {
        const move = ALL_DIRECTIONS[key];
        if (move) {
          setPlayer((prev) => {
            const newX = prev.x + move.x;
            const newY = prev.y + move.y;
            if (newX >= 0 && newX < BOARD_SIZE && newY >= 0 && newY < BOARD_SIZE) {
              const occupyEnemy = enemiesRef.current.some(e => e.x === newX && e.y === newY);
              if (!occupyEnemy) return { x: newX, y: newY, dir: move.dir };
            }
            return { ...prev, dir: move.dir };
          });
          break; // only move in one direction
        }
      }
    }, 100);

    return () => {
      clearInterval(moveInterval);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // === Bullets movement and collision (player & enemy bullets + bullet-bullet collision) ===
  useEffect(() => {
    const tick = setInterval(() => {
      if (gameOverRef.current) return;

      // Move bullets
      const nextPlayerBullets = playerBulletsRef.current.map(b => {
        const v = dirToVector(b.dir);
        return { ...b, x: b.x + v.x, y: b.y + v.y };
      }).filter(b => b.x >= 0 && b.x < BOARD_SIZE && b.y >= 0 && b.y < BOARD_SIZE);

      const nextEnemyBullets = enemyBulletsRef.current.map(b => {
        const v = dirToVector(b.dir);
        return { ...b, x: b.x + v.x, y: b.y + v.y };
      }).filter(b => b.x >= 0 && b.x < BOARD_SIZE && b.y >= 0 && b.y < BOARD_SIZE);

      // Detect bullet-bullet collision
      const bulletKey = (b) => `${b.x}-${b.y}`;
      const playerBulletMap = new Map();
      const enemyBulletMap = new Map();

      for (const b of nextPlayerBullets) playerBulletMap.set(bulletKey(b), b);
      for (const b of nextEnemyBullets) enemyBulletMap.set(bulletKey(b), b);

      const collisionKeys = [...playerBulletMap.keys()].filter(k => enemyBulletMap.has(k));

      const filteredPlayer = nextPlayerBullets.filter(b => !collisionKeys.includes(bulletKey(b)));
      const filteredEnemy = nextEnemyBullets.filter(b => !collisionKeys.includes(bulletKey(b)));

      // Detect player bullet hitting enemy
      const remainingEnemies = enemiesRef.current.filter(e => {
        const hit = filteredPlayer.find(b => b.x === e.x && b.y === e.y);
        return !hit;
      });

      const killed = enemiesRef.current.length - remainingEnemies.length;
      if (killed > 0) {
        setScore(s => s + killed);
        setEnemies(remainingEnemies);
      }

      const filteredPlayerAfterHit = filteredPlayer.filter(
        b => !enemiesRef.current.some(e => e.x === b.x && e.y === b.y)
      );

      // Detect enemy bullet hitting player
      const hitPlayer = filteredEnemy.some(b => b.x === playerRef.current.x && b.y === playerRef.current.y);
      if (hitPlayer) setIsGameOver(true);

      setPlayerBullets(filteredPlayerAfterHit);
      setEnemyBullets(filteredEnemy.filter(b => !(b.x === playerRef.current.x && b.y === playerRef.current.y)));
    }, 100);
    return () => clearInterval(tick);
  }, []);

  // === Enemy AI: move + shoot ===
  useEffect(() => {
    const ai = setInterval(() => {
      if (gameOverRef.current) return;

      // move enemies randomly
      setEnemies(prev =>
        prev.map(en => {
          const dirs = ["up", "down", "left", "right"];
          const shuffled = dirs.sort(() => Math.random() - 0.5);
          for (const d of shuffled) {
            const v = dirToVector(d);
            const nx = en.x + v.x;
            const ny = en.y + v.y;
            const conflictPlayer = nx === playerRef.current.x && ny === playerRef.current.y;
            const conflictEnemy = prev.some(e => e !== en && e.x === nx && e.y === ny);
            if (nx >= 0 && nx < BOARD_SIZE && ny >= 0 && ny < BOARD_SIZE && !conflictPlayer && !conflictEnemy) {
              return { ...en, x: nx, y: ny, dir: d };
            }
          }
          return en;
        })
      );

      // enemies shoot
      setEnemyBullets(prev => {
        const shots = enemiesRef.current.map(en => {
          const dx = playerRef.current.x - en.x;
          const dy = playerRef.current.y - en.y;
          let dir = en.dir;
          if (Math.abs(dx) > Math.abs(dy)) dir = dx > 0 ? "right" : "left";
          else if (dy !== 0) dir = dy > 0 ? "down" : "up";
          if (Math.random() < 0.3) return { x: en.x, y: en.y, dir };
          return null;
        }).filter(Boolean);
        return [...prev, ...shots];
      });
    }, 400);
    return () => clearInterval(ai);
  }, []);

  // === Spawn enemies ===
  useEffect(() => {
    const spawner = setInterval(() => {
      if (gameOverRef.current) return;
      for (let tries = 0; tries < 10; tries++) {
        const x = Math.floor(Math.random() * BOARD_SIZE);
        const y = Math.floor(Math.random() * 4);
        const conflict = enemiesRef.current.some(e => e.x === x && e.y === y);
        if (!conflict && !(x === playerRef.current.x && y === playerRef.current.y)) {
          const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
          setEnemies(prev => [...prev, { id, x, y, dir: "down" }]);
          break;
        }
      }
    }, 3000);
    return () => clearInterval(spawner);
  }, []);

  const resetGame = () => {
    setPlayer(INITIAL_PLAYER);
    setEnemies([]);
    setPlayerBullets([]);
    setEnemyBullets([]);
    setScore(0);
    setIsGameOver(false);
  };

  const isEnemyAt = (x, y) => enemies.find(e => e.x === x && e.y === y);
  const isBulletAt = (x, y, type) =>
    (type === "player" ? playerBullets : enemyBullets).some(b => b.x === x && b.y === y);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center text-white p-4 z-[9999]">
      <div className="relative bg-blue-700 rounded-lg shadow-lg border border-gray-700 p-4 w-fit">
        {/* Close button (always visible) */}
        <button
          onClick={() => onClose?.()}
          className="absolute top-2 right-2 text-white text-xl hover:text-red-400"
          title="Close"
        >
          ×
        </button>
        <div className="flex items-center justify-between mb-3 mr-3">
          <h2 className="text-lg font-bold">🔥 Tank Battle</h2>
          <div className="text-sm">
            <div>Score: <span className="font-medium">{score}</span></div>
            <div>Enemies: <span className="font-medium">{enemies.length}</span></div>
          </div>
        </div>

        {/* Game Board */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
            gridTemplateRows: `repeat(${BOARD_SIZE}, 20px)`,
            gap: "2px",
          }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, idx) => {
            const x = idx % BOARD_SIZE;
            const y = Math.floor(idx / BOARD_SIZE);
            const isPlayer = x === player.x && y === player.y;
            const enemy = isEnemyAt(x, y);
            const bulletP = isBulletAt(x, y, "player");
            const bulletE = isBulletAt(x, y, "enemy");

            let bg = "bg-gray-800";
            let symbol = "";
            if (isPlayer) {
              bg = "bg-blue-600 text-white";
              symbol = dirArrow[player.dir];
            } else if (enemy) {
              bg = "bg-red-600 text-white";
              symbol = dirArrow[enemy.dir];
            } else if (bulletP || bulletE) {
              if (bulletP && bulletE) {
                bg = "bg-purple-400";
                symbol = "×";
              } else {
                bg = bulletP ? "bg-yellow-300" : "bg-orange-400";
                symbol = "•";
              }
            }

            return (
              <div
                key={idx}
                className={`w-5 h-5 text-xs flex items-center justify-center font-bold ${bg}`}
              >
                {symbol}
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-3 text-sm">
          <div>Move: <span className="font-medium">W A S D</span> or <span className="font-medium">Arrow Keys</span> | Shoot: <span className="font-medium">Space</span></div>
          {/* <div className="text-xs text-gray-400 mt-1">
            Hold keys to move continuously. Bullets cancel each other on collision.
          </div> */}
        </div>

        {isGameOver && (
          <div className="mt-3 text-center">
            <div className="text-2xl text-red-500 font-bold">💥 You were hit!</div>
            <div className="mt-2">
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded mr-2"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
