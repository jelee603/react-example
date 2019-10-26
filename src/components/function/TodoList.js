import React, { useState, useEffect } from 'react'

function TodoList ({ items, deleteList }) {

    // set state
    const [sample, setSample] = useState(0)

    // define method
    function handleRemove ({ target }) {
        setSample(sample + 1)
        if (target.className === 'btn_delete_list') {
            const idx = target.parentElement.getAttribute('idx');
            deleteList(idx);
        }
    }

    useEffect(() => {
        document.title = sample
    })

    const list = items.map((item, idx) => {
        return (
            <li key={item.id} idx={idx}>
                {item.text}
                <button className="btn_delete_list">삭제</button>
            </li>
        )
    })

    return (
        <ul onClick={handleRemove}>
            {list}
        </ul>
    )
}


export default TodoList
