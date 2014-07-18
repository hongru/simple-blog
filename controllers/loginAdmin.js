'use strict';

var user = require('../proxy/user');
var utility = require('utility');

exports.login = function (req, res, next) {
	var username = req.body.username;
	var password = req.body.password;

	user.check(username, password, function (err, log) {
		if (log == 'NOT_FIND') {
			res.writeHeader(302, {
		      Location: '/login?err=not_find'
		    });
		    res.end();
		} else if (log == 'WRONG_PASSWORD') {
			res.writeHeader(302, {
		      Location: '/login?err=wrong_password'
		    });
		    res.end();
		} else if (log == 'SUCCESS') {
			//write cookie
			//console.log(res.cookie);
			res.cookie('user', username);
			res.cookie('pass', utility.md5(password));

			res.writeHeader(302, {
		      Location: '/admin'
		    });
		    res.end();
		}
	});
};