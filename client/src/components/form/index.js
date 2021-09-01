import React, { useState } from 'react';

export default function Form(props) {
    const [ todo, setTodo ] = useState("");

    return (
        <div>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={props.addTodo(todo)}>Add Todo</button>
        </div>
    )
}