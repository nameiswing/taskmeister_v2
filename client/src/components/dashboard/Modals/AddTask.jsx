import { useEffect, useState } from "react";
import css from "./modals.module.css";
import { useSelector } from "react-redux";
import { useDispatchActions } from '../../../state-manager/dispatchActions';

const AddTask = () => {

    const { setCurrentModal } = useDispatchActions();
    const state = useSelector( state => state );
    const { task } = state;

    
    const [input, setInput] = useState({
        task_name: "",
        task_summary: "",
    });

    function changeHandler(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    function close(e) {
        e.preventDefault();
        e.stopPropagation();
        if(e.target === document.getElementById('add-task-modal')) setCurrentModal([ false, '' ]);   
    }
    function addTask() {
        
    }

    return (
        <div className={`${css.add_modal} z-max`} onClick={close} id="add-task-modal" >
            <form
                action=""
                className={`p-4 css-rounded col-10 col-sm-8 col-md-6 col-lg-4 fade-in`}
            >
                <div className="form-group mb-3">
                    <label htmlFor="task_name" className="form-label css-fw-600">
                        Task Name
                    </label>
                    <input
                        type="text"
                        name="task_name"
                        id="task_name"
                        className="form-control p-2 css-text-primary"
                        onChange={changeHandler}
                        value={input.task_name}
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="task_summary" className="form-label css-fw-600">
                        Task Summary
                    </label>
                    <textarea
                        className="form-control p-2 css-text-primary"
                        name="task_summary"
                        id="task_summary"
                        cols="3"
                        value={input.task_summary}
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div className="d-flex">
                    <input
                        type="submit"
                        value="Save Task"
                        className={`ms-auto py-2 css-fw-600 px-4 css-rounded css-bg-primary border-0 text-light css-btn`}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddTask;
