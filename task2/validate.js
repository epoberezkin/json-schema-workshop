'use strict';

const Ajv = require('ajv');
const assert = require('assert');

const humanData = require('./human');
const machineData = require('./machine');
const invalidData = require('./invalid');

const humanMachineSchema = process.env.NODE_ENV == 'test'
                          ? require('../answers/task2_human_machine_schema')
                          : require('./human_machine_schema');

const ajv = new Ajv;

const validate = ajv.compile(humanMachineSchema);

assert(validate(humanData));
assert(validate(machineData));
invalidData.forEach((data, i) => {
  assert(!validate(data), `#${i} should be invalid: ${JSON.stringify(data)}`);
});

console.log('You\'ve done task 2!');
