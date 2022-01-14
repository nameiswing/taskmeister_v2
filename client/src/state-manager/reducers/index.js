import { combineReducers } from "redux";
import projectReducer from "./project-reducer";
import taskReducer from "./task-reducer";
import globalsReducer from "./globals-reducer";

const reducers = combineReducers({
    project: projectReducer,
    task: taskReducer,
    globals: globalsReducer,
})

export default reducers;