/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module data/ChiaDAO.js
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import redis from 'redis';
import debug from 'debug';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const DEBUG = debug('chia-dog:dao');
const DEFAULTS = {
  updated: null,
  isHere: 'no'
};

//------------------------------------------------------------------------------
// Client
//------------------------------------------------------------------------------

const { REDIS_URL } = process.env;
const CLIENT = redis.createClient(REDIS_URL);
const KEY = 'chia';

CLIENT.on('ready', () => DEBUG('Redis connection established'));
CLIENT.on('connect', () => DEBUG('Redis stream connected'));
CLIENT.on('reconnecting', () => DEBUG('Redis reconnecting'));
CLIENT.on('end', () => DEBUG('Redis connection ended'));
CLIENT.on('error', ({ message }) => DEBUG('Redis error:', message));
CLIENT.on('warning', warning => DEBUG('Redis warning:', warning));

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

function objectToArray(obj) {
  return Object.keys(obj).reduce((array, key) => {
    if ({}.hasOwnProperty.call(obj, key)) {
      return [...array, key, obj[key]];
    }
    return array;
  }, []);
}

function handler(resolve, reject) {
  return (err, ...args) => {
    if (err) {
      reject(err);
    } else {
      resolve(...args);
    }
  };
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

class ChiaDAO {

  defaults() {
    return DEFAULTS;
  }

  get(key) {
    return new Promise((...args) => {
      if (key) {
        CLIENT.hget(KEY, key, handler(...args));
      } else {
        CLIENT.hgetall(KEY, handler(...args));
      }
    });
  }

  set(key, value) {
    return new Promise((...args) => {
      switch (typeof key) {
        case 'string':
        case 'number':
          CLIENT.hset(KEY, key, value, handler(...args));
          break;
        case 'object':
          CLIENT.hmset(KEY, objectToArray(key), handler(...args));
          break;
        default:
          throw new Error(
            `Invalid key type passed to ChiaDAO#set. Recieved ${typeof key}`
          );
      }
    });
  }

  del() {
    return new Promise((...args) => {
      CLIENT.del(KEY, handler(...args));
    });
  }

  async reset() {
    await this.del();
    return this.set({ ...DEFAULTS, updated: Date.now() });
  }

}

//------------------------------------------------------------------------------
// Export
//------------------------------------------------------------------------------

export default new ChiaDAO;
