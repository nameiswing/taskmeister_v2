const reducer = (state = [{name: "Complete UI", summary: "This is a final capstone project."}], action) => {
    switch (action.type) {
        case 'NEW_TASK':
            return state = [...state, action.payload];
        default:
            return state;
    }
};

export default reducer;