import css from './register.module.css';
import shapes from '../../assets/images/shapes.svg'

const Banner = () => {
    return (
        <div className={`${css.banner} css-bg-secondary h-100 css-rounded-lg`}>
            <img src={shapes} alt="shapes" className={`${css.shapes}`}/>
        </div>
    )
}

export default Banner
