import css from "./overview.module.css";
import { BiPlus } from "react-icons/bi";

const ContentFour = () => {
    return (
        <div className={`${css.content_four} css-shadow-sm px-4 py-2 w-100 h-100`}>
            <h2 className="d-flex align-items-center">
                Project Notes
                <button className="ms-auto">
                    <BiPlus fontSize="1.5rem"/>
                </button>
            </h2>
        </div>
    )
}

export default ContentFour
