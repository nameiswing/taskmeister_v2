const saveSessionToken = (value) => {
    return dispatch => {
        dispatch({ type: 'SAVE_TOKEN', payload: value }); //token must be string
    }
}

export default { saveSessionToken };