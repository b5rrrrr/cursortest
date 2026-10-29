const { spawnSync } = require("node:child_process");

const result = spawnSync(process.execPath, ["index.js"], {
  cwd: `${__dirname}/..`,
  encoding: "utf8",
});

if (result.status !== 0) {
  console.error("smoke test failed: index.js did not exit 0");
  process.exit(result.status ?? 1);
}

const line = (result.stdout || "").trim();
if (!line.includes("Cloud Agent environment is working")) {
  console.error("smoke test failed: unexpected output:", line);
  process.exit(1);
}

console.log("smoke test passed");
