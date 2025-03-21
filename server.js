const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
