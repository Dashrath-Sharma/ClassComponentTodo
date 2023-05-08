import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal d-flex justify-content-center align-items-center">
        <div className="content">
          <p className="h4 mt-5 mb-3">{this.props.message}</p>
          <button
            className="btn btn-outline-primary  mt-3 mb-4"
            onClick={this.props.closing}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
