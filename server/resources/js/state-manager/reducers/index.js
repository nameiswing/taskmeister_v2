import { combineReducers } from "redux";
import projectReducer from "./project-reducer";

const reducers = combineReducers({
    project: projectReducer
})

export default reducers;