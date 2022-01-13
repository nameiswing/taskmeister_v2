import LoginForm from "./LoginForm"
import css from './login.module.css';
import Banner from "./Banner";
import { Link } from "react-router-dom";
import { BiHighlight } from 'react-icons/bi'

//component starts here
const Login = () => {
    return (
        <div className={`${css.container} container-fluid p-0 mx-0 d-flex flex-column mx-auto`}>
            <div className="d-flex py-3 w-100 container">
                <Link to="/" className={`css-link css-text-primary css-fw-600 css-button-sm px-2 me-2 ms-auto`}>
                    <span>Homepage</span>
                </Link>
                <Link 
                    to="/register" 
                    className={`css-btn css-fw-600 px-3 css-bg-primary text-light d-flex align-items-center css-rounded`}
                >
                    <span className={``}>Sign Up</span>
                    <BiHighlight fontSize="1.5rem"/>
                </Link>
                
            </div>
            <div className={`row container m-auto pb-5 gap-4 h-100`}>
                <div className="col">
                    <Banner />
                </div>
                <div className="col-md-6 p-0">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login
