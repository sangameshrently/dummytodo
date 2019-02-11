
import { ADD_TODO, MARK_AS_COMPLETE_TODO, DELETE_TODO } from './actionTypes';

export const addTodoAction = (task) => {
    return {
        type: ADD_TODO,
        payload: {
            task
        }
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

export const markAsCompleteTodoAction = (id) => {
    return {
        type: MARK_AS_COMPLETE_TODO,
        payload: {
            id
        }
    }
}