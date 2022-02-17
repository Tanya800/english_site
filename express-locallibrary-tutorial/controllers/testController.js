const Test = require("../models/test.js");


//возвращает представление create.ejs для добавления нового теста
exports.addTest = function (request, response){
    response.render("create_test.ejs");
};

//найти и вывести все слова для выбранного теста
exports.getWords = function (request, response){
    id = request.params.id;

    Test.findById(id,'words',function (err,data) {
        if(err) return console.log(err);
        response.render("test_enter.ejs",{test_id:id,words:data.words});
    });
};

//получает отправленные данные, создает объект Test и вызывает у него метод save, тем самым сохраняя его
exports.saveTest= function(request, response){

    if(!request.body) return response.sendStatus(400);
    const title = request.body.title;
    const description = request.body.description;
    const picture = request.body.picture;
    const words = [];

    const test = new Test({title: title, description: description,picture:picture,words:words});

    test.save(function(err){
        if(err) return console.log(err);
        response.redirect("/");
    });
};

exports.prepareWords= function (request,response) {
    id = request.params.id;

    Test.findById(id,'words',function (err,data) {
        if(err) return console.log(err);
        response.render("test_process.ejs",{test_id:id,words:data.words});
    });
}

exports.addWords = function (request,response) {
    response.render("add_words.ejs",{test_id:request.params.id});
}


exports.saveWords = function (request,response) {

    if(!request.body) return response.sendStatus(400);

    const test_id = request.body.test_id;
    const new_word = request.body.word;
    const translated = request.body.translated;
    const img = request.body.word + '.png';
    const arr ={
        word:new_word,
        translate:translated,
        img:img
    };

    Test.findOneAndUpdate({_id:test_id},{$push: {words:arr}},function (err) {
        if(err) return console.log(err);
        response.redirect("/test/"+test_id);
    });
    // Test.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
    //     if (err) return res.send(500, {error: err});
    //     return res.send('Succesfully saved.');
    // });
    //
    // const word = new Word({word: new_word, translate: translated,speech_part:speech_part,test_id:test_id});
    //
    // word.save(function(err){
    //     if(err) return console.log(err);
    //     response.redirect("/test/"+test_id);
    // });
}