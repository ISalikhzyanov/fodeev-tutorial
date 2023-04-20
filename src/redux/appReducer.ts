import {
    HIDE_ADD_POPUP,
    HIDE_EDIT_POPUP,
    HIDE_LOADER,
    LOGIN, LOGOUT,
    SHOW_ADD_POPUP,
    SHOW_EDIT_POPUP,
    SHOW_LOADER
} from "./types";

interface IState {
    loader: boolean
    editPopup: boolean
    addPopup: boolean
    login: boolean
}

const initialState: IState = {
    loader: false,
    editPopup: false,
    addPopup: false,
    login: false
}

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_EDIT_POPUP:
            return {...state, editPopup: true}
        case HIDE_EDIT_POPUP:
            return {...state, editPopup: false}
        case SHOW_LOADER:
            return {...state, loader: true}
        case HIDE_LOADER:
            return {...state, loader: false}
        case SHOW_ADD_POPUP:
            return {...state, addPopup: true}
        case HIDE_ADD_POPUP:
            return {...state, addPopup: false}
        case LOGIN:
            return {...state, login: true}
        case LOGOUT:
            console.log('logout')
            return {...state, login: false}
        default:
            return state
    }
}
