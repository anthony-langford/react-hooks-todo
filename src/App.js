import React from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodoState from './components/useTodoState';

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  color: cornflowerblue;
`;

export default function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <Wrapper>
      <h1>Todos</h1>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          trimmedText.length && addTodo(trimmedText);
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </Wrapper>
  );
}