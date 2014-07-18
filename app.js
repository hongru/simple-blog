"use strict";


var connect = require('connect');
var path = require('path');
var urlrouter = require('urlrouter');
var render = require('connect-render');
var routes = require('./routes');
var config = require('./config');


//app
var app = connect(
	connect.bodyParser(),
	connect.cookieParser(),
	connect.session({ secret: 'blog secret', key: 'sid' }),
  	connect.csrf(),
  	require('response-cookie')()
);

//static fils
app.use('/public', connect.static(path.join(__dirname, 'public')));

//template
app.use(render({
  root: __dirname + '/views',
  layout: 'layout.html',
  cache: false, // must set `true` for prodution
  helpers: {
    _csrf: function (req, res) {
      return req.session ? req.session._csrf : "";
    },
    now: function (req, res) {
      return new Date();
    },
    config: function () {
      return config;
    }
  }
}));

//routes
app.use(urlrouter(routes));

if (!module.parent) {
  app.listen(config.port);

  console.log('$ open http://127.0.0.1:' + config.port);
}

module.exports = app;