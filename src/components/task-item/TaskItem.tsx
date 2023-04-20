import React, {useEffect} from 'react';
import './task-item.scss'
import {useDispatch, useSelector} from "react-redux";
import {getEditTask, showEditPopup} from "../../redux/actions";
export interface ITask {
    id: string
    status: number | null
    priority: number | null
    title: string
    description: string
    schedule: Schedule
    author_name: string
}

export interface Schedule {
    creation_time: string
}
function TaskItem({task}: {task: ITask}) {
    const dispatch = useDispatch()
    const getColor = () => {
        switch (task.priority) {
            case 0:
                return '#92b84d'
            case 1:
                return 'yellow'
            case 2:
                return 'red'
        }
    }

    function handleClick (item: ITask) {
        dispatch(getEditTask(item))
        dispatch(showEditPopup())
    }

    return (
        <div className="task-item" onClick={() => handleClick(task)}>
            <div className="task-item__header">
                <div className="task-item__circle" style={{backgroundColor: getColor()}}/>
                <span className="task-item__heading">{task.title}</span>
            </div>
            <div className="task-item__body">
                <div>Исполнитель: <span>{task.author_name}</span></div>
            </div>
        </div>
    );
}

export default TaskItem;
