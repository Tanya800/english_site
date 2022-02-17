const Test = require("../models/test.js");

exports.showTests = function (request, response) {

    Test.find({}, function(err, allTests){

        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        console.log(allTests)
        response.render("index.ejs", {
            tests: allTests
        });
    });
};

exports.about = function (request, response) {
    response.send("О сайте");
};