const newTask = (task) => {
    return dispatch => {
        dispatch({ type: 'NEW_TASK', payload: task }); //project must be an object
    }
}

export default { newTask };