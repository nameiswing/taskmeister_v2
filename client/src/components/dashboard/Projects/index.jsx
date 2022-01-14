import css from './projects.module.css';
import { BiPlus } from 'react-icons/bi'
import ProjectItem from './ProjectItem';
import { useDispatchActions } from '../../../state-manager/dispatchActions';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import axios from 'axios'

const controller = new AbortController();

const index = () => {

    const { setCurrentModal, newProject, incrementApiCalls } = useDispatchActions();
    const { project } = useSelector( state => state )

    useEffect(() => {
        if(project.length > 1) return;
        axios.get('api/projects').then((res) => {
            if(res.data.status === 200) {
                newProject(res.data.projects);
                incrementApiCalls();
            }
        })
        return () => controller.abort();
    }, []);
    
    return (
        <div className={`${css.container} mx-4 mb-5 w-100`}>
            <div className={`${css.sub_nav} px-3 py-2 css-rounded-lg fade-in css-shadow-lg d-flex align-items-center mb-4`}>
                <div className='p-2'>
                    <a href="" className={`${css.active} me-3 text-success`}>Ongoing</a>
                    <a href="">Completed</a>
                </div>
                <button 
                    className={`ms-auto css-rounded px-3 py-1 css-fw-600 css-text-primary css-button-sm ${css.nav_button}`}
                    onClick={() => setCurrentModal([true,'project'])}
                >
                    <BiPlus fontSize="1.5rem" />Add Project
                </button>
            </div>
            <div className={` ${css.item_container} d-flex gap-3 flex-wrap px-4 pt-2 pb-4 align-content-start`}>
                {project.map( (item, idx) => (
                    <ProjectItem key={idx} project={item} delay={.2 * (idx+1)}/>
                ))}
            </div>
        </div>
    )
}

export default index
