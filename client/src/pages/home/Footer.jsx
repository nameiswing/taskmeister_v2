import css from './home.module.css'
import { SiGithub } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'

function Footer() {
    return (
        <div className={`${css.footer} container-fluid p-0 mt-0`}>
            <footer className="text-center text-lg-start text-white bg-dark text-white">
                <div className="container p-3 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h4 className="mb-4 font-weight-bold">
                                    <span className='fs-1 fw-bold'>t</span>askmeister
                                </h4>
                                <p>
                                task management is the link between planning to do something 
                                and getting it done. 

                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Overview
                                </h6>
                                <p>
                                    <a className="text-white">Dashboard</a>
                                </p>
                                <p>
                                    <a className="text-white">Projects</a>
                                </p>
                                <p>
                                    <a className="text-white">Tasks</a>
                                </p>
                
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="text-white">Create An Account</a>
                                </p>
                                <p>
                                    <a className="text-white">
                                         About Us
                                    </a>
                                </p>
                                <p>
                                    <a className="text-white">Got Questions?</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Contact
                                </h6>
                                <p>
                                    <i className="fas fa-home mr-3"></i> 11th W City Center, 7th Ave, Taguig
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i>{" "}
                                    kodeMeister@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone mr-3"></i> +639-9542-135
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2020 Copyright: 
                                    <a
                                        className="text-white"
                                        href="https://kodego.ph/"
                                    >
                                        KodeGo Philippines
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <a
                                    className="text-white btn btn-outline-light btn-floating m-1"
                                    role="button">
                                    <SiGithub fontSize="1.5rem"/>
                                </a>

                                <a className="text-white btn btn-outline-light btn-floating m-1" role="button" >
                                <SiFacebook fontSize="1.5rem"/>
                                </a>

                                <a className="text-white btn btn-outline-light btn-floating m-1"role="button" >
                                <SiLinkedin fontSize="1.5rem"/>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
