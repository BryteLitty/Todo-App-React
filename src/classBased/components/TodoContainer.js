import React from 'react';
import { v4 as uuid4 } from 'uuid';
// components
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
    state = {
      todos: [],
    }

    // function to hande toggle complete
    handleChange = (id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }));
    }

    // deleteTodo
    deleteTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => todo.id !== id),
        ],
      });
    }

    // add todo item
    addTodoItem = (title) => {
      const newTodo = {
        id: uuid4(),
        title,
        completed: false,
      };

      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    }

    setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle;
          }
          return todo;
        }),
      });
    }

    componentDidUpdate(prevProps, PrevState) {
      if (PrevState.todos !== this.state.todos) {
        const temp = JSON.stringify(this.state.todos);
        localStorage.setItem('todos', temp);
      }
    }

    componentDidMount() {
      const temp = localStorage.getItem('todos');
      const loadTodos = JSON.parse(temp);
      if (loadTodos) {
        this.setState({
          todos: loadTodos,
        });
      }
    }

    render() {
      return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodoList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.deleteTodo}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
      );
    }
}

export default TodoContainer;
