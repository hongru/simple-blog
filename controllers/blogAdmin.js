'use strict';

var Blog = require('../proxy/blog');


exports.add = function (req, res, next) {
	var title = req.body.title;
	var content = req.body.content;
  	var blog = { title: title, content: content, created_at: new Date() };

  	Blog.insert(blog, function (err, item) {
  		if (err) {
	      	return next(err);
	    }
    	res.writeHeader(302, {
      		Location: '/'
    	});
    	res.end();
  	});
};


exports.delete = function (req, res, next) {

};

exports.update = function (req, res, next) {

};
