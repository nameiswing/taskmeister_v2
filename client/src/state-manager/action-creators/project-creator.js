const newProject = (project) => {
    return dispatch => {
        dispatch({ type: 'NEW_PROJECT', payload: project }); //project must be an object
    }
}
const fetchProjects = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_PROJECTS' }); //project must be an object
    }
}

export default { newProject, fetchProjects };