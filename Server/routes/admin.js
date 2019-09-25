var express = require('express');
var router = express.Router();

/* GET admin listing. */
router.get('/', function(req, res, next) {
  res.send('hello admin');
});

module.exports = router;