#!/usr/bin/env node

const command = process.argv[2];

if (command === "start") {
  require("./server");
} else if (command === "connect") {
  require("./client");
} else {
  console.log(`
Usage:
  broadcast-server start     # Start server
  broadcast-server connect   # Start client
`);
}