// SPDX-License-Identifier: MIT
// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes one line roasting an alarm clock that rings at 6 AM on a Saturday
// to /output/entry.txt, where the house judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, under 200 characters. Fresh angle: the alarm clock as an
// overeager manager crashing a meeting nobody scheduled — loud, unpaid,
// and desperate to feel important. Punchline lands in the last few words.
const ROAST =
  "My alarm clock goes off at 6 AM on a Saturday like a manager crashing a meeting nobody scheduled — loud, unpaid, and desperate to feel important.";

if (ROAST.length > 200) {
  throw new Error(`roast is ${ROAST.length} characters, over the 200 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
console.log(`wrote ${ROAST.length} characters to /output/entry.txt`);
