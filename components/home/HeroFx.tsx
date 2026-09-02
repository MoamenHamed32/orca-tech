"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "01アイウエオカキクケコABCDEF<>/|#";

type Column = {
  x: number;
  y: number;
  speed: number;
  glyphs: string[];
};

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "0";
}

function makeColumns(width: number, height: number): Column[] {
  const gap = 52;
  const columns: Column[] = [];
  for (let x = 24; x < width - 16; x += gap) {
    if (Math.random() > 0.72) continue;
    const length = 9 + Math.floor(Math.random() * 7);
    columns.push({
      x,
      y: Math.random() * -height,
      speed: 28 + Math.random() * 32,
      glyphs: Array.from({ length }, randomGlyph),
    });
  }
  return columns;
}

export function HeroFx({ reduce }: { reduce: boolean | null }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduce) return;

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let last = performance.now();
    let mouseX = 0.7;
    let mouseY = 0.4;
    let targetX = 0.7;
    let targetY = 0.4;
    let columns: Column[] = [];
    const nodes = Array.from({ length: 78 }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    }));

    const seedNodes = () => {
      nodes.forEach((node) => {
        node.x = width * (0.06 + Math.random() * 0.88);
        node.y = height * (0.08 + Math.random() * 0.84);
        node.vx = (Math.random() - 0.5) * 10;
        node.vy = (Math.random() - 0.5) * 10;
      });
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = makeColumns(width, height);
      seedNodes();
    };

    const onMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      targetX = (event.clientX - rect.left) / rect.width;
      targetY = (event.clientY - rect.top) / rect.height;
    };

    const draw = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;

      mouseX += (targetX - mouseX) * 0.12;
      mouseY += (targetY - mouseY) * 0.12;

      const cursorX = mouseX * width;
      const cursorY = mouseY * height;

      ctx.clearRect(0, 0, width, height);
      ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const column of columns) {
        column.y += column.speed * delta;
        if (column.y > height + 40) {
          column.y = -column.glyphs.length * 18 - Math.random() * 160;
          column.speed = 28 + Math.random() * 32;
          column.glyphs = column.glyphs.map(randomGlyph);
        }

        const dist = Math.hypot(column.x - cursorX, column.y + 40 - cursorY);
        const near = Math.max(0, 1 - dist / 220);

        column.glyphs.forEach((glyph, index) => {
          const y = column.y + index * 18;
          if (y < -20 || y > height + 20) return;
          const fade = 1 - index / column.glyphs.length;
          const alpha = fade * (0.14 + near * 0.28);
          ctx.fillStyle =
            index === 0
              ? `rgba(214, 230, 255, ${Math.min(0.55, alpha + 0.1)})`
              : `rgba(91, 140, 255, ${alpha})`;
          ctx.fillText(glyph, column.x, y);
        });
      }

      const linkDist = 92;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx * delta;
        node.y += node.vy * delta;
        if (node.x < 16 || node.x > width - 16) node.vx *= -1;
        if (node.y < 16 || node.y > height - 16) node.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist >= linkDist) continue;
          const fade = 1 - dist / linkDist;
          ctx.strokeStyle = `rgba(91, 140, 255, ${0.08 + fade * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }

        const cursorDist = Math.hypot(node.x - cursorX, node.y - cursorY);
        if (cursorDist < 160) {
          const fade = 1 - cursorDist / 160;
          ctx.strokeStyle = `rgba(91, 140, 255, ${0.1 + fade * 0.28})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cursorX, cursorY);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }

        ctx.fillStyle =
          cursorDist < 160 ? "rgba(214, 230, 255, 0.72)" : "rgba(91, 140, 255, 0.48)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, cursorDist < 160 ? 2.1 : 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
