import {
    GET_TODOS,
    ADD_TODO
} from '../constants/action-types'

let initialState = {
    todos: [{
        key: "1",
        text: "Hello world!",
        done: false,
    }]
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos
                ]
            });

        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        key: action.key,
                        text: action.text,
                        done: action.done,
                    }
                ]
            });
        
        default: return {...state}
    }

    return state;
};