import css from "./projects.module.css";

const ProjectItem = ({ project, delay }) => {
    return (
        <div
            className={`${css.project_item} card css-rounded css-shadow-xsm py-2 px-3  side-in`}
            style={{animationDelay:`${delay}s`}}
        >
            <div className="d-flex align-items-center">
                <span className={`${css.project_id} badge bg-success`}>
                    {project.id ?? <span className="d-inline-block" style={{height:'.75rem', width: '.75rem'}}></span>}
                </span>
                <span className={`${css.project_id} badge bg-success ms-2 `}>
                    {project.status_id ?? <span className="d-inline-block">Status</span>}
                </span>
                <button className={`ms-auto css-button-sm`}>View</button>
            </div>
            <div className="card-body pt-1 px-1">
                <div className="card-title fw-bold css-text-primary">
                    {project.project_name ?? <div className="css-bg-secondary rounded" style={{height: '8rem'}}></div>}
                </div>
                <p className="card-text">
                    {project.project_summary}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
