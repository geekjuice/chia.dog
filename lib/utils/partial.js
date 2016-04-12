/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module utils/partial.js
 */

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Creates a partially bound function.
 *
 * @param   {function} fn   Function to bind
 * @param   {...any}   args Arguments to apply
 * @returns {function} Partially bound function
 * @private
 */
export default function partial(fn, ...args) {
  return fn.bind(fn, ...args);
}

