import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.text}
                            <button className="btn_delete_list" onClick={idx => this.props.delete(idx)}>삭제</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default TodoList;
