import React, { useState, useEffect } from 'react';
import css from "../styles/dashboard-sidenav.module.css";
import {
    BiHomeAlt,
    BiFolderOpen,
    BiTask,
    BiGroup,
    BiUserPlus,
    BiCog,
    BiHelpCircle
} from "react-icons/bi";
import SidenavLink from './SidenavLink';


//COMPONENT STARTS HERE
const Sidenav = () => {

    const [ currentPath, setCurrentPath ] = useState("");

    const links = [
        {name: "Overview", icon: <BiHomeAlt fontSize="1.5rem" /> },
        {name: "Projects", icon: <BiFolderOpen fontSize="1.5rem" /> },
        {name: "Tasks", icon: <BiTask fontSize="1.5rem" /> },
        {name: "Members", icon: <BiGroup fontSize="1.5rem" /> },
        {name: "Add Member", icon: <BiUserPlus fontSize="1.5rem" /> },
        {name: "Settings", icon: <BiCog fontSize="1.5rem" /> },
        {name: "Help", icon: <BiHelpCircle fontSize="1.5rem" /> },
    ]; //icons will inheret parent font color

    function pathCheck() {
        const pathname = window.location.pathname;
        switch(pathname) {
            case '/dashboard':
                return setCurrentPath('overview');
            case '/dashboard/overview':
                return setCurrentPath('overview');
            case '/dashboard/projects':
                return setCurrentPath('projects');
            case '/dashboard/tasks':
                return setCurrentPath('tasks');
            case '/dashboard/members':
                return setCurrentPath('members');
            case '/dashboard/add%20member':
                return setCurrentPath('add member');
            case '/dashboard/settings':
                return setCurrentPath('settings');
            case '/dashboard/help':
                return setCurrentPath('help');
            default:
                return '/dashboard'
        }
    }

    useEffect(() => {
        pathCheck();
    }, []);

    
    return (
        <aside>
            <nav className={`${css.side_container} d-flex flex-column pb-5 flex-shrink-0 side-left-in`}>
                {
                    links.map((link, index) => (
                        <SidenavLink
                            key={index}
                            idx={index}
                            name={link.name}
                            icon={link.icon}
                            isActive={currentPath === link.name.toLowerCase() ? true : false}
                            clickHandler={() => setCurrentPath(link.name.toLowerCase())}
                        />
                    ))
                }
            </nav>
        </aside>
    )
}

export default Sidenav
