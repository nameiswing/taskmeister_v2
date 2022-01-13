import css from './projects.module.css';
import { BiPlus } from 'react-icons/bi'
import ProjectItem from './ProjectItem';

const projects = [
    { id: 1, title: 'Taskmeister', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, tempora?'},
    { id: 2, title: 'Taskmeister', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, tempora? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, tempora?'},
    { id: 3, title: 'Taskmeister', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, tempora?'},
    { id: 4, title: 'Taskmeister', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, tempora? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, tempora?'},
]

const index = () => {
    return (
        <div className={`${css.container} mx-4 mb-5 w-100`}>
            <div className={`${css.sub_nav} px-3 py-2 css-rounded-lg fade-in css-shadow-lg d-flex align-items-center mb-4`}>
                <div className='p-2'>
                    <a href="" className={`${css.active} me-3 text-success`}>Ongoing</a>
                    <a href="">Completed</a>
                </div>
                <button className={`css-button-sm ms-auto ${css.nav_button}`}>
                    <BiPlus fontSize="1.5rem" />Add Project
                </button>
            </div>
            <div className={` ${css.item_container} d-flex gap-3 flex-wrap px-4 pt-2 pb-4`}>
                {projects.map( (item, idx) => (
                    <ProjectItem key={idx} project={item} delay={.2 * (idx+1)}/>
                ))}
            </div>
        </div>
    )
}

export default index
