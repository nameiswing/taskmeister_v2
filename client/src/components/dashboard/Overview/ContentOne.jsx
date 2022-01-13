import css from "./overview.module.css";

const ContentOne = () => {
    return (
        <div className={`${css.content_one} css-shadow-sm p-4 h-50 row`}>
            <div className={`col-6`}>
                <h2 className="mb-3">
                    <span className="fw-normal">Active Project:</span>
                    <span className={`${css.name} ms-2`}>Taskmeister</span>
                </h2>
                <h3 className="fw-normal">Summary:</h3>
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
