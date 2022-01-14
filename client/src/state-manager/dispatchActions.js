import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import projectActions from "./action-creators/project-creator";
import taskActions from "./action-creators/task-creator";
import globalsActions from "./action-creators/globals-creator";

const allActionCreators = { 
    ...projectActions, 
    ...taskActions, 
    ...globalsActions 
};

export const useDispatchActions = () => bindActionCreators( allActionCreators, useDispatch());