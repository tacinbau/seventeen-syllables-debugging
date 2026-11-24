import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 syllables, 17 in all.
// Line 1: Break-point(2) holds(1) its(1) breath(1) = 5
// Line 2: log(1) scrolls(1) past(1) at(1) three(1) a.m.(2) = 7
// Line 3: I(1) typed(1) the(1) bug(1) in(1) = 5
const haiku = [
  "Breakpoint holds its breath",
  "log scrolls past at three a.m.",
  "I typed the bug in",
].join("\n");

const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, haiku + "\n", "utf8");
console.log(haiku);
