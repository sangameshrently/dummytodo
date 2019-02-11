
import { ADD_TODO, MARK_AS_COMPLETE_TODO, DELETE_TODO } from '../actions/actionTypes';

let initState = {
    tasks: []
};

export const todoReducer = (state = initState, action) => {
    console.log("Action:", action);
    switch (action.type) {
        case ADD_TODO:
            {
                let newTask = action.payload.task;
                let newState = { ...state };
                // newState.tasks.push(newTask);
                newState.tasks = [...newState.tasks, newTask];
                return newState;
            }

        case DELETE_TODO:
            {
                let newState = { ...state };
                let taskId = action.payload.id;
                // newState.tasks.push(newTask);
                newState.tasks = [...newState.tasks];
                newState.tasks = newState.tasks.filter((task) => {
                    if (task.id === taskId) {
                        return false;
                    }
                    return true;
                });
                return newState;
            }


        case MARK_AS_COMPLETE_TODO:
            {
                let newState = { ...state };
                let taskId = action.payload.id;
                newState.tasks = [...newState.tasks];
                newState.tasks = newState.tasks.map((task) => {
                    if (task.id === taskId) {
                        task.completed = !task.completed;
                    }
                    return {...task};
                });
                return newState;
            }

        default:
            return state;
    }
}