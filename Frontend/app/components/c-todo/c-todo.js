import React, { Component } from 'react';

class ToDo extends Component {
    
    componentWillMount() {
        this.props.todos = [
            {key: 1, text: 'Hello'},
            {key: 2, text: 'World!'}
        ];
    }

    render() {
        const { todos } = this.props;

        if(!todos.length) {
            return <h1>No todos {todos.length}</h1>;
        }

        const todoList = todos.map(todo => <li key={todo.key}>{todo.text}</li>);

        return (
            <div>
                <h1>Todos:</h1>
                <ul>{todoList}</ul>
            </div>
        );
    }
}

export default ToDo;