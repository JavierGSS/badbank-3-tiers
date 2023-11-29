var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");

app.use(express.static("public"));
app.use(cors());

app.get("/account/create/:name/:email/:password", function (req, res) {
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    });
});

app.get("/account/deposit/:email/:amount", function (req, res) {
  res.send({
    email: req.params.email,
    deposit: req.params.amount,
  });
});

app.get("/account/withdraw/:email/:amount", function (req, res) {
  res.send({
    email: req.params.email,
    withdraw: req.params.amount,
  });
});

app.get("/account/balance/:email", function (req, res) {
  res.send({
    email: req.params.email,
    balance: 100,
  });
});

// get all accounts
app.get("/account/all", (req, res) => {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

var port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
