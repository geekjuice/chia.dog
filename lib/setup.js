/**
 * Copyright 2016 Nick Hwang
 * MIT Licensed
 *
 * @module setup.js
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import debug from 'debug';
import dotenv from 'dotenv';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const DEBUG = debug('chia-dog:app');

//------------------------------------------------------------------------------
// Environment Setup
//------------------------------------------------------------------------------

// Load environment variables for development
if (process.env.NODE_ENV !== 'production') {
  DEBUG('Loading dotenv');
  dotenv.load({ silent: true });
}

//------------------------------------------------------------------------------
// Start Services
//------------------------------------------------------------------------------

require('./cron').start();
require('./server').start();
