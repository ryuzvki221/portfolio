import React from 'react';

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default class Animation extends React.Component {
  componentDidMount() {
    new WOW().init();
  }
  render() {
    return <>{this.props.children}</>;
  }
}
