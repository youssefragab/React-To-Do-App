import React, { Component } from 'react';
import Todos from '../todos';
import AddTodo from '../addTodo';

class Home extends Component {
    state = {
        "todos":[
        {id:"1", title:"buy milk", isChecked: false},
        {id:"2", title:"go to the gym", isChecked: false},
        {id:"3", title:"finish project", isChecked: false},
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

    addTodo = (title) => {
        var todos = this.state.todos;
        var randId = Math.random();
        todos.push({id: randId, title: title});
        this.setState({todos})
    }
    render() {
        return(
            <div>
                <h2 class="center-align blue-text">Todo's</h2>
                <Todos todos={this.state.todos} deleteItem={this.deleteTodo} setCheckMark={this.setCheckMark} />
                <AddTodo addTodo={this.addTodo} />                
            </div>
        )
    }
}
export default Home;