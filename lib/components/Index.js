/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module components/Index.js
 */

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

const styles = {
  html: {
    backgroundColor: 'white'
  }
};

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

class Index extends Component {

  static get propTypes() {
    return {
      isHere: PropTypes.bool
    };
  }

  static get defaultProps() {
    return {
      isHere: false
    };
  }

  renderAttendance() {
    const { isHere } = this.props;
    return <h2>{isHere ? 'Yes!' : 'No...'}</h2>;
  }

  render() {
    return (
      <html style={styles.html}>
        <head>
          <meta charSet="utf-8" />
          <title>Chia | Dog</title>
        </head>
        <body>
          <h1>Is Chia here?</h1>
          {this.renderAttendance()}
        </body>
      </html>
    );
  }

}

const StyledIndex = Radium(Index);

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export function render() {
  return <StyledIndex />;
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

export default {
  render
};
