'use strict';

/**
 * Module dependencies.
 */

var utility = require('utility');
var crypto = require('crypto');
var db = require('../common/db').blog;

//insert
exports.insert = function (blog, callback) {
	//get id
	var id = utility.md5(blog.title + crypto.randomBytes(60).toString('hex'));
	db.put(id, blog, function (err) {
	    callback(err, id);
	});
};


//list
exports.list = function (callback) {
	var err = null;
  	var items = [];

  	db.createReadStream().on('data', function (data) {
  		var value = data.value;
  		items.push(value);
  	}).on('err', function (err) {
  		err = err;
  	}).on('end', function () {
  		items.sort(function (a, b) {
	      	return a.created_at > b.created_at ? -1 : 1;
	    });

	    callback(err, items);
  	})
}