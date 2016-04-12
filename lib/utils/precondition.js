/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module utils/precondition.js
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import debug from 'debug';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const log = debug('chia-dog:precondition');

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Checks for condition otherwise ends process.
 *
 * @param   {boolean} condition Condition to check
 * @param   {string}  message   Message to output in log before exit
 * @returns {void}
 */
export default function precondition(condition, message = 'Precondition failed') {
  if (!condition) {
    log(message);
    process.exit(1);
  }
}
