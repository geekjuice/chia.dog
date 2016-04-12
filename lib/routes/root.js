/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module routes/root.js
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import ChiaDAO from '../data/ChiaDAO';
import Doctype from '../decorators/Doctype';
import Index from '../components/Index';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const PATH = '/';

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
  * GET
  */
  router.get(PATH, async ctx => {
    let chia = {};
    try {
      chia = await ChiaDAO.get();
    } catch (err) {} // eslint-disable-line

    const { headers: { 'user-agent': userAgent } } = ctx;
    const props = {
      ...chia,
      radiumConfig: {
        userAgent
      }
    };
    ctx.body = Doctype(Index.render(), props);
  });
};
