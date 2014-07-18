'use strict';

var Blog = require('../proxy/blog');

module.exports = function home(req, res, next) {
	console.log(req.cookies);
	if (req.cookies.user == undefined || req.cookies.pass == undefined) {
		res.writeHeader(302, {
	      	Location: '/login'
	    });
    	res.end();
	} else {
		// try auto login and render /admin
		res.render('admin.html', {});
	}
  	
};
