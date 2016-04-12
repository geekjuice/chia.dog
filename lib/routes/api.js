/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module routes/api.js
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import debug from 'debug';
import ChiaDAO from '../data/ChiaDAO';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const DEBUG = debug('chia-dog:api');
const PATH = '/api/chia';
const { API_TOKEN } = process.env;

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Playground route handler
 *
 * @param   {function} router Router instance
 * @returns {void}
 */
export default router => {
  /**
  * Token validation
  */
  router.use(PATH, async (ctx, next) => {
    DEBUG('Checking API token');
    const { request: { query: { token } } } = ctx;
    if (!API_TOKEN || token === API_TOKEN) {
      await next();
    } else {
      const message = 'Access denied!';
      ctx.failure({ status: 401, message });
    }
  });

  /**
  * GET
  */
  router.get(PATH, async ctx => {
    try {
      const chia = await ChiaDAO.get();
      ctx.success({ chia });
    } catch ({ code, message }) {
      DEBUG(message);
      if (code === 'ENOENT') {
        ctx.success();
      } else {
        ctx.failure();
      }
    }
  });

  /**
   * POST
   */
  router.post(PATH, async ctx => {
    const { request: { body: { isHere } } } = ctx;
    try {
      const chia = await ChiaDAO.set({
        isHere: /^(true|yes)$/i.test(isHere),
        updated: Date.now()
      });
      ctx.success({ chia });
    } catch ({ message }) {
      ctx.success({ message });
    }
  });
};

