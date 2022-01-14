const reducer = (state = {api_token: '', current_modal: [ false, '' ]}, action) => {
    switch (action.type) {
        case 'SAVE_TOKEN':
            return state = {...state, api_token: action.payload };
        case 'SET_MODAL':
            return state = {...state, current_modal: action.payload };
        default:
            return state;
    }
};

export default reducer;