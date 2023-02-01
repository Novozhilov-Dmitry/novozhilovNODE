const express = require("express");
const app = express();
const path = require("path");
console.log("Filename:np", path.basename(__filename));
console.log("Dirname:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));
console.log("Path object:", path.parse(__filename).dir);
app.get("/", function (req, res) {
  res.send("GOT 'EM!");
});
app.listen(3000, () => console.log("localhost:3000 стартовал"));
