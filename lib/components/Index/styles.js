/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module components/Index/styles.js
 */

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const ROSE_QUARTZ = '#f7cac9';
const SERENITY = '#91a8d0';

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

export default {
  html: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'white',
    textAlign: 'center',
    fontVariant: 'small-caps'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    margin: 0
  },
  header: {
    fontSize: '6rem',
    padding: '1rem',
  },
  text: {
    fontSize: '3.0rem',
    fontWeight: 700,
    color: ROSE_QUARTZ,
    padding: '1rem'
  },
  footer: {
    fontSize: '1.2rem',
    padding: '1rem'
  },
  positive: {
    color: SERENITY
  },
  negative: {
    color: ROSE_QUARTZ
  },
  neutral: {
    color: '#cccccc'
  },
  underline: {
    borderBottom: '0.2rem solid black'
  },
  superscript: {
    fontSize: '2.0rem'
  }
};
