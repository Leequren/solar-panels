import dotenv from "dotenv";
import { spawn } from "node:child_process";

dotenv.config();
const caddyConfigPath = process.env.CADDY_CONFIG;

if (!caddyConfigPath) {
  console.error("CADDY_CONFIG environment variable is not set.");
  process.exit(1);
}
console.log(`Команда запуска: caddy run --config ${caddyConfigPath}`);
const caddyProcess = spawn("caddy", ["run", "--config", caddyConfigPath]);
console.log(caddyConfigPath);

caddyProcess.stdout.on("data", (data) => {
  console.log(`[CADDY OUTPUT]: ${data}`);
});

caddyProcess.stderr.on("data", (data) => {
  console.error(`[CADDY INFO]: ${data}`);
});

caddyProcess.on("close", (code) => {
  console.log(`[CADDY CLOSE]: ${code}`);
});
