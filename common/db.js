'use strict';

/**
 * Module dependencies.
 */

var leveldb = require('level');
var config = require('../config');

var db = leveldb(config.db, {
  valueEncoding: 'json'
});

var userdb = leveldb(config.userdb, {
	valueEncoding: 'json'
});

exports.blog = db;
exports.user = userdb;