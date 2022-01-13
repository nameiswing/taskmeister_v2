import css from "../styles/dashboard-topnav.module.css";
import { BiUser } from "react-icons/bi";

const TopnavMenu = ({hidden}) => {
    return (
        <div className={`${css.dropdown} ${hidden && "d-none"} css-shadow-sm py-2`}>
            <button>Join a Project</button>
            <hr className="dropdown-divider"/>
            <button>Add Member</button>
            <button>New Project</button>
            <hr className="dropdown-divider"/>
            <button>Profile Settings</button>
            <button>Logout</button>
        </div>
    )
}

export default TopnavMenu
