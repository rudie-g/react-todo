import Header from './components/header';
import Form from './components/form';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [ todoList, setTodoList ] = useState([])
  const [ todo, setTodo ] = useState("");
  const addTodo = (todo) => {
    const tempTodo = {name: todo, completed: false}
    setTodoList([...todoList, tempTodo])
    setTodo("");
  }
  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
