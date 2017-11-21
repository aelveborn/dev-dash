import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todo';

@connect((store) => {
    return {
        todos: store.todo.todos,
    }
})

class Layout extends Component {
    
    componentWillMount() {
        this.props.dispatch(todoActions.get());
        this.props.dispatch(todoActions.add('2', 'Second todo item'));
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

export default Layout;