const RAMP = " .:•-=+*#o"; // sparse -> dense
// const RAMP = "12345678"; // sparse -> dense, more contrast

export type WaveContext = {
  cols: number;
  rows: number;
  /** Cursor position in cell coordinates, or null if the pointer hasn't moved over the page. */
  mouse: { col: number; row: number } | null;
};

// Monospace cells are roughly twice as tall as they are wide, so stretching the
// vertical axis keeps the base pattern — and the cursor halo — from looking
// smeared along the rows.
const Y_SQUASH = 2;

// Reach of the cursor halo, in character columns.
const CURSOR_RADIUS = 9;

/**
 * A slow field of summed sine waves, rendered as a grid of density characters,
 * with a soft pulsing halo around the cursor when `mouse` is set.
 *
 * Pure: the output is fully determined by `(timeMs, ctx)`, so `waveField(0, …)`
 * is a stable first frame suitable for server rendering.
 */
export function waveField(timeMs: number, ctx: WaveContext): string {
  const { cols, rows, mouse } = ctx;
  const t = timeMs / 1000; // seconds
  const lines: string[] = [];

  for (let y = 0; y < rows; y++) {
    const ny = y * Y_SQUASH;
    let line = "";
    for (let x = 0; x < cols; x++) {
      // Base field: three slow sines (≈0.2–0.45 rad/s) summed → value in [-3, 3].
      let v =
        Math.sin(x * 0.12 + t * 0.45) +
        Math.sin(ny * 0.16 - t * 0.33) +
        Math.sin((x + ny) * 0.07 + t * 0.21);

      // Cursor halo: a distance-falloff envelope (Lorentzian — smooth, no cutoff)
      // times a ripple that rings outward from the pointer. Adds a steady lift
      // plus pulsing bright/dark bands; the falloff fades it out by ~2–3 radii.
      if (mouse) {
        const dist = Math.hypot(x - mouse.col, (y - mouse.row) * Y_SQUASH);
        const env = 1 / (1 + (dist / CURSOR_RADIUS) ** 2);
        v += env * (1.5 + 2 * Math.sin(dist * 0.5 - t * 4));
      }

      const n = (v + 3) / 6; // → roughly [0, 1]; the halo can push past 1 (clamped below)
      const idx = Math.min(RAMP.length - 1, Math.max(0, Math.floor(n * RAMP.length)));
      line += RAMP[idx];
    }
    lines.push(line);
  }

  return lines.join("\n");
}
