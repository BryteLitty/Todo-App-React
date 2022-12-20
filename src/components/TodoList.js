import React from "react";

// components
import TodoItem from "./todoItem";

class TodoList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    handleChange={this.props.handleChangeProps}
                    deleteTodoProps={this.props.deleteTodoProps}
                    />
            ))}
            </ul>
        )
    }
}

export default TodoList;