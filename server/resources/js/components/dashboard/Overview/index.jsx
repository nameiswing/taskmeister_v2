import css from "./overview.module.css";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";
import ContentFour from "./ContentFour";

//COMPONENT STARTS HERE
const OverView = () => {
    return (
        <main className={`${css.overview} d-flex flex-column mx-4 gap-4 w-100 pb-5`}>
            <ContentOne />
            <div className={`d-flex flex-column flex-xxl-row gap-4 w-100 h-100`}>
                <div className={`d-flex flex-row flex-xxl-column gap-4 w-100 h-100`}>
                    <ContentTwo />
                    <ContentThree />
                </div>
                <ContentFour />
            </div>
        </main>
    )
}

export default OverView
