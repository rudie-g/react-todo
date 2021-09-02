import React from 'react';

export default function Form(props) {

    const { todo, setTodo, addTodo } = props;

    return (
        <div>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={(e) => {e.preventDefault(); addTodo(todo);}}>Add Todo</button>
        </div>
    )
}