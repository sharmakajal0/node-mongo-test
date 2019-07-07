var express = require("express");
var router = express.Router();
const mongoService = require("../services/mongoService");

// Use connect method to connect to the Server

/* GET users listing. */

router.get("/", function(req, res, next) {
  mongoService
    .getCollection("factory")
    .find({})
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.send(docs);
      }
    });
});

module.exports = router;
