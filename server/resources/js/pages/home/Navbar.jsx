import css from './home.module.css'
import { Link } from "react-router-dom";
import { BiLogInCircle } from 'react-icons/bi'

function Navbar() {
    return (
        <nav className="navbar bg-transparent container-lg py-3 px-0">
            <a className="css-text-primary fs-5 fw-bolder" href="#"><b>T</b>askmeister</a>
            <ul className={`${css.nav_links} d-flex gap-3  align-items-center m-0`}>
                <li>
                    <Link to="/dashboard" className='css-link css-text-primary me-1'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/login" 
                        className='css-btn text-light css-bg-primary px-3 css-rounded d-flex gap-2 align-items-center'
                        style={{height: '2.5rem'}}
                    >
                        Login
                        <BiLogInCircle fontSize="1.5rem" />
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/register" 
                        className='css-link css-text-primary css-button-sm px-3'
                        style={{border:'2px solid var(--bg-primary)'}}
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
