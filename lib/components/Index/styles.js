/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module components/Index/styles.js
 */

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const RED = '#e74c3c';
const GREEN = '#438407';
const BROWN = '#a97c50';
const GRAY = '#34495e';

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

export default {
  html: {
    height: '100vh',
    backgroundColor: 'white',
    textAlign: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    margin: 0
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textDecoration: 'none',
    height: '100%',
    color: 'initial',
    margin: 0
  },
  heading: {
    fontSize: '5rem',
    fontWeight: 300,
    textTransform: 'uppercase',
    padding: '0.6rem 0',
    margin: 0
  },
  status: {
    color: GRAY,
    fontSize: '2.0rem',
    fontWeight: 400,
    padding: '1.2rem 0 0.6rem'
  },
  emoji: {
    padding: '1.6rem 4rem',
    borderRadius: '0.4rem'
  },
  chia: {
    color: `${BROWN} !important`,
    padding: '0 1rem'
  },
  logo: {
    width: '12rem',
    height: 'auto',
    margin: '0 auto',
  },
  hubspot: {
    position: 'relative',
    top: '0.6rem',
    height: '5rem',
    padding: '0 1rem'
  },
  updated: {
    color: GRAY,
    fontSize: '0.9rem',
    padding: '0.4rem 0'
  },
  footer: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    padding: '1.2rem 0'
  },
  positive: {
    color: GREEN
  },
  negative: {
    color: RED
  },
  neutral: {
    color: GRAY
  },
  underline: {
    borderBottom: '0.2rem solid black'
  },
  small: {
    marginRight: '0.6rem'
  },
  heart: {
    fontSize: '0.8em',
    color: RED
  }
};
