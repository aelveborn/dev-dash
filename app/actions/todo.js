import * as types from '../constants/action-types';

// Not used
export function get() {
    return {
        type: types.GET_TODOS,
    };
};

export function add(key, text) {
    return {
        type: types.ADD_TODO,
        key,
        text,
        done: false,
    };
};