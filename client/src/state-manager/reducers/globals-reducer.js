const reducer = (state = {api_token: ''}, action) => {
    switch (action.type) {
        case 'SAVE_TOKEN':
            return state = {...state, api_token: action.payload };
        default:
            return state;
    }
};

export default reducer;