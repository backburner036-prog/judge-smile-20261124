// Make the Judge Smile — make.fun entry
// Line (141 bytes): warm small good thing today, concrete detail (warung
// auntie, krupuk, Tuesday), surprise turn at the end — she charges LESS
// because Tuesdays are for people who look tired.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning the warung auntie slipped an extra krupuk into my bag and charged me less — Tuesdays, she said, are for people who look tired.";

// Gate: entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
