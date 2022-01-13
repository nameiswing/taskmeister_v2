import css from './members.module.css';

const Members = () => {

    const members = [
        {name: 'Jacky Chen', date_added: '2020-01-15', tasks:[1,2], member_id: 2, completed: 0, in_progress: 2}
    ]
    
    return (
        <div className={`px-4 pb-5 w-100 h-100 d-flex gap-3`}>
            {members.map( (item,idx) => <MemberCard key={idx} member={item} />)}
        </div>
    )
}

export default Members


//CHILD COMPONENT
const MemberCard = ({member}) => {
    return (
        <div className={`css-rounded-lg css-bg-white border-0 p-3 d-flex flex-row css-shadow-sm`}>
            <div className='d-flex flex-column  align-items-center'>
                <div className={`${css.card_image} mb-2`}>
                    <img src={`https://avatars.dicebear.com/api/avataaars/${member.member_id}.svg`} alt="" />
                </div>
                <div className={`${css.name} card-title css-text-primary mb-1`}>{member.name}</div>
                <div className="card-text css-text-secondary">ID: <span className="fw-bolder">{member.member_id}</span></div>
            </div>
            <div className="vr ms-3"></div>
            <div className="card-body">
                <div className="card-text css-text-secondary">Tasks: <span className="fw-bolder">{member.member_id}</span></div>
                <div className="card-text css-text-secondary">Completed: <span className="fw-bolder">{member.completed}</span></div>
                <div className="card-text css-text-secondary">In-progress: <span className="fw-bolder">{member.in_progress}</span></div>
            </div>
        </div>
    )
}