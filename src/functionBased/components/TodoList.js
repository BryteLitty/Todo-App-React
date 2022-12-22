import React from "react";

// components
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                handleChangeProps={props.handleChangeProps}
                deleteTodoProps={props.deleteTodoProps}
                setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
}

export default TodoList;