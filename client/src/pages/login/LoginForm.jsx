import { useState, useEffect } from "react";
import FormControl from "./FormControl";
import Displaytext from "./displaytext";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatchActions } from '../../state-manager/dispatchActions';
import axios from "axios";
import swal from 'sweetalert'

//COMPONENT STARTS HERE
const LoginForm = () => {

    const { api_token } = useSelector( state => state.globals );
    const { saveSessionToken } = useDispatchActions();
    const navigate = useNavigate();
    
    const initialState = {
        email_address: "",
        password: "",
    }
    const [profile, setProfile] = useState(initialState);

    const [ eventTargetName, setEventTargetName ] = useState('');
    const [ validator, setValidator] = useState({
        email_address: { valid:'', message: '' },
        password: { valid:'', message: '' },
    });
    function handleChange(event) {
        setProfile({ ...profile, [event.target.name]: event.target.value });
        setEventTargetName(event.target.name)
    }
    
    function login(e) {
        e.preventDefault();
        try {
            axios.post('/api/login', profile).then( res => {
                if(res.data.status === 200) {
                    localStorage.setItem('api_token', res.data.api_token);
                    saveSessionToken(res.data.api_token);
                    swal('Succes', res.data.message, 'success')
                    navigate('/dashboard');
                } else {
                    console.log(res.data.message)
                }
            })
        } catch (err) {
            console.log(err.message);
        }
    }
    function loginViaToken() {
        const token = localStorage.getItem('api_token');
        if(Boolean(token)) {
            axios.post(`api/auto-login`, {token}).then( res => {
                if(res.data.status === 200) {
                    navigate('/dashboard');
                } else {
                    console.log(res.data.message)
                }
            })
        } else {
            return navigate('/login');
        }
    }
    function rulesCheck() {
        if(eventTargetName === 'password') passwordLengthCheck();
        else if(eventTargetName === 'email_address') emailCheck();
    }
    function emailCheck() {
        const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const valid = Boolean(profile.email_address.toLowerCase().match(pattern));

        console.log(valid);
        if(profile.email_address.length < 6) {
            return setValidator( validator => {
                validator.email_address.valid = false;
                validator.email_address.message = "Please enter at least 6 characters.";
                return { ...validator };
            }) 
        }
        if(valid){
            setValidator( validator => {
                validator.email_address.valid = true;
                validator.email_address.message = "Valid email.";
                return { ...validator };
            }) 
        } else {
            setValidator( validator => {
                validator.email_address.valid = false;
                validator.email_address.message = "Email is invalid.";
                return { ...validator };
            }) 
        }
    }
    function passwordLengthCheck() {
        if (profile.password.length < 6) {
            setValidator( validator => {
                validator.password.valid = false;
                validator.password.message = "Please enter at least 6 characters.";
                return { ...validator };
            }) 
        } else {
            setValidator( validator => {
                validator.password.valid = true;
                validator.password.message = "Valid password.";
                return { ...validator };
            }) 
        };
    }
   
    


    useEffect(() => {
        loginViaToken();
        const checkDelay = setTimeout(() => rulesCheck(), 500);
        return () => clearTimeout(checkDelay);
    }, [profile.password, profile.email_address]);

    return (
        <div className="h-100 w-100 d-flex flex-column py-3" >
            <Displaytext />
            <form autoComplete="off" className="mb-auto rounded w-100 px-3 pb-5" onSubmit={login}>
                <FormControl 
                    label="Email Address"
                    type="email"
                    name="email_address"
                    length={6}
                    value={profile.email_address}
                    changeHandler={handleChange}
                    validator={validator.email_address}
                    placeholder={'juan22@gmail.com'}
                    required
                />
                <FormControl 
                    label="Password"
                    type="password"
                    name="password"
                    minLength={6}
                    value={profile.password}
                    changeHandler={handleChange}
                    validator={validator.password}
                    placeholder={'******'}
                    required
                />
                <div className="d-flex">
                    <input type="submit" value="Log In" className={`css-fw-600 border-0 py-2 css-rounded css-bg-primary text-light px-5  ms-auto css-btn`}
                     />                
                </div><br />
                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default LoginForm;
