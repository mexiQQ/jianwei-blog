import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
];
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};
const posToKey = (x, y) => `${x}-${y}`;

function SnakeGame({ onClose }) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [snakeSet, setSnakeSet] = useState(
    () => new Set(INITIAL_SNAKE.map(seg => posToKey(seg.x, seg.y)))
  );
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [food, setFood] = useState(getRandomFood(INITIAL_SNAKE));
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

  // === Events ===
  const [perturbationActive, setPerturbationActive] = useState(false);
  const [oodActive, setOodActive] = useState(false);
  const [eventMessage, setEventMessage] = useState('');

  function getRandomFood(snakeArr) {
    const occupied = new Set(snakeArr.map(s => posToKey(s.x, s.y)));
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE),
      };
    } while (occupied.has(posToKey(newFood.x, newFood.y)));
    return newFood;
  }

  // 🔁 Keyboard control with perturbation & OOD delay
  const handleKeyDown = (e) => {
    if (isGameOver) {
      if (e.key === 'Escape') onClose();
      return;
    }

    let newDir = DIRECTIONS[e.key];
    if (newDir) {
      e.preventDefault();

      // perturbation flips controls
      if (perturbationActive) {
        newDir = { x: -newDir.x, y: -newDir.y };
      }

      const nextX = snake[0].x + newDir.x;
      const nextY = snake[0].y + newDir.y;
      if (
        snake.length > 1 &&
        nextX === snake[1].x &&
        nextY === snake[1].y
      )
        return;

      // ✅ OOD delay: simulate sluggish model reaction (500 ms)
      if (oodActive) {
        setTimeout(() => setDirection(newDir), 500);
      } else {
        setDirection(newDir);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  // 🔒 Prevent scroll & bind keys
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [snake, perturbationActive, oodActive, isGameOver]);

  // 🎮 Game loop
  useEffect(() => {
    if (isGameOver) return;

    intervalRef.current = setInterval(() => {
      setSnake(prevSnake => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        const key = posToKey(newHead.x, newHead.y);
        const newSnakeSet = new Set(snakeSet);

        const hitWall =
          newHead.x < 0 ||
          newHead.x >= BOARD_SIZE ||
          newHead.y < 0 ||
          newHead.y >= BOARD_SIZE;
        const hitSelf = newSnakeSet.has(key);

        if (hitWall || hitSelf) {
          setIsGameOver(true);
          clearInterval(intervalRef.current);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];
        newSnakeSet.add(key);

        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomFood(newSnake));
          setScore(score => score + 1);
        } else {
          const tail = newSnake.pop();
          newSnakeSet.delete(posToKey(tail.x, tail.y));
        }

        setSnakeSet(newSnakeSet);
        return newSnake;
      });
    }, 150);

    return () => clearInterval(intervalRef.current);
  }, [direction, food, snakeSet, isGameOver]);

  // 🎯 Random event triggers
  useEffect(() => {
    if (isGameOver) return;

    const eventInterval = setInterval(() => {
      const eventType = Math.random() < 0.5 ? 'perturb' : 'ood';

      if (eventType === 'perturb') {
        setPerturbationActive(true);
        setEventMessage('⚠️ Adversarial perturbation active! Your inputs may be hijacked.');
        setTimeout(() => {
          setPerturbationActive(false);
          setEventMessage('');
        }, 10000);
      } else {
        setOodActive(true);
        setEventMessage('⚠️ Out-of-Distribution Environment! Reaction delay + visual drift.');
        setTimeout(() => {
          setOodActive(false);
          setEventMessage('');
        }, 10000);
      }
    }, 15000);

    return () => clearInterval(eventInterval);
  }, [isGameOver]);

  const resetGame = () => {
    clearInterval(intervalRef.current);
    const initial = INITIAL_SNAKE;
    setSnake(initial);
    setSnakeSet(new Set(initial.map(seg => posToKey(seg.x, seg.y))));
    setDirection(DIRECTIONS.ArrowRight);
    setFood(getRandomFood(initial));
    setIsGameOver(false);
    setScore(0);
    setPerturbationActive(false);
    setOodActive(false);
    setEventMessage('');
  };

  const snakeSetMemo = useMemo(
    () => new Set(snake.map(seg => posToKey(seg.x, seg.y))),
    [snake]
  );
  const headKey = posToKey(snake[0].x, snake[0].y);
  const foodKey = posToKey(food.x, food.y);

  return ReactDOM.createPortal(
    (
      <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center text-white">
        <div
          className={`relative p-6 rounded shadow-lg border border-gray-700 transition-all duration-500 ${
            oodActive ? 'bg-pink-700' : 'bg-blue-700'
          }`}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-xl hover:text-red-500"
          >
            ×
          </button>

          <h2 className="text-xl font-bold mb-2 text-center">
            🎮 Snake Citation: AI Safety Edition
          </h2>
          <div className="text-center text-sm font-bold text-gray-300 mb-3">
            Citaions: {score}
          </div>

          {/* Game grid */}
          <div
            className="grid mb-4"
            style={{
              gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
              gridTemplateRows: `repeat(${BOARD_SIZE}, 20px)`,
              gap: '2px',
            }}
          >
            {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
              const x = index % BOARD_SIZE;
              const y = Math.floor(index / BOARD_SIZE);
              const key = posToKey(x, y);
              const isHead = key === headKey;
              const isFood = key === foodKey;
              const isSnake = snakeSetMemo.has(key);

              return (
                <div
                  key={index}
                  className={`w-5 h-5 ${
                    isHead
                      ? (oodActive ? 'bg-yellow-300' : 'bg-green-400')
                      : isSnake
                      ? (oodActive ? 'bg-yellow-700' : 'bg-green-700')
                      : isFood
                      ? (oodActive ? 'bg-pink-500' : 'bg-red-500')
                      : (oodActive ? 'bg-gray-600' : 'bg-gray-800')
                  }`}
                />
              );
            })}
          </div>

          {/* Info panel */}
          <div className="text-sm bg-gray-800 p-3 w-[440px] rounded text-gray-100 leading-snug space-y-1">
						{eventMessage && (
              <div className="mt-2 text-red-600 font-medium animate-pulse">
                {eventMessage}
              </div>
            )}
						<div>
							<p className="font-semibold text-lg">How to Play:</p>
							<ul className="list-disc list-inside text-sm">
								<li>Use arrow keys ← ↑ → ↓ to control the snake.</li>
								<li>Eat red food to grow and gain citation.</li>
							</ul>
						</div>
						<div>
							<p className="mt-2 font-semibold text-lg">
								Random AI Safety Events:
							</p>
							<ul className="list-disc list-inside text-sm">
								<li>
									<strong>Adversarial Perturbation</strong>: Your inputs are
									flipped — up becomes down, left becomes right.
								</li>
								<li>
									<strong>Out-of-Distribution (OOD)</strong>: Visual drift +
									delayed reaction (≈ 500 ms) simulating sluggish model behavior.
								</li>
							</ul>
						</div>
          </div>

          {/* Game over */}
          <div className="flex items-center justify-center">
            {isGameOver && (
              <div className="text-center mt-4">
                <p className="text-red-500 font-bold">Game Over!</p>
                <button
                  onClick={resetGame}
                  className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
                >
                  Restart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    document.body
  );
}

export default SnakeGame;
