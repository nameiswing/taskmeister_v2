import css from "./overview.module.css";
import { useDispatchActions } from '../../../state-manager/dispatchActions';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const controller = new AbortController();

const ContentOne = () => {

    const { newProject, incrementApiCalls } = useDispatchActions();
    const project = useSelector( state => state.project )

    // console.log(project[0])

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
        <div className={`${css.content_one} css-shadow-sm p-4 h-50 row`}>
            <div className={`col-6`}>
                <h2 className="mb-3">
                    <span className="fw-normal">Active Project:</span>
                    <span className={`${css.name} ms-2`}>{ project.length > 0 && project[0].project_name}</span>
                </h2>
                <h3 className="fw-normal">Summary:</h3>
                <p className="css-text-primary css-fw-600 p-3">
                    {project.length > 0 && project[0].project_summary }
                </p>
            </div>
            <div className={`col-6 d-flex align-items-center justify-content-center`}>
                <CircleProgress />
            </div>
        </div>
    );
};

export default ContentOne;

//components here
const CircleProgress = () => {
    return (
        <div 
            className={`${css.outer_circle} d-flex align-items-center justify-content-center`}
            style={{
                backgroundImage: `conic-gradient(
                    var(--success) 0deg, 
                    var(--success) 150deg, 
                    var(--bg-secondary-darker) 150deg, 
                    var(--bg-secondary-darker) 0deg
                )`
            }}
            data-percent="41.7%"
        >
        </div>
    );
};
