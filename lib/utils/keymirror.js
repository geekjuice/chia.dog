/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module utils/keymirror.js
 */

export default obj => {
  const mirror = {};
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      mirror[key] = key;
    }
  }
  return mirror;
};
