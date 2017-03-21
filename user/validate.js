'use strict';

const Ajv = require('ajv');
const assert = require('assert');

const userData = require('./data');
const userSchema = require('./schema');
const improvedUserSchema = require('./schema_improved');

const ajv = new Ajv({allErrors: true});

const validate = ajv.compile(userSchema);
assert(test(validate));

const validate2 = ajv.compile(improvedUserSchema);
assert(test(validate2));

console.log('User schema OK');


function test(validate) {
    const valid = validate(userData);

    if (valid) {
      console.log('User data is valid!');
    } else {
      console.log('User data is INVALID!');
      console.log(validate.errors);
    }

    return valid;
}
