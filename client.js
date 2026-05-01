const WebSocket = require("ws");
const readline = require("readline");

const ws = new WebSocket("ws://localhost:3000");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

ws.on("open", () => {
  console.log("🔗 Connected to server");

  rl.on("line", (input) => {
    ws.send(input);
  });
});

ws.on("message", (message) => {
  console.log(`📢 Broadcast: ${message}`);
});

ws.on("close", () => {
  console.log("❌ Disconnected from server");
  process.exit(0);
});

ws.on("error", (err) => {
  console.error("⚠️ Error:", err.message);
});