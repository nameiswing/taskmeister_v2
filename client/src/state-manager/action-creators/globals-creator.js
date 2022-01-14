const saveSessionToken = (value) => {
    return dispatch => {
        dispatch({ type: 'SAVE_TOKEN', payload: value }); //token must be string
    }
}
const setCurrentModal = (value) => {
    return dispatch => {
        dispatch({ type: 'SET_MODAL', payload: value }); //must be an array of bool and str
    }
}
const incrementApiCalls = () => {
    return dispatch => {
        dispatch({ type: 'INCREMENT_API_CALL'}); //must be an array of bool and str
    }
}

export default { saveSessionToken, setCurrentModal, incrementApiCalls };