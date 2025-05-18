console.log("Hello from Node.js!");

import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello from the backend server!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

import chalk from "chalk";

console.log(chalk.blue("Hello world!"));
