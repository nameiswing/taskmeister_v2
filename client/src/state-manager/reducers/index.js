import { combineReducers } from "redux";
import projectReducer from "./project-reducer";
import globalsReducer from "./globals-reducer";

const reducers = combineReducers({
    project: projectReducer,
    globals: globalsReducer,
})

export default reducers;