import React, { Component } from "react";

class InputTodo extends Component {

    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        } else {
            alert("Please add a todo")
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input className="input-text" onChange={this.onChange} type="text" placeholder="Add Todo..." value={this.state.title}/>
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo;