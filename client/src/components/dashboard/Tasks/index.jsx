import Subnav from "./Subnav"
import TaskItem from "./TaskItem"

const tasks = [
    { title: 'Task 1', tag: 'Research', status: 'Ongoing', due_date: '2022-01-30', assignedTo: [1,3], note: 4},
    { title: 'Task 10', tag: 'Design', status: 'Ongoing', due_date: '2022-01-30', assignedTo: [4,10, 5], note: 4}
]

const Tasks = () => {
    return (
        <div className={`mx-4 mb-5 w-100`}>
            <Subnav />
            <div className={`px-4 pt-2 pb-4 d-flex flex-wrap gap-3`}>
                {tasks.map( (item, idx) => <TaskItem key={idx} task={item} delay={.2 * (idx+1)} />)}
            </div>
        </div>
    )
}

export default Tasks
