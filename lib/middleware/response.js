/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module middleware/response.js
 */

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const YAY = '(づ｡◕‿‿◕｡)づ';
const TABLE_FLIP = '(╯°□°）╯︵ ┻━┻ ';

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
    ctx.success = ({ status = 200, emoji = YAY, ...rest } = {}) => {
      ctx.status = status;
      ctx.body = {
        status,
        emoji,
        ...rest
      };
    };

    ctx.failure = ({ status = 500, emoji = TABLE_FLIP, ...rest } = {}) => {
      ctx.status = status;
      ctx.body = {
        status,
        emoji,
        ...rest
      };
    };

    await next();
  };
}
