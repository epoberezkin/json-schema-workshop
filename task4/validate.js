'use strict';

const Ajv = require('ajv');
const assert = require('assert');

const filterSchema = process.env.NODE_ENV == 'test'
                    ? require('../answers/task4_filter_schema')
                    : require('./filter_schema');

const users = require('./users');

const ajv = new Ajv;

const validate = ajv.compile(filterSchema);
const filteredUsers = users.filter(user => validate(user));

assert.deepEqual(filteredUsers, [{
  "personal": {
    "name": "John Smith",
    "age": 65,
    "gender": "male"
  },
  "feeds": {
    "news": true,
    "sport": true,
  }
}]);

console.log('You\'ve done task 4!');
