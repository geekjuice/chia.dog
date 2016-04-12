/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module middleware/response.js
 */

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Extends koa#context with success and failure helpers.
 *
 * @returns {function} Koa middleware
 */
export default function response() {
  return async (ctx, next) => {
    ctx.success = ({ status = 200, message }) => {
      ctx.status = status;
      ctx.body = {
        status,
        message
      };
    };

    ctx.failure = ({ status = 500, message }) => {
      ctx.status = status;
      ctx.body = {
        status,
        message
      };
    };

    await next();
  };
}
