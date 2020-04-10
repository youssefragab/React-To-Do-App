import React, { Component } from 'react';
import Todos from './todos';

class App extends Component {
  state = {
    "todos":[
      {id:"1", title:"buy milk", isChecked: false},
      {id:"2", title:"buy car", isChecked: false},
    ]
  }
  deleteTodo = (id) => {
    var newList = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: newList
    })
  }
  setCheckMark = (id) => {
    var List = this.state.todos;
    for(var i = 0; i < List.length; i++) {
      var obj = List[i];
      if(obj.id == id) {
        if(obj.isChecked) {
          obj.isChecked = false;
        }else {
          obj.isChecked = true
        }
      }
    }

    this.setState({todos:List});
  }
  render() {
    return (
      <div className="todo-app container">
        <h2 class="center-align blue-text">Todo's</h2>
        <Todos todos={this.state.todos} deleteItem={this.deleteTodo} setCheckMark={this.setCheckMark} />
      </div>
    );
  }
}

export default App;
