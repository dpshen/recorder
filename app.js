var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var WebResult = require('./libs/WebResult');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('*', function (req, res, next) {
    req.rst = new WebResult(req);
    next()
});

//app.use(function(req, res, next){
//  console.log(req.originalUrl);
//  var rst = req.query;
//  rst.url = req.originalUrl;
//  rst.hostname = req.hostname;
//  res.end(JSON.stringify(rst))
//})

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    req.rst.set(-1, err.message);
    res.end(req.rst.toString());
});


module.exports = app;
