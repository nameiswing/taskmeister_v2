import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import projectActions from "./action-creators/project-creator";

const allActionCreators = { ...projectActions };

export const useDispatchActions = () => bindActionCreators( allActionCreators, useDispatch());