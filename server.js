const WebSocket = require("ws");

const PORT = 3000;
const wss = new WebSocket.Server({ port: PORT });

let clients = new Set();

console.log(`🚀 Server started on ws://localhost:${PORT}`);

wss.on("connection", (ws) => {
  console.log("✅ New client connected");
  clients.add(ws);

  ws.on("message", (message) => {
    console.log(`📩 Received: ${message}`);

    // Broadcast to all clients
    for (let client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    }
  });

  ws.on("close", () => {
    console.log("❌ Client disconnected");
    clients.delete(ws);
  });

  ws.on("error", (err) => {
    console.error("⚠️ Client error:", err.message);
  });
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...");
  wss.close(() => process.exit(0));
});