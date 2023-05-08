import React, { Component } from "react";
import Modal from "./Modal";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      isModalOpen: false,
    };
    this.getTodo = this.getTodo.bind(this);
    this.sendTodo = this.sendTodo.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getTodo(e) {
    this.setState({ todo: e.target.value });
  }

  sendTodo() {
    if (!this.state.todo) {
      this.setState({
        todo: "",
        isModalOpen: true,
      });
      return;
    }
    this.props.saveData(this.state.todo);
    this.setState({ todo: "" });
  }

  closeModal() {
    this.setState({
      todo: "",
      isModalOpen: false,
    });
  }

  render() {
    return (
      <div className="input-group mb-3 mt-5">
        {this.state.isModalOpen ? (
          <Modal
            closing={this.closeModal}
            message={"never Submit Empty. Add a Todo!! :)"}
          />
        ) : (
          false
        )}
        <input
          type="text"
          className="form-control"
          placeholder="What's on your mind"
          aria-label="What's on your mind"
          aria-describedby="button"
          onChange={this.getTodo}
          value={this.state.todo}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button"
          onClick={this.sendTodo}
        >
          Button
        </button>
      </div>
    );
  }
}
