import React from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this)
    }

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text} <button onClick={this.handleRemove}>삭제</button></li>
                ))}
            </ul>
        )
    }

    handleRemove(e) {
        console.log(e, this.props.items)


    }
}

export default TodoList;