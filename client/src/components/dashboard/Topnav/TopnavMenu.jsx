import css from "../styles/dashboard-topnav.module.css";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const TopnavMenu = ({}) => {

    const navigate = useNavigate();
    
    function logout() {
        localStorage.removeItem('api_token');
        navigate('/login');
    }
    
    return (
        <div className={`${css.dropdown} css-shadow-sm py-2`} id="profile-menu">
            <button>Join a Project</button>
            <hr className="dropdown-divider"/>
            <button>Add Member</button>
            <button>New Project</button>
            <hr className="dropdown-divider"/>
            <button>Profile Settings</button>
            <button onMouseDown={logout}>Logout</button>
        </div>
    )
}

export default TopnavMenu
