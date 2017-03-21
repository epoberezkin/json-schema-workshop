'use strict';

const Ajv = require('ajv');
const assert = require('assert');

const dateArgsSchema = process.env.NODE_ENV == 'test'
                      ? require('../answers/task3_date_args_schema')
                      : require('./date_args_schema');

const ajv = new Ajv;
const validate = ajv.compile(dateArgsSchema);

const validArgs = require('./valid_args');
const invalidArgs = require('./invalid_args');
const bonusInvalidArgs = require('./bonus_invalid_args');

validArgs.forEach((args, i) => {
  assert(validate(args), `#${i} should be valid: ${JSON.stringify(args)}`);
});

invalidArgs.forEach((args, i) => {
  assert(!validate(args), `#${i} should be invalid: ${JSON.stringify(args)}`);
});

const bonus = bonusInvalidArgs.every((args, i) => {
  const valid = validate(args);
  if (valid) console.warn(`bonus #${i} should be invalid: ${JSON.stringify(args)}`);
  return !valid;
});

console.log(`You've done task 3 ${bonus ? 'WITH' : 'WITHOUT'} BONUS!`);
