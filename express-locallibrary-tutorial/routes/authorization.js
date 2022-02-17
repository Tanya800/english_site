var express = require('express');
var router = express.Router();

// const authorizationController = require("../controllers/authorizationController.js");


// router.use('/checkin', authorizationController.addTest);
router.get('/',(reg,response)=>response.render('authorization.ejs'));


module.exports = router;