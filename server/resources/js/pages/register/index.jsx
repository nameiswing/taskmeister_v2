import RegisterForm from "./RegisterForm"
import css from './register.module.css';
import Banner from "./Banner";
import { Link } from "react-router-dom";
import { BiLogInCircle } from 'react-icons/bi'

//component starts here
const Register = () => {
    return (
        <div className={`${css.container} container-fluid p-0 mx-0 d-flex flex-column mx-auto`}>
            <div className="d-flex py-3 w-100 container">
                <Link to="/" className={`css-link css-text-primary css-fw-600 css-button-sm px-2 me-2 ms-auto`}>
                    <span>Homepage</span>
                </Link>
                <Link 
                    to="/login" 
                    className={`css-btn css-fw-600 px-3 css-bg-primary text-light d-flex align-items-center css-rounded`}
                >
                    <span className={``}>Login</span>
                    <BiLogInCircle fontSize="1.5rem"/>
                </Link>
                
            </div>
            <div className={`row container m-auto pb-5 gap-4`}>
                <div className="col">
                    <Banner />
                </div>
                <div className="col-md-6 p-0">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register
