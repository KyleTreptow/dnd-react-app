var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', require('./routes/api'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  // Hard code a list of routes to not 404 on. Excludes /api
  let validUrls = ['login', 'service-worker.js'];
  let currentUrl = req.url.substring(1);
  let valid = validUrls.filter(el => el.indexOf(currentUrl) > -1).length > 0;

  // Send a 404 if applicable
  if(!valid) res.status(404);
  // We'll handle 404s in React, so send them the index regardless
  res.sendFile(
    'index.html',
    {
      root: path.join(__dirname, 'build')
    }
  );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
