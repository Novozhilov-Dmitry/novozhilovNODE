const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("GOT 'EM!");
});
app.listen(3000, () => console.log("localhost:3000 стартовал"));
