/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module server.js
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import Koa from 'koa';
import Router from 'koa-router';
import morgan from 'koa-morgan';
import bodyparser from 'koa-bodyparser';
import debug from 'debug';

import routes from './routes';
import response from './middleware/response';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const DEBUG = debug('chia-dog:server');
const { PORT = 3000 } = process.env;
const prefix = '/chia-dog';

//------------------------------------------------------------------------------
// App Setup
//------------------------------------------------------------------------------

// Setup
const app = new Koa();
const router = new Router({ prefix });

// Routes
routes.root(router);

// Middleware
app.use(response());
app.use(morgan('dev'));
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

// Not found handler
app.use(async ctx => {
  ctx.failure({ status: 404 });
});

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Start server
 *
 * @returns {void}
 */
export function start() {
  DEBUG(`Starting server on port ${PORT}`);
  app.listen(PORT);
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

export default {
  start
};
