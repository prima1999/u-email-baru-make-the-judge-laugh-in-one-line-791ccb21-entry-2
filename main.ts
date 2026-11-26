import { mkdirSync as ensureDir, writeFileSync as writeText } from "node:fs";

const entryLine =
  "My mum found my childhood diary and left a voicemail saying she has questions, mostly about why I wrote 'do not open' on the page where I ranked my siblings by who I would save from a fire.";

ensureDir("/output", { recursive: true });
writeText("/output/entry.txt", entryLine, "utf8");
