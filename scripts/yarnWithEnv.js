// OLD     "withEnv:dev": "DOTENV_CONFIG_PATH=.env.development node -r dotenv/config ./scripts/yarnWithEnv"

const spawn = require("child_process").spawn;

// Executes a yarn command in the context of a dotenv file
const args = process.argv.slice(2);
const child = spawn("yarn", args, { stdio: "inherit" });

child.on("exit", function (code) {
  process.exit(code);
});
