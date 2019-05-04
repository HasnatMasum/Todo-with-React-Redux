import * as Types from './types'


export const changeInput = evt => dispatch => {
    return dispatch({
        type: Types.CHANGE_INPUT_TEXT,
        text: evt
    })
}

export const addTodoItem = () => dispatch => {
    return dispatch({
        type: Types.ADD_TODO

    })
}

export const deleteTodo = index => dispatch => {

    return dispatch({
        type: Types.DELETE_TODO,
        index
    })
}