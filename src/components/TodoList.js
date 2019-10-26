import React from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this)
    }

    render() {
        const list = this.props.items.map((item, idx) => {
            return (
                <li key={item.id} idx={idx}>
                    {item.text}
                    <button className="btn_delete_list">삭제</button>
                </li>
            )
        })
        return (
            <ul onClick={this.handleRemove}>
                {list}
            </ul>
        )
    }

    handleRemove({target}) {
        if (target.className === 'btn_delete_list') {
            var idx = target.parentElement.getAttribute('idx');
            this.props.delete(idx);
        }
    }
}

export default TodoList;
