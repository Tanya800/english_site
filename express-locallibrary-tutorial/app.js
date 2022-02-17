var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

// определяем роутеры
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testsRouter = require('./routes/tests');
var authorizationRouter = require('./routes/authorization');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/users', usersRouter);
app.use('/test',testsRouter);
app.use('/authorization',authorizationRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// // синхронизация с бд option:{force: true}
mongoose.connect("mongodb://localhost:27017/english_test", { useUnifiedTopology: true }, function(err){
  if(err) return console.log(err);
  app.listen(8000, function(){
    console.log("Сервер ожидает подключения...");
  });
});

module.exports = app;

