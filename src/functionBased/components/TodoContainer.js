import React, { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
// components

import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const getInitialTodos = () => {
    // getting stored
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  const [todos, setTodos] = useState(getInitialTodos());

  // function to hande toggle complete
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  // deleteTodo
  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  // add todo item
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuid4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    // storing todo items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">

        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
