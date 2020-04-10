import React, { Component } from 'react';
import Todos from './todos';

class App extends Component {
  state = {
    "todos":[
      {id:"1", title:"buy milk"},
      {id:"2", title:"buy car"},
    ]
  }
  deleteTodo = (id) => {
    var newList = this.state.todos.filter((item) => {
      return item.id !== id ? item: null;
    });
    this.setState({
      todos: newList
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h2 class="center-align blue-text">Todo's</h2>
        <Todos todos={this.state.todos} deleteItem={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
