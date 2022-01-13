import { Outlet } from "react-router-dom";
import SideInfo from "../../components/dashboard/Side/SideInfo";
import Sidenav from "../../components/dashboard/Side/Sidenav";
import Topnav from "../../components/dashboard/Topnav/Topnav";
import css from "./dashboard.module.css";

const Dashboard = () => {
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
