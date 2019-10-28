import React from 'react'

function TodoList ({ items, deleteList }) {
    return (
        <ul>
            {
                items.map((item) =>  (
                    <li key={item.id}>
                        {item.text}
                        <button className="btn_delete_list" onClick={idx => deleteList(idx)}>삭제</button>
                    </li>
                ))
            }
        </ul>
    )
}


export default TodoList
