var express = require('express');
const indexController = require("../controllers/indexController.js");

var router = express.Router();

/* GET home page. */
router.use('/', indexController.showTests);

module.exports = router;
