var express = require('express');
var router = express.Router();
var connectionString = process.env.CUSTOMCONNSTR_DefaultConnection;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: connectionString });
});

module.exports = router;
