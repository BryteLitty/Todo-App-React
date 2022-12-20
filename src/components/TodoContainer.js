import React from "react";
import { v4 as uuid4 } from 'uuid'
// components
import TodoList from './TodoList';
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {

    state = { 
        todos: [
            {
                id: uuid4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuid4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuid4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    }

    // function to hande toggle complete
    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            }),
        }))
    }

    // deleteTodo
    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }

    // add todo item
    addTodoItem = title => {
        const newTodo = {
            id: uuid4(),
            title: title,
            completed: false
        };

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        return (
            <div>
                <Header />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodoList 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.deleteTodo}
                />
            </div>
        )
    }
}

export default TodoContainer;