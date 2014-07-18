"use strict";

var path = require('path');
var version = require('./package.json').version;

var config = {
	version: version,
	debug: true,
	port: 1989,
	session_secret: 'blog session secret',
	db: path.join(__dirname, 'db/blog.db'),
	userdb: path.join(__dirname, 'db/user.db')
};

module.exports = config;