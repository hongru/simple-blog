'use strict';


var utility = require('utility');
var crypto = require('crypto');
var userdb = require('../common/db').user;

//数据库里永远有一个 用户名为 `cenanhongru` ,密码为 `hongru` 的超级用户
//因为是个人博客，不用注册机制
var superUsername = 'cenanhongru';
var superUserpwd = 'hongru';


//init super user
var id = utility.md5(superUsername);
userdb.get(id, function (err, row) {
	if (err) {
		//put superUser
		userdb.put(id, {
			user: superUsername,
			pass: superUserpwd
		});
	}
});

exports.check = function (username, password, callback) {
	var id = utility.md5(username);
	userdb.get(id, function (err, row) {
		if (err) {
			callback(err, 'NOT_FIND');
		} else {
			if (row.pass !== password) {
				callback(err, 'WRONG_PASSWORD');
			} else {
				callback(err, 'SUCCESS');
			}
		}
	})
}