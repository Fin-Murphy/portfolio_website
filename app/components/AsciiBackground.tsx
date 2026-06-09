"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "@/app/hooks/useAnimationFrame";
import { waveField } from "@/app/lib/waveField";

const FONT_CLASSES = "font-mono text-[10px] leading-[1.2]";

export default function AsciiBackground() {
  const preRef = useRef<HTMLPreElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const cellRef = useRef({ w: 6, h: 12 });
  const mouseRef = useRef<{ col: number; row: number } | null>(null);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  // Measure one character cell, then size the grid to the viewport.
  useEffect(() => {
    const measure = () => {
      const span = measureRef.current;
      if (!span) return;
      const rect = span.getBoundingClientRect();
      const w = rect.width / 10; // the span holds 10 characters
      const h = rect.height;
      cellRef.current = { w, h };
      const cols = Math.ceil(window.innerWidth / w) + 1;
      const rows = Math.ceil(window.innerHeight / h) + 1;
      setGrid({ cols, rows });
      // Paint a static first frame right away: covers the pre-measure blank,
      // and is the only frame shown when prefers-reduced-motion is set.
      if (preRef.current) {
        preRef.current.textContent = waveField(0, { cols, rows, mouse: null });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Track the cursor in cell coordinates to drive the halo — but only on devices
  // with a real mouse pointer. Touch devices have no hover, so we leave the field
  // ambient (mouse stays null ⇒ no halo) rather than reacting to taps.
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const { w, h } = cellRef.current;
      mouseRef.current = { col: Math.floor(e.clientX / w), row: Math.floor(e.clientY / h) };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useAnimationFrame((elapsed) => {
    const pre = preRef.current;
    if (!pre || grid.cols === 0) return;
    pre.textContent = waveField(elapsed, {
      cols: grid.cols,
      rows: grid.rows,
      mouse: mouseRef.current,
    });
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden text-zinc-400 dark:text-zinc-600"
    >
      <span
        ref={measureRef}
        className={`invisible absolute left-0 top-0 ${FONT_CLASSES}`}
        style={{ fontVariantLigatures: "none" }}
      >
        0000000000
      </span>
      <pre
        ref={preRef}
        className={FONT_CLASSES}
        style={{ fontVariantLigatures: "none", whiteSpace: "pre" }}
      />
    </div>
  );
}
