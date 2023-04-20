import {combineReducers} from "redux";
import {taskReducer} from "./taskReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    tasks: taskReducer,
    app: appReducer
})
