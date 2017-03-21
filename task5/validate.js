'use strict';

const Ajv = require('ajv');
const assert = require('assert');

const invalidUserData = process.env.NODE_ENV == 'test'
                      ? require('../answers/task5_invalid_user')
                      : require('./invalid_user');

const userSchema = require('../user/schema');

const ajv = new Ajv({allErrors: true});

const validate = ajv.compile(userSchema);
const valid = validate(invalidUserData);
console.log(valid ? 'valid!' : 'invalid!');
if (!valid) {
  console.log(validate.errors.length + ' errors');
  // console.log(validate.errors);
}

assert(validate.errors.length >= 5);
console.log('You\'ve done task 5!');
