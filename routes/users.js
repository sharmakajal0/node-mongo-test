var express = require("express");
var router = express.Router();
const mongoService = require("../services/mongoService");

// Use connect method to connect to the Server

/* GET users listing. */

router.get("/", function(req, res, next) {
  mongoService
    .getCollection("users")
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

router.post('/:name', (req, res, next) => {
  const {
    name
  } = newFunction(req);
  mongoService.getCollection('users').insert({
    name: req.name
    }, (err, result) => {
    if(err) {
      res.status(500).send({
        status: 'ERROR',
        error: err
      });
    } else{
      res.send({
        status: 'OK',
        result
      });
    }
  });
});

module.exports = router;
function newFunction(req) {
  return req.param;
}

