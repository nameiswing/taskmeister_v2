import { useEffect, useState } from "react";
import css from "./modals.module.css";
import { useSelector } from "react-redux";
import { useDispatchActions } from '../../../state-manager/dispatchActions';
import axios from "axios";

const AddProject = () => {

    const { setCurrentModal, newProject, fetchProjects } = useDispatchActions();
    const { project, globals } = useSelector( state => state );

    
    const [input, setInput] = useState({
        project_name: "",
        project_summary: "",
        api_token: localStorage.getItem('api_token'),
    });
    
    function changeHandler(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    function close(e) {
        e.preventDefault();
        e.stopPropagation();
        if(e.target === document.getElementById('add-project-modal')) setCurrentModal([ false, '' ]);
        
    }
    function addProject(e) {
        e.preventDefault();
        if(!input.project_name || !input.project_summary) return;
        console.log('Adding project', input);
        axios.post('/api/save-project', input).then( res => {
            if(res.data.status === 200) {
                console.log(res.data.message);
                axios.get('/api/projects').then( res => {
                    if(res.data.status === 200) {
                        newProject(res.data.projects)
                        setCurrentModal([ false, '' ]);
                    }
                })
            }else {
                console.log('Unable to fetch data.')
            }
        })
    }

    return (
        <div className={`${css.add_modal} z-max`} onClick={close} id="add-project-modal" >
            <form
                
                className={`p-4 css-rounded col-10 col-sm-8 col-md-6 col-lg-4 fade-in`}
            >
                <div className="form-group mb-3">
                    <label htmlFor="project_name" className="form-label css-fw-600">
                        Project Name
                    </label>
                    <input
                        type="text"
                        name="project_name"
                        id="project_name"
                        className="form-control p-2 css-text-primary"
                        onChange={changeHandler}
                        value={input.project_name}
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="project_summary" className="form-label css-fw-600">
                        Project Summary
                    </label>
                    <textarea
                        className="form-control p-2 css-text-primary"
                        name="project_summary"
                        id="project_summary"
                        cols="3"
                        value={input.project_summary}
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div className="d-flex">
                    <input
                        onClick={addProject}
                        type="submit"
                        value="Save Project"
                        className={`ms-auto py-2 css-fw-600 px-4 css-rounded css-bg-primary border-0 text-light css-btn`}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddProject;
