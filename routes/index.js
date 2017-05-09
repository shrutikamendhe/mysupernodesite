var express = require('express');
var router = express.Router();
var connectionString = process.env.POSTGRESQLCONNSTR_DefaultConnection;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: connectionString });
});

module.exports = router;
