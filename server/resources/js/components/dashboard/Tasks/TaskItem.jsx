import css from './tasks.module.css';
import { BiNote, BiCalendarX } from 'react-icons/bi'

const TaskItem = ({task, delay}) => {
    return (
        <div className={`${css.task_item} css-rounded-lg px-3 py-2 bg-light css-shadow-xsm side-in`} style={{animationDelay:`${delay}s`}}>
            <div className='mb-4'>
                <div className="badge bg-warning me-1">{ task.tag ?? 'Task Tag'}</div>
                <div className="badge bg-secondary">{ task.status ?? 'Task Status'}</div>
            </div>
            <h4 className={`css-text-primary fs-6 mb-1`}>
                { task.title ?? 'Task Name' }
            </h4>
            <div className={`${css.due_date} css-text-secondary d-flex align-items-center gap-1`}>
                <BiCalendarX fontSize='1.25rem' /><span>{ task.due_date ?? 'Due Date' }</span>
            </div>
            <div className={`d-flex justify-content-between align-items-center mt-4`}>
                <div>
                    {task.assignedTo.map( (item, idx) => (
                        <span className={`${css.member_img}`} key={idx} style={{transform: idx>0 && `translateX(-${idx*.75}rem)`}}>
                            <img src={`https://avatars.dicebear.com/api/avataaars/${item*Math.random()}.svg`} alt={`member${item}`} />
                        </span>
                    ))}
                </div>
                <button className={`css-button-sm`}>
                    <BiNote fontSize="1.25rem" /> { task.note ?? '0'}
                </button>
            </div>
        </div>
    )
}

export default TaskItem
