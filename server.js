const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://127.0.0.1:27017/mongo_4")
  .then(() => {
    console.log("mongodb connect success");
  })
  .catch((err) => {
    console.error(`mongodb connect error: ${err}`);
  });

const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
