import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>{this.props.title}</h2>;
  }
}
