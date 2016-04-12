/**
 * Copyright 2016 Nicholas Hwang
 * MIT Licensed
 *
 * @module components/Index/index.js
 */

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';
import styles from './styles';
import Font, { Fonts, Styles } from '../Font';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const YAY = '(づ｡◕‿‿◕｡)づ';
const TABLE_FLIP = '(╯°□°）╯︵ ┻━┻ ';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

class Index extends Component {

  static get propTypes() {
    return {
      isHere: PropTypes.bool,
      updated: PropTypes.number
    };
  }

  static get defaultProps() {
    return {
      isHere: false,
      updated: null
    };
  }

  renderAttendance() {
    const { isHere } = this.props;
    const style = [
      styles.text,
      isHere ? styles.positive : styles.negative
    ];

    return (
      <text style={style}>
        {isHere ? YAY : TABLE_FLIP}
      </text>
    );
  }

  renderLastUpdated() {
    const { updated } = this.props;
    return (
      <footer style={styles.footer}>
        <p>Last updated {moment(updated).fromNow()}</p>
      </footer>
    );
  }

  render() {
    return (
      <html style={[styles.html, Styles.Lato]}>
        <head>
          <meta charSet="utf-8" />
          <title>Chia | Dog</title>
          <Font use={Fonts.Lato} />
        </head>
        <body style={styles.body}>
          <header style={styles.header}>
            <span>
              Is Chia here?
            </span>
          </header>
          {this.renderAttendance()}
          {this.renderLastUpdated()}
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
