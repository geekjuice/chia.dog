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
import { logo, hubspot } from './images';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const YAY = '(づ｡◕‿‿◕｡)づ';
const TABLE_FLIP = '(╯°□°）╯︵ ┻━┻ ';
const SHRUG = '¯\\_(⊙︿⊙)_/¯';
const INSTAGRAM = 'https://www.instagram.com/chia.dog/';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------

class Index extends Component {

  static get propTypes() {
    return {
      isHere: PropTypes.string,
      updated: PropTypes.string
    };
  }

  renderYes() {
    return (
      <div style={styles.status}>
        <span style={[styles.emoji, styles.positive]}>
          <small style={styles.small}>Yes!</small> {YAY}
        </span>
      </div>
    );
  }

  renderNo() {
    return (
      <div style={styles.status}>
        <span style={[styles.emoji, styles.negative]}>
          <small style={styles.small}>No...</small> {TABLE_FLIP}
        </span>
      </div>
    );
  }

  renderDunno() {
    return (
      <div style={styles.status}>
        <span style={[styles.emoji, styles.neutral]}>
          <small style={styles.small}>Dunno?</small> {SHRUG}
        </span>
      </div>
    );
  }

  renderAttendance() {
    const { isHere } = this.props;
    switch (isHere) {
      case 'yes':
        return this.renderYes();
      case 'no':
        return this.renderNo();
      default:
        return this.renderDunno();
    }
  }

  renderLastUpdated() {
    const { updated } = this.props;
    const fromNow = moment(parseInt(updated, 10)).fromNow();
    return (
      <section style={styles.updated}>
        Last updated {fromNow}
      </section>
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
          <a href={INSTAGRAM} target="_blank" style={styles.link}>
            <header>
              <img src={logo} style={styles.logo} onMouseOver={this.huh} />
              <h1 style={styles.heading}>
                is
                <span style={styles.chia}>chia</span>
                at
                <img src={hubspot} style={styles.hubspot} />?
              </h1>
            </header>

            {this.renderAttendance()}
            {this.renderLastUpdated()}

            <footer style={styles.footer}>
              Made with <span style={styles.heart}>♥</span> by Nick & Bora
            </footer>
          </a>
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
