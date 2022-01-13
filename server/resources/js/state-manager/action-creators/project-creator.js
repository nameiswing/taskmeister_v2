const newProject = (project) => {
    return dispatch => {
        dispatch({ type: 'NEW_PROJECT', payload: project }); //project must be an object
    }
}

export default { newProject };