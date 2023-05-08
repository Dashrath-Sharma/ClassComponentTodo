import React, { Component } from "react";
import Title from "./Title";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
    this.onSave = this.onSave.bind(this);
  }
  onSave(data) {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: Date.now(),
          name: data,
        },
      ],
    });
  }

  render() {
    return (
      <div className="todo-main">
        <Title title="My Todo List :)" />
        <AddTodo saveData={this.onSave} />
        <TodoList todos={this.state.todoList} />
      </div>
    );
  }
}
