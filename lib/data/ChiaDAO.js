/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module data/ChiaDAO.js
 */

import { tmpdir } from 'os';
import { join } from 'path';
import { readJSON, writeJSON } from '../utils/filesystem';

const TMP_DIR = tmpdir();
const FILEPATH = join(TMP_DIR, 'chia.json');
const DEFAULT = {
  updated: null,
  isHere: false
};

export default {

  defaults() {
    return DEFAULT;
  },

  async get(key) {
    const json = await readJSON(FILEPATH);
    return key ? json[key] : json;
  },

  async set(json) {
    return await writeJSON(FILEPATH, json);
  },

  async reset() {
    return await writeJSON(FILEPATH, DEFAULT);
  }

};
