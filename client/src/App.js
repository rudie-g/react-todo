import Header from './components/header';
import Form from './components/form';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [ todoList, setTodoList ] = useState([])
  const addTodo = (todo) => {
    const tempList = [...todoList]
    tempList.push(todo)
    setTodoList(tempList)
  }
  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
