const RAMP = " .:-=+*#%@"; // sparse -> dense

export type WaveContext = {
  cols: number;
  rows: number;
  /** Cursor position in cell coordinates. Accepted for future interactivity; unused for now. */
  mouse: { col: number; row: number } | null;
};

// Monospace cells are roughly twice as tall as they are wide, so stretching the
// vertical axis keeps the pattern from looking smeared along the rows.
const Y_SQUASH = 2;

/**
 * A slow field of summed sine waves, rendered as a grid of density characters.
 *
 * Pure: the output is fully determined by `(timeMs, ctx)`, so `waveField(0, …)`
 * is a stable first frame suitable for server rendering.
 */
export function waveField(timeMs: number, ctx: WaveContext): string {
  const { cols, rows } = ctx;
  const t = timeMs / 1000; // seconds
  const lines: string[] = [];

  for (let y = 0; y < rows; y++) {
    const ny = y * Y_SQUASH;
    let line = "";
    for (let x = 0; x < cols; x++) {
      // Three slow sines (≈0.2–0.45 rad/s) summed → value in [-3, 3].
      const v =
        Math.sin(x * 0.12 + t * 0.45) +
        Math.sin(ny * 0.16 - t * 0.33) +
        Math.sin((x + ny) * 0.07 + t * 0.21);
      const n = (v + 3) / 6; // → [0, 1]
      const idx = Math.min(RAMP.length - 1, Math.max(0, Math.floor(n * RAMP.length)));
      line += RAMP[idx];
    }
    lines.push(line);
  }

  return lines.join("\n");
}
