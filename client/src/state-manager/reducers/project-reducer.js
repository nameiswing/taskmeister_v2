import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// const navigation = useNavigate();
const fetchData = (state) => {
    const token = localStorage.getItem('api_token');
    if (Boolean(token)) {
        axios.get('api/projects', token).then(res => {
            if (res.data.status === 200) {
                console.log(res.data.message)
                // state = [...state, ...res.data.projects]
            }
        })
    } else {
        console.log('You\'re not logged in.')
    }
}

const reducer = (state = [{ id: 1, project_name: "Taskmeister", project_summary: "This is a final capstone project." }], action) => {
    switch (action.type) {
        case 'NEW_PROJECT':
            return state = [...state, ...action.payload];
        case 'FETCH_PROJECTS':
            return () => fetchData(state);
        default:
            return state;
    }
};

export default reducer;