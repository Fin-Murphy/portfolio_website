"use client";

import { useEffect, useRef } from "react";

type FrameCallback = (elapsedMs: number) => void;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Runs `callback(elapsedMs)` on a requestAnimationFrame loop, throttled to
 * roughly `fps`. Elapsed time is accumulated from per-frame deltas (each delta
 * clamped to 100ms), so a backgrounded tab — where rAF stalls — resumes
 * smoothly instead of jumping. If the user prefers reduced motion, `callback`
 * is invoked once with 0 and the loop never starts.
 *
 * `callback` is read from a ref every render, so it can close over fresh state
 * without restarting the loop.
 */
export function useAnimationFrame(callback: FrameCallback, fps = 24) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (prefersReducedMotion()) {
      callbackRef.current(0);
      return;
    }

    const frameInterval = 1000 / fps;
    let rafId = 0;
    let lastTime: number | null = null;
    let sinceLastFrame = 0;
    let elapsed = 0;

    const loop = (now: number) => {
      rafId = requestAnimationFrame(loop);
      if (lastTime === null) {
        lastTime = now;
        return;
      }
      const delta = Math.min(now - lastTime, 100);
      lastTime = now;
      sinceLastFrame += delta;
      if (sinceLastFrame < frameInterval) return;
      elapsed += sinceLastFrame;
      sinceLastFrame = 0;
      callbackRef.current(elapsed);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [fps]);
}
