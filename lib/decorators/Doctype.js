/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module components/Doctype.js
 */

import { cloneElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default function Doctype(component, props) {
  const index = cloneElement(component, props);
  const html = renderToStaticMarkup(index);
  return `<!doctype html>${html}`;
}
