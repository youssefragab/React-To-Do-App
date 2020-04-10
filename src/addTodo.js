import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: "",
    }
    hanldeInputChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({"title": ""});
    }
    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <span className="add-new-label">Add New Task</span>
                    <input className="add-new-field" type="text" value={this.state.title} placeholder="type here..." onChange={this.hanldeInputChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo;