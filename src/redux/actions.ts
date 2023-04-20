import {ITask} from "../components/task-item/TaskItem";
import {
    ADD_TASK, FETCH_TASKS,
    GET_EDIT_TASK,
    HIDE_ADD_POPUP,
    HIDE_EDIT_POPUP, HIDE_LOADER, LOGOUT, REQUEST_LOGIN,
    SHOW_ADD_POPUP,
    SHOW_EDIT_POPUP,
    SHOW_LOADER
} from "./types";
import {mockPromise} from "../server/mockPromise";



export function login (username: string, password: string) {
    return {
        type: REQUEST_LOGIN,
        username,
        password
    }
}

export function logout () {
    return {
        type: LOGOUT
    }
}
export function getEditTask(item: ITask){
    console.log('edit', item)
    return {
        type: GET_EDIT_TASK,
        payload: item
    }
}

export function showEditPopup () {
    return{
        type: SHOW_EDIT_POPUP
    }
}

export function hideEditPopup () {
    return {
        type: HIDE_EDIT_POPUP
    }
}

export function showLoader () {
    return{
        type: SHOW_LOADER
    }
}

export function hideLoader () {
    return {
        type: HIDE_LOADER
    }
}

export function addTask (item: ITask) {
    return {
        type: ADD_TASK,
        payload: item
    }
}

export function fetchTasks () {
    return async (dispatch: any) => {
        dispatch(showLoader())
        await mockPromise.getData()
            .then((r: Awaited<any>) => {
                setTimeout(()=> {
                    dispatch({
                        type: FETCH_TASKS,
                        payload: r.data
                    })
                    dispatch(hideLoader())
                }, 2000)
            })
    }
}

export function showAddPopup () {
    return{
        type: SHOW_ADD_POPUP
    }
}

export function hideAddPopup () {
    return {
        type: HIDE_ADD_POPUP
    }
}
