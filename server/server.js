const express = require("express");
const path = require("path");

const app = express();

const http = require("http").createServer(app);

http.listen(3000, () => {
  console.log("listening on 3000 port");
});

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
