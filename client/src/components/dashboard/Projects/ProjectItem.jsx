import css from "./projects.module.css";

const ProjectItem = ({ project, delay }) => {
    return (
        <div
            className={`${css.project_item} card css-rounded css-shadow-xsm py-2 px-3  side-in`}
            style={{animationDelay:`${delay}s`}}
        >
            <div className="d-flex align-items-center justify-content-between">
                <span className={`${css.project_id} badge bg-success`}>{project.id}</span>
                <button className={`css-button-sm`}>View</button>
            </div>
            <div className="card-body">
                <div className="card-title fw-bold css-text-primary">
                    {project.title}
                </div>
                <p className="card-text">
                    {project.description}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
