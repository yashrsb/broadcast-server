📡 Broadcast Server (CLI)

A simple CLI-based real-time broadcast server built using Node.js and WebSockets.
It allows multiple clients to connect and exchange messages instantly via the terminal.

🚀 Features
Start a WebSocket server from CLI
Connect multiple clients
Broadcast messages to all connected clients
Handles client connect/disconnect gracefully
Lightweight and easy to understand
🛠️ Tech Stack
Node.js
WebSocket (ws library)
📦 Installation
git clone [BroadCast Server](https://github.com/yashrsb/broadcast-server.git)
cd broadcast-server
npm install

(Optional: enable CLI command globally)

npm link
▶️ Usage
Start Server
broadcast-server start

Server runs on:

ws://localhost:3000
Connect as Client

Open another terminal:

broadcast-server connect
Send Messages

Just type in the terminal and press enter.
Your message will be broadcast to all connected clients.

🧪 Example
Start server
Open 2–3 terminals and connect clients
Send a message from any client
All clients will receive it instantly
📁 Project Structure
broadcast-server/
│
├── index.js     # CLI entry point
├── server.js    # WebSocket server
├── client.js    # WebSocket client
└── package.json
🧠 What You Learn
Basics of WebSockets
Real-time communication
Handling multiple client connections
CLI-based Node.js applications
📌 Future Improvements
Add usernames
Private messaging / chat rooms
Message timestamps
Redis-based scaling
Authentication
📄 License

MIT License