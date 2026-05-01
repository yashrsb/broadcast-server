# 📡 Broadcast Server (CLI)

A simple CLI-based real-time broadcast server built using Node.js and WebSockets.  
It allows multiple clients to connect and exchange messages instantly via the terminal.

---

## 🚀 Features

- Start a WebSocket server from CLI  
- Connect multiple clients  
- Broadcast messages to all connected clients  
- Handles client connect/disconnect gracefully  
- Lightweight and easy to understand  

---

## 🛠️ Tech Stack

- Node.js  
- WebSocket (`ws` library)  

---

## 📦 Installation

```bash
git clone https://github.com/yashrsb/broadcast-server.git
cd broadcast-server
npm install
```

---

## ▶️ Usage

Start Server
```
broadcast-server start
```

Server runs on:
```
ws://localhost:3000
```

### Connect as Client

Open another terminal:
```
broadcast-server connect
```
---
## 🧪 Example
1. Start server
2. Open 2–3 terminals and connect clients
3. Send a message from any client
4. All clients will receive it instantly
---
## 📁 Project Structure
```
broadcast-server/
│
├── index.js     # CLI entry point
├── server.js    # WebSocket server
├── client.js    # WebSocket client
└── package.json
```
## 📄 License
MIT License