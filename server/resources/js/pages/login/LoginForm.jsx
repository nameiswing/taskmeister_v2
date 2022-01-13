import { useState, useEffect } from "react";
import FormControl from "./FormControl";
import { BiHighlight } from 'react-icons/bi'
import Displaytext from "./displaytext";
import { Link } from "react-router-dom";

//COMPONENT STARTS HERE
const LoginForm = () => {
    const initialState = {
        email_address: "",
        password: "",
        access_type: "admin",
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
    function resetFields(e) {
        e.preventDefault();
        setProfile(initialState)
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
        const checkDelay = setTimeout(() => rulesCheck(), 500);
        return () => clearTimeout(checkDelay);
    }, [profile.password, profile.email_address]);

    return (
        <div className="h-100 w-100 d-flex flex-column py-3" >
            <Displaytext />
            <form autoComplete="off" className="mb-auto rounded w-100 px-3 pb-5">
                <FormControl 
                    label="Email Address"
                    type="email"
                    name="email_address"
                    length={6}
                    value={profile.email_address}
                    changeHandler={handleChange}
                    validator={validator.email_address}
                    placeholder={'JuanDelaCruz123@gmail.com'}
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
                    placeholder={'*********.'}
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
