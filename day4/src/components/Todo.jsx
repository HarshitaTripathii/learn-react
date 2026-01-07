import React from 'react'
import { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([]);
    const [currentTodo, setCurrentTodo] = useState("")

    function addTask(e) {
        e.preventDefault();
        setTodo([...todo, { task: currentTodo, checked: false }])

    }
    
    console.log(todo);
    return (
        <div>
            <form onSubmit={addTask}>
                <input type='text' placeholder='add task' value={currentTodo} onChange={e => {
                    setCurrentTodo(e.target.value)
                    console.log(currentTodo)
                }} />
                <button>Add</button>
            </form>

            <div>
                {todo.map((item, index) => (

                    <div>
                        <p>{item.task}</p>

                        <button onClick={() => {
                            const newArray = [...todo]
                            newArray[index].checked = !(item.checked)
                            setTodo(newArray)
                        }}>{item.checked ? "Checked" : "Unchecked"}</button>
                        <button
                            onClick={() => {
                                const newA= todo.filter((ele, i) => i != index );
                                setTodo(newA);
                            }}>Delete</button>
                    </div>

                ))}
        </div>

        </div >

    )
}

export default Todo
