import {ITask} from "../components/task-item/TaskItem";
import {ADD_TASK, FETCH_TASKS, GET_EDIT_TASK} from "./types";

interface IState {
    tasks: ITask[],
    editTask: ITask | any
}

const initialState: IState = {
    tasks: [],
    editTask: {}
}

export const taskReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_EDIT_TASK:
            return {...state, editTask: Object.assign(state.editTask, action.payload)}
        case FETCH_TASKS:
            if (!initialState.tasks.length) {
                return {...state, tasks: action.payload}
            }
            break
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        default:
            return state
    }
}
