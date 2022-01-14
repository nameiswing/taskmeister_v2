import { Outlet } from "react-router-dom";
import SideInfo from "../../components/dashboard/Side/SideInfo";
import Sidenav from "../../components/dashboard/Side/Sidenav";
import Topnav from "../../components/dashboard/Topnav/Topnav";
import css from "./dashboard.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatchActions } from '../../state-manager/dispatchActions'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Dashboard = () => {

    const { api_token } = useSelector((state) => state.globals);
    const { saveSessionToken } = useDispatchActions();
    const navigate = useNavigate();

    function loginViaToken() {
        const token = localStorage.getItem('api_token');
        if(Boolean(token)) {
            axios.post(`api/auto-login`, {token}).then( res => {
                if(res.data.status === 200) {
                    navigate('/dashboard');
                } else {
                    console.log(res.data.message)
                }
            })
        } else {
            return navigate('/login');
        }
    }

    function getTokenFromLocal() {
        const token = JSON.stringify(localStorage.getItem('api_token'));
        if(token) saveSessionToken(token);
    }

    useEffect(() => {
        getTokenFromLocal();
        loginViaToken();
    }, [api_token]);
    
    return (
        <div className={css.main_container}>
            <Topnav />
            <div className="d-flex p-0 container-xl">
                <Sidenav />
                <Outlet />
                <SideInfo />
            </div>
        </div>
    );
};

export default Dashboard;
