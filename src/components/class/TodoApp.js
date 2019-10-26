import React from 'react'
import TodoList from './TodoList'

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteList = this.deleteList.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        TodoList
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add ${this.state.items.length + 1}
                    </button>
                </form>
                <TodoList
                    items={this.state.items}
                    delete={this.deleteList}
                />
            </div>
        )
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }

    deleteList (idx) {
        const list = [...this.state.items]
        list.splice(idx, 1);

        this.setState({
            items: list
        })
    }
}

export default TodoApp;
