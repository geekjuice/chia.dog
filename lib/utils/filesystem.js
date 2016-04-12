/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module clients/AttendanceClient.js
 */

import Promise from 'promise';
import { readFile, writeFile } from 'fs';

function handler(resolve, reject) {
  return (err, ...args) => {
    if (err) {
      reject(err);
    } else {
      resolve(...args);
    }
  };
}

export function read(source) {
  return new Promise((...args) => {
    readFile(source, handler(...args));
  });
}

export function write(destination, content) {
  return new Promise((...args) => {
    writeFile(destination, content, handler(...args));
  });
}

export async function readJSON(filename) {
  const content = await read(filename);
  return JSON.parse(content);
}

export async function writeJSON(filename, content) {
  const json = JSON.stringify(content, null, 2);
  await write(filename, json);
  return JSON.parse(json);
}

export default {
  read,
  write,
  readJSON,
  writeJSON
};

