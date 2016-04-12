/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module routes/root.js
 */

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const ENDPOINT = '/';

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Root route handler
 *
 * @param   {function} router Koa router instance
 * @returns {void}
 */
export default router => {
  /**
  * GET
  */
  router.get(ENDPOINT, async ctx => {
    ctx.success({ status: 200, message: 'Hello world' });
  });
};
