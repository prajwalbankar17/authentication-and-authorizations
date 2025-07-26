// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");

// app.get("/", function (req, res) {
//   res.cookie("name", "prajwal");
//   res.send("done");
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("prajwal", salt, function (err, hash) {
//       console.log(hash);
//     });
//   });
// });
// app.listen(3000);




const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//cookie-parser helps to:
//Read and parse cookies from the request headers
//Make cookies available via req.cookies object
//Handle signed cookies 
app.use(cookieParser());

app.get("/", function (req, res) {
    let token = jwt.sign({email: "prajwal@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("done")
})

app.get('/read', function (req, res) {
   console.log(req.cookies.token);
})

app.listen(3000);
//