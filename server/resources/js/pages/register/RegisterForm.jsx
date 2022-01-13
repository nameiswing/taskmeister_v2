import { useState, useEffect } from "react";
import FormControl from "./FormControl";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//COMPONENT STARTS HERE
const RegisterForm = () => {

    const navigate = useNavigate();
    
    const initialState = {
        first_name: "",
        middle_name: "",
        last_name: "",
        email_address: "",
        password: "",
        access_type: "admin",
    }
    const [profile, setProfile] = useState(initialState);

    const [ eventTargetName, setEventTargetName ] = useState('');
    const [ validator, setValidator] = useState({
        email_address: { valid:'', message: '' },
        password: { valid:'', message: '' },
        passwordConfirm: { valid:'', value:'', message: '' },
    });
    function handleChange(event) {
        setProfile({ ...profile, [event.target.name]: event.target.value });
        setEventTargetName(event.target.name)
    }
    function resetFields(e) {
        e.preventDefault();
        setProfile(initialState);
        setValidator( state => {
            state.passwordConfirm.value = '';
            return {...state};
        })
    }
    
    function rulesCheck() {
        if(eventTargetName === 'passwordConfirm') passwordMatchCheck();
        else if(eventTargetName === 'password') passwordLengthCheck();
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
                validator.email_address.message = "Email is valid.";
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
                validator.password.message = "Password is okay to use.";
                return { ...validator };
            }) 
        };
    }
    function passwordMatchCheck() {
        if (profile.password.length < 6) {
            return setValidator( validator => {
                validator.passwordConfirm.valid = false;
                validator.passwordConfirm.message = "Please complete password field.";
                return { ...validator }
            })
        };
        if (profile.password !== validator.passwordConfirm.value) {
            setValidator( validator => {
                validator.passwordConfirm.valid = false;
                validator.passwordConfirm.message = "Passwords do not match.";
                return { ...validator }
            })
        } else if ((profile.password === validator.passwordConfirm.value)) {
            setValidator( validator => {
                validator.passwordConfirm.valid = true;
                validator.passwordConfirm.message = "Passwords match.";
                return { ...validator }
            })
        } 
        if (validator.passwordConfirm.value.length < 6 ) {
            return setValidator( validator => {
                validator.passwordConfirm.valid = false;
                validator.passwordConfirm.message = "Please enter at least 6 characters.";
                return { ...validator }
            })
        }
    }
    function createUserProfile(e) {
        e.preventDefault();
        try {
            axios.post('api/create-user', profile).then( res => {
                if(res.data.status === 200) {
                    console.log(res.data.message)
                    navigate('/login')
                } else if(res.data.status === 400) {
                    console.log(res.data.errors)
                }
            })
        } catch (error) {
            console.log(error.message)
        } finally {
            resetFields(e);
        }
    }

    useEffect(() => {
        const checkDelay = setTimeout(() => rulesCheck(), 500);
        return () => clearTimeout(checkDelay);
    }, [validator.passwordConfirm.value, profile.password, profile.email_address]);

    return (
        <div className="h-100 w-100 d-flex py-3 ">
            <form autoComplete="off" className="m-auto rounded container-md" onSubmit={createUserProfile}>
            <FormControl 
                        label="First Name"
                        type="text"
                        name="first_name"
                        value={profile.first_name}
                        changeHandler={handleChange}
                        validator={false}
                        required
                    />
                <div className="row gap-3 px-3">
                    <FormControl 
                        label="Middle Name"
                        type="text"
                        name="middle_name"
                        value={profile.middle_name}
                        changeHandler={handleChange}
                        validator={false}
                        css="col"
                    />
                    <FormControl 
                        label="Last Name"
                        type="text"
                        name="last_name"
                        value={profile.last_name}
                        changeHandler={handleChange}
                        validator={false}
                        required
                        css="col"
                    />
                </div>
                <FormControl 
                    label="Email Address"
                    type="email"
                    name="email_address"
                    length={6}
                    value={profile.email_address}
                    changeHandler={handleChange}
                    validator={validator.email_address}
                    placeholder={'myemail@gmail.com'}
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
                    placeholder={'At least 6 characters long.'}
                    required
                />
                <FormControl 
                    label="Confirm Password"
                    type="password"
                    name="passwordConfirm"
                    length={6}
                    value={validator.passwordConfirm.value}
                    changeHandler={ e => {
                        setEventTargetName(e.target.name);
                        setValidator( validator => {
                            validator.passwordConfirm.value = e.target.value;
                            return { ...validator }
                        })}
                    }
                    validator={validator.passwordConfirm}
                    required
                />
                <div className="d-flex">
                    <input type="button" value="Reset" className=" css-fw-600 btn btn-outline-secondary css-rounded px-4 ms-auto" onClick={resetFields} />
                    <input type="submit" value="Register Profile" className="css-fw-600 border-0 py-2 css-rounded css-bg-primary text-light px-4 ms-3 css-btn" />
                </div>
                <p className="mt-4">Have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default RegisterForm;
