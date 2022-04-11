const express = require("express");
const path = require("path");

const app = express();

const http = require("http").createServer(app);

http.listen(3001, () => {
  console.log("listening on 3001 port");
});

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
