import css from './tasks.module.css';
import { BiPlus } from 'react-icons/bi'

const Subnav = () => {
    return (
        <div className={`${css.sub_nav} px-3 py-2 css-rounded-lg fade-in css-shadow-lg d-flex align-items-center mb-4`}>
            <div className='p-2'>
                <a href="" className={`${css.active} me-3`}>Task List</a>
                <a href="" className='me-3'>My Tasks</a>
                <a href="">Reports</a>
            </div>
            <button className={`css-button-sm ms-auto ${css.nav_button}`}>
                <BiPlus fontSize="1.5rem" />Add Task
            </button>
        </div>
    )
}

export default Subnav
