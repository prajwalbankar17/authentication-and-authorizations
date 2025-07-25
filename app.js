const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", function (req, res) {
  res.cookie("name", "prajwal");
  res.send("done");
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("prajwal", salt, function (err, hash) {
      console.log(hash);
    });
  });
});
app.listen(3000);
