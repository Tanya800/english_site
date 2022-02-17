var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController.js");

/* GET users listing. */
router.use('/postuser', userController.postUser);
router.use('/create', userController.addUser);
router.use('/', userController.getUsers);


module.exports = router;
