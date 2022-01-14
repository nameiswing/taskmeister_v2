const reducer = (state = {api_token: '', current_modal: [ false, '' ], api_call: 0}, action) => {
    switch (action.type) {
        case 'SAVE_TOKEN':
            return state = {...state, api_token: action.payload };
        case 'SET_MODAL':
            return state = {...state, current_modal: action.payload };
        case 'INCREMENT_API_CALL':
            return state = {...state, api_call: state.api_call + 1};
        default:
            return state;
    }
};

export default reducer;