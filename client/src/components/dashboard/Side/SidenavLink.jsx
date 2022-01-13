import { Link } from 'react-router-dom';
import css from "../styles/dashboard-sidenav.module.css";

const SidenavLink = ({ idx, isActive, icon, name, clickHandler }) => {
    return (
        <Link 
            to={name.toLowerCase()}
            className={`${css.link} ${isActive && css.active_link} ${idx === 4 && "mt-auto"} d-flex align-items-center mb-1`} 
            onClick={clickHandler}
        >
            {icon} <span className={`${css.link_name} ms-3`}>{name}</span>
        </Link>
    );
};
export default SidenavLink;
