import { useEffect, useRef, useState } from "react";

const HEADER_H = 64;
const INSET = 22;
const SVG_W = 50;
const SVG_H = 50;

const Hedgehog = () => {
  const [p, setP] = useState(50);
  const [dir, setDir] = useState(1);
  const [curled, setCurled] = useState(false);
  const [scared, setScared] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [bounce, setBounce] = useState(0);
  const [vp, setVp] = useState({ w: 1200, h: 800 });

  const refs = useRef({ dir: 1, curled: false, scared: false, hovered: false });
  refs.current.dir = dir;
  refs.current.curled = curled;
  refs.current.scared = scared;
  refs.current.hovered = hovered;

  const initRef = useRef(false);

  useEffect(() => {
    const updateVp = () =>
      setVp({ w: window.innerWidth, h: window.innerHeight });
    updateVp();
    if (!initRef.current) {
      initRef.current = true;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const sx = Math.max(1, w - 2 * INSET);
      const sy = Math.max(1, h - HEADER_H - 2 * INSET);
      // Start on the top edge, centered horizontally (just below header)
      setP(sx + sy + sx / 2);
    }
    window.addEventListener("resize", updateVp);
    return () => window.removeEventListener("resize", updateVp);
  }, []);

  useEffect(() => {
    let last = performance.now();
    let frame;
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!refs.current.curled && !refs.current.hovered) {
        const speed = refs.current.scared ? 130 : 30;
        setP((prev) => prev + refs.current.dir * speed * dt);
        setBounce((b) => b + dt * (refs.current.scared ? 22 : 10));
        if (!refs.current.scared && Math.random() < 0.0015) {
          setDir((d) => -d);
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    if (curled) return;
    setCurled(true);
    setTimeout(() => {
      setCurled(false);
      setDir((d) => -d);
      setScared(true);
      setTimeout(() => setScared(false), 1800);
    }, 900);
  };

  const spanX = Math.max(1, vp.w - 2 * INSET);
  const spanY = Math.max(1, vp.h - HEADER_H - 2 * INSET);
  const perimeter = 2 * spanX + 2 * spanY;
  const pn = ((p % perimeter) + perimeter) % perimeter;

  let cx, cy, rot;
  if (pn < spanX) {
    cx = INSET + pn;
    cy = vp.h - INSET;
    rot = 0;
  } else if (pn < spanX + spanY) {
    cx = vp.w - INSET;
    cy = vp.h - INSET - (pn - spanX);
    rot = -90;
  } else if (pn < 2 * spanX + spanY) {
    cx = vp.w - INSET - (pn - spanX - spanY);
    cy = HEADER_H + INSET;
    rot = 180;
  } else {
    cx = INSET;
    cy = HEADER_H + INSET + (pn - 2 * spanX - spanY);
    rot = 90;
  }

  const wiggleY = curled || rot !== 0 ? 0 : Math.sin(bounce) * 1.5;

  const [ix, iy] =
    rot === 0
      ? [0, -1]
      : rot === -90
      ? [-1, 0]
      : rot === 180
      ? [0, 1]
      : [1, 0];
  const tipX = cx + ix * 60;
  const tipY = cy + iy * 60;

  const BODY = "#a68258";
  const CREAM = "#f5e6c0";
  const DARK = "#1a0f08";

  const curledCx = SVG_W / 2;
  const curledCy = SVG_H / 2;

  return (
    <>
      {hovered && !curled && (
        <div
          style={{
            position: "fixed",
            left: tipX,
            top: tipY,
            transform: "translate(-50%, -50%)",
            background: "white",
            border: `1.5px solid ${DARK}`,
            borderRadius: "12px",
            padding: "4px 10px",
            fontSize: "12px",
            fontWeight: 600,
            color: DARK,
            pointerEvents: "none",
            zIndex: 9999,
            whiteSpace: "nowrap",
            boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
            fontFamily: "Georgia, serif",
          }}
        >
          click me! I'll curl up 🌀
        </div>
      )}
      <svg
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title="click me!"
        width={SVG_W}
        height={SVG_H}
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        style={{
          position: "fixed",
          left: cx - SVG_W / 2,
          top: cy - SVG_H / 2 + wiggleY,
          transform: `rotate(${rot}deg)${
            dir === -1 ? " scaleX(-1)" : ""
          }${hovered && !curled ? " scale(1.15)" : ""}`,
          transformOrigin: "50% 50%",
          cursor: "pointer",
          zIndex: 9998,
          userSelect: "none",
          overflow: "visible",
          transition: "transform 0.18s ease-out",
          filter:
            hovered && !curled
              ? "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
              : "none",
        }}
      >
        {curled ? (
          <g>
            {Array.from({ length: 14 }).map((_, i) => {
              const a = (i / 14) * Math.PI * 2;
              const spread = Math.PI / 14;
              const r1 = 14;
              const r2 = 22;
              const x1 = curledCx + Math.cos(a - spread) * r1;
              const y1 = curledCy + Math.sin(a - spread) * r1;
              const x2 = curledCx + Math.cos(a + spread) * r1;
              const y2 = curledCy + Math.sin(a + spread) * r1;
              const xt = curledCx + Math.cos(a) * r2;
              const yt = curledCy + Math.sin(a) * r2;
              return (
                <polygon
                  key={i}
                  points={`${x1},${y1} ${xt},${yt} ${x2},${y2}`}
                  fill={BODY}
                />
              );
            })}
            <circle cx={curledCx} cy={curledCy} r="15" fill={BODY} />
            <path
              d={`M ${curledCx - 5} ${curledCy + 3} Q ${curledCx - 2} ${
                curledCy + 6
              } ${curledCx + 1} ${curledCy + 3}`}
              stroke={DARK}
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d={`M ${curledCx + 3} ${curledCy + 3} Q ${curledCx + 6} ${
                curledCy + 6
              } ${curledCx + 9} ${curledCy + 3}`}
              stroke={DARK}
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ) : (
          <g>
            {/* Body silhouette with integrated spike peaks (facing right) */}
            <path
              d="M 4 44
                 Q 2 40 3 32
                 L 3 26
                 Q 4 20 7 24
                 L 8 20
                 Q 11 4 15 22
                 Q 17 12 20 22
                 Q 23 2 27 22
                 Q 29 14 31 22
                 Q 34 6 37 24
                 Q 40 18 43 24
                 Q 45 28 48 34
                 Q 49 38 48 42
                 L 47 44
                 Q 30 47 6 46
                 Q 2 45 4 44 Z"
              fill={BODY}
            />
            {/* Cream face patch — extends from snout back under eye */}
            <path
              d="M 39 38
                 Q 42 34 45 36
                 L 47 42
                 L 48 43
                 L 47 45
                 L 43 46
                 Q 39 46 38 42
                 Q 37 40 39 38 Z"
              fill={CREAM}
            />
            {/* Cream back-leg patch */}
            <path
              d="M 3 38
                 Q 1 42 3 46
                 L 9 47
                 Q 11 45 10 40
                 Q 6 37 3 38 Z"
              fill={CREAM}
            />
            {/* Eye */}
            <circle cx="43" cy="40" r="1.8" fill={DARK} />
            <circle cx="43.5" cy="39.5" r="0.55" fill="white" />
            {/* Nose */}
            <circle cx="48" cy="43" r="1.5" fill={DARK} />
          </g>
        )}
      </svg>
    </>
  );
};

export default Hedgehog;
