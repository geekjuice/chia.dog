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
import { CronJob } from 'cron';
import ChiaDAO from './data/ChiaDAO';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const DEBUG = debug('chia-dog:cron');
const EVERY_MIDNIGHT = '0 0 0 * * *';
const TIMEZONE = 'America/New_York';

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export function start() {
  DEBUG('Setting up cron jobs');
  const cron = new CronJob({
    cronTime: EVERY_MIDNIGHT,
    timeZone: TIMEZONE,
    onTick: () => ChiaDAO.reset()
  });
  cron.start();
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

export default {
  start
};
