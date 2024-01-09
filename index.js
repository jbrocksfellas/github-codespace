require("dotenv").config();
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});

server.listen(process.env.PORT, () => {
  console.log("server started running on ", process.env.PORT);
});
