import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatchActions } from "./state-manager/dispatchActions";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import OverView from "./components/dashboard/Overview";
import Projects from "./components/dashboard/Projects";
import NotFound from "./components/NotFound";
import Tasks from "./components/dashboard/Tasks";
import Members from "./components/dashboard/Members";
import Home from './pages/home/Home';
import Register from "./pages/register/";
import axios from 'axios';
import Login from "./pages/login";
import AddProject from "./components/dashboard/Modals/AddProject";
import AddTask from "./components/dashboard/Modals/AddTask";

axios.defaults.baseURL = "http://localhost:8000";

const App = () => {
    const { saveSessionToken } = useDispatchActions();
    const { current_modal } = useSelector(state => state.globals);

    function getTokenFromLocal() {
        const token = JSON.stringify(localStorage.getItem('api_token'));
        if(token) saveSessionToken(token);
    }

    useEffect( async() => {
        getTokenFromLocal();
    }, []);

    return (
        <div className="container-fluid p-0 h-100 position-relative">
            <Router>
                <Routes>
                    <Route path="/">
                        <Route path="" element={ <Home /> } />
                        <Route path="register" element={ <Register /> } />
                        <Route path="login" element={ <Login /> } />
                        <Route path="dashboard" element={ <Dashboard /> } >
                            <Route path="" element={ <OverView /> } />
                            <Route path="overview" element={ <OverView /> } />
                            <Route path="projects" element={ <Projects /> } />
                            <Route path="tasks" element={ <Tasks /> } />
                            <Route path="members" element={ <Members /> } />
                            <Route path="*" element={ <NotFound /> } />
                        </Route>
                        <Route path="*" element={ <NotFound /> } />
                    </Route>
                </Routes>
            </Router>
            {(current_modal[0] && current_modal[1] === 'project') && <AddProject />}
            {(current_modal[0] && current_modal[1] === 'task') && <AddTask />}
        </div>
    );
};

export default App;
