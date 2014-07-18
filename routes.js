"use strict";

var home = require('./controllers/home');
var admin = require('./controllers/admin');
var login = require('./controllers/login');
var loginAdmin = require('./controllers/loginAdmin');

var blogAdmin = require('./controllers/blogAdmin');

module.exports = function routes (app) {
	app.get('/', home);
	app.get('/admin', admin);
	app.get('/login', login);

	app.post('/admin/addblog', blogAdmin.add);
	app.post('/loginpost', loginAdmin.login);
}