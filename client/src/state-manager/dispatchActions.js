import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import projectActions from "./action-creators/project-creator";
import globalsActions from "./action-creators/globals-creator";

const allActionCreators = { ...projectActions, ...globalsActions };

export const useDispatchActions = () => bindActionCreators( allActionCreators, useDispatch());