const reducer = (state = [{name: "Taskmeister", summary: "This is a final capstone project."}], action) => {
    switch (action.type) {
        case 'NEW_PROJECT':
            return state = [...state, action.payload];
        default:
            return state;
    }
};

export default reducer;