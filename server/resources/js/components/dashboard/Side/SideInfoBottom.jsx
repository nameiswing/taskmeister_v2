import css from "../styles/dashboard-sideinfo.module.css";
import { BiChevronRight, BiErrorCircle } from "react-icons/bi";

const SideInfoBottom = () => {
    return (
        <div className={`${css.info} css-shadow-lg h-100`}>
            <div className="d-flex align-items-center">
                <h4>Activity Log</h4>
                <BiChevronRight className="ms-auto" fontSize="1.5rem" color="var(--bg-primary)"/>
            </div>
            <div className={`${css.notif_container}`}>

            </div>
        </div>
    )
}

export default SideInfoBottom
