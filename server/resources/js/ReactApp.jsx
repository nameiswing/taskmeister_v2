// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useDispatchActions } from "./state-manager/dispatchActions";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverView from "./components/dashboard/Overview";
import Projects from "./components/dashboard/Projects";
import NotFound from "./components/NotFound";
import Tasks from "./components/dashboard/Tasks";
import Members from "./components/dashboard/Members";
import Home from './pages/home/Home';
import Register from "./pages/register";
import axios from 'axios';
import Login from "./pages/login";

axios.defaults.baseURL = "http://localhost:8000";

console.log(axios.defaults.baseURL);

const ReactApp = () => {
    const { project } = useSelector((state) => state);
    // const { newProject } = useDispatchActions();

    // useEffect( () => console.log("Updated list!"), [project])npm i

    return (
        <div className="container-fluid p-0 h-100">
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
        </div>
    );
};

export default ReactApp;
