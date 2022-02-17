var express = require('express');
var router = express.Router();
const testController = require("../controllers/testController.js");


router.use('/create', testController.addTest);
router.use('/posttest', testController.saveTest);
router.use('/addWord/postWord', testController.saveWords);
router.use('/addWord/:id', testController.addWords);
router.get('/testProcess/:id', testController.prepareWords);
router.get('/:id',testController.getWords);
router.get('/',(reg,response)=>response.render('test_old.ejs'));


module.exports = router;
