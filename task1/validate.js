'use strict';

const Ajv = require('ajv');
const assert = require('assert');

const dateSchema = process.env.NODE_ENV == 'test'
                   ? require('../answers/task1_date_schema')
                   : require('./date_schema');

const ajv = new Ajv;

const validate = ajv.compile(dateSchema);

assert(validate('1976-02-24'));
assert(validate('1980-01-21'));
assert(validate('1995-03-14'));
assert(validate('2015-11-05'));
assert(validate(1976));
assert(validate(1986));
assert(!validate('1975-07-11'));
assert(!validate('1970-02-14'));
assert(!validate(1975));
assert(!validate(1970));

console.log('You\'ve done task 1!')
