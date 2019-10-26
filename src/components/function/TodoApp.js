import React, { useState } from 'react'
import TodoList from './TodoList'

function TodoApp () {
    // state
    const [items, setItems] = useState([])
    const [text, setText] = useState('')

    // define method 
    function handleChange (e) {
        setText(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (!text.length) {
            return;
        }

        const newItem = {
            text: text,
            id: Date.now()
        };

        setItems(items.concat(newItem))
        setText('')
    }

    function deleteList (idx) {
        const list = [...items]
        list.splice(idx, 1)
        setItems(list)
    }

    // render
    return (
        <div>
            <h3>TODO</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">
                    TodoList
                </label>
                <input
                    id="new-todo"
                    onChange={handleChange}
                    value={text}
                />
                <button>
                    Add ${items.length + 1}
                </button>
            </form>
            <TodoList
                items={items}
                deleteList={deleteList}
            />
        </div>
    )
}

export default TodoApp
