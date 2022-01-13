import css from "./overview.module.css";

const ContentOne = () => {
    return (
        <div className={`${css.content_one} css-shadow-sm p-4 h-50`}>
            <h2 className="mb-3">
                <span className="fw-normal">Active Project:</span>
                <span className={`${css.name} ms-2`}>Taskmeister</span>
            </h2>
            <h3 className="fw-normal">Summary:</h3>
        </div>
    )
}

export default ContentOne
