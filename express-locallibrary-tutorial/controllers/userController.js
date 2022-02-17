const User = require("../models/user.js");

//возвращает представление create.ejs для добавления нового пользователя
exports.addUser = function (request, response){
    response.render("create.ejs");
};

// возвращает представление users.ejs, в которое передает список пользователей с помощью вызова метода User.find()
exports.getUsers = function(request, response){

    //получает данные из базы данных и передает их в представление users.ejs.

    User.find({}, function(err, allUsers){

        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        console.log(allUsers)
        response.render("users.ejs", {
            users: allUsers
        });
    });

};

//получает отправленные данные, создает объект User и вызывает у него метод save, тем самым сохраняя его в массив users из файла user.js.
exports.postUser= function(request, response){

    if(!request.body) return response.sendStatus(400);
    const userName = request.body.name;
    const userAge = request.body.age;
    const user = new User({name: userName, age: userAge});

    user.save(function(err){
        if(err) return console.log(err);
        response.redirect("/users");
    });
};