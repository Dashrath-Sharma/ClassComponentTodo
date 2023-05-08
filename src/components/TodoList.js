import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Your Items</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map(function (item, i) {
            return (
              <tr key={item.id} class={i % 2 === 0 ? "table-active" : ""}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
