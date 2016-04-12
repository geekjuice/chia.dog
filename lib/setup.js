/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module cron.js
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import debug from 'debug';
import ChiaDAO from './data/ChiaDAO';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const DEBUG = debug('chia-dog:setup');

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export async function start() {
  try {
    const chia = await ChiaDAO.get();
    if (!chia) {
      DEBUG('Setting up initial chia state');
      await ChiaDAO.reset();
    }
  } catch (err) {
    DEBUG('Error during setup');
  }
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

export default {
  start
};
