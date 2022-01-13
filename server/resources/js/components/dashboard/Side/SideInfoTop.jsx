import css from "../styles/dashboard-sideinfo.module.css";
import { BiChevronRight, BiErrorCircle } from "react-icons/bi";

const SideInfoTop = () => {
    return (
        <div className={`${css.info} css-shadow-lg`}>
            <div  className="d-flex align-items-center">
                <h4>Task Alerts</h4>
                <BiChevronRight className="ms-auto" fontSize="1.5rem" color="var(--bg-primary)"/>
            </div>
            <div className={`${css.notif_container}`}>
                <div className="d-flex align-items-center py-3 mb-2" >
                    <BiErrorCircle fontSize="1.25rem" color="var(--accent)"/>
                    <span className={`${css.notif} ms-1`} title={"5 min ago"}>Task 101: Due on 21:00</span>
                </div>
                <div className="d-flex align-items-center py-3 mb-2" >
                    <BiErrorCircle fontSize="1.25rem" color="var(--success)"/>
                    <span className={`${css.notif} ms-1`} title={"10 min ago"}>Task 104: Due on Wednesday</span>
                </div>
                <div className="d-flex align-items-center py-3 mb-2" >
                    <BiErrorCircle fontSize="1.25rem" color="var(--success)"/>
                    <span className={`${css.notif} ms-1`} title={"25 min ago"}>Task 108: Due on Friday</span>
                </div>
            </div>
        </div>
    );
};

export default SideInfoTop;
