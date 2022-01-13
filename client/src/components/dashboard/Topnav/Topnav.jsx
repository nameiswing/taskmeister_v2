// import { useState } from "react";
import css from "../styles/dashboard-topnav.module.css";
// import { BiLogOut, BiUserCircle } from "react-icons/bi";
import TopnavMenu from "./TopnavMenu";

const Topnav = () => {

    // const [ isHidden, setIsHidden ] = useState(true)
    
    return (
        <header className={`py-2 container-fluid css-shadow-lg mb-5 ${css.header_container}`} >
            <div className="d-flex align-items-center justify-content-between container-xl">
                <div className={`${css.brand} `}>
                    <b>t</b>askmeister
                </div>
                <div className="d-flex align-items-center">
                    <div className="me-4">
                        <b className="css-text-secondary">Welcome back,&nbsp;</b>
                        <b className="css-text-primary">User</b>
                    </div>
                    <button className={`${css.profile_icon}`} >
                        <img src={`https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`} alt="profile-icon" height="48" width="48"/>
                    </button>
                    <TopnavMenu/>
                </div>
            </div>
        </header>
    );
};

export default Topnav;

//onClick={() => setIsHidden( state => state = !state)}  hidden={isHidden}