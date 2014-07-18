'use strict';

var Blog = require('../proxy/blog');

module.exports = function home(req, res, next) {
  Blog.list(function (err, blogs) {
    if (err) {
      return next(err);
    }
    res.render('index.html', {
      blogs: blogs
    });
  });
};
