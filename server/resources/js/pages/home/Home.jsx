import Navbar from "./Navbar";
import Footer from "./Footer";
import css from "./home.module.css";
import plus from '../../assets/images/add_square.svg';
import flag from '../../assets/images/flag.svg';
import monitor from '../../assets/images/monitor.svg';
import lndngpg from '../../assets/images/image_homepage.png';
import { BiChevronRight } from 'react-icons/bi';
import blob_1 from '../../assets/images/blob_1.png';

const Home = () => {
    return (
        <div className={`${css.container} p-0 container-fluid overflow-hidden`}>
            <Navbar />
            <img src={blob_1} alt="blob" className={`${css.blob_1}`}/>
            <header className={`${css.header} container-sm row d-flex align-items-center mx-auto`}>
                <div className="col px-5">
                    <h1 className={`${css.heading} display-4 css-text-primary mb-3`}>
                        Collaboration made easy with Taskmeister.
                    </h1>
                    <p className={`fs-5 pb-4 css-text-secondary text-left`}>
                        Create projects and collaborate with anyone! In-app messaging and track progress real-time.
                    </p>
                    <a href="#" className="css-button-lg" role="button">
                        Get Started
                        <BiChevronRight fontSize='2.25rem' />
                    </a>
                </div>
                <div className={`${css.img_container} col-md-6 mx-0 my-auto px-5 h-100`} >
                    <img src={lndngpg} alt="img"/>
                </div>
            </header>
            <div>
                <section id="services" className={`pb-5 container row mx-auto`}>
                    <h2 className={`${css.heading} display-5 text-center mt-5 mb-4 css-text-primary`}>Our Services</h2>
                    <Card image={plus} title="Create Your Project" />
                    <Card image={flag} title="Navigate Your Tasks" />
                    <Card image={monitor} title="Monitor Your Teamates" />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;


const Card = ({css, image, title}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="h-100 css-shadow css-rounded css-bg-white">
                <div className={`card-image css-text-primary p-3 d-flex`}>
                    <img src={image} alt={image} className="css-text-primary mx-auto" />
                </div>
                <div className="card-body">
                    <h4 className="css-text-primary mb-3 fw-bolder text-center">{title}</h4>
                    <p className="p-2">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
    )
}
