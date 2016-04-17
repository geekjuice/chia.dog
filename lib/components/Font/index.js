/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module components/Font/index.js
 */

import React, { Component, PropTypes } from 'react';
import keymirror from '../../utils/keymirror';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const GoogleFonts = {
  Vollkorn: {
    href: 'https://fonts.googleapis.com/css?family=Vollkorn',
    style: {
      fontFamily: 'Vollkorn, serif'
    }
  },
  Lato: {
    href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700',
    style: {
      fontFamily: 'Lato, san-serif',
      fontWeight: 300
    }
  }
};

const FontNames = Object.keys(GoogleFonts);

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export const Fonts = keymirror(GoogleFonts);
export const Styles = FontNames.reduce((styles, name) => {
  const { style } = GoogleFonts[name];
  return { ...styles, [name]: style };
}, {});

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

export default class Font extends Component {

  static get propTypes() {
    return {
      use: PropTypes.oneOf(FontNames).isRequired
    };
  }

  static get defaultProps() {
    return {
      use: null
    };
  }

  render() {
    const { use } = this.props;
    const { href } = GoogleFonts[use];
    return (
      <link
        href={href}
        rel="stylesheet"
        type="text/css"
      />
    );
  }

}
