import React, {useEffect} from 'react';
import '../tasks-page/tasks.scss'
import TaskItem, {ITask} from "../../components/task-item/TaskItem";
import BasePopup from "../../components/UI/popup/BasePopup";
import EditPopup from "../../components/popups/edit-popup/EditPopup";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks, hideEditPopup} from "../../redux/actions";
import Loader from "../../components/UI/loader/Loader";

function Tasks() {
    const editPopup = useSelector((state: any) => state.app.editPopup)
    const dispatch = useDispatch()
    const tasks = useSelector((state: any) => state.tasks.tasks)
    const loader = useSelector((state: any) => state.app.loader)
    useEffect(() => {
        if (!tasks.length){
            console.log(1)
            // @ts-ignore
            dispatch(fetchTasks())
        }
    }, [dispatch, tasks.length])


    const popup = () => {
        return <EditPopup cancel={()=> dispatch(hideEditPopup())}/>
    }
    return (
        <div className="tasks">
            { loader && <Loader width="60px" height="60px" /> }
            { editPopup && <BasePopup  component={popup()} showOrHide={()=>dispatch(hideEditPopup())} /> }
            { tasks.length > 0 && <div className="row">
                <div className="col-lg-4">
                    <div className="tasks__tasks-card">
                        <div className="tasks__header">
                            <h4 className="tasks__heading">В очереди</h4>
                        </div>
                        <div className="tasks__card-body">
                            {tasks.map((task: ITask) => {
                                if (task.status === 0)
                                    return <TaskItem key={task.id} task={task}/>

                            })}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="tasks__tasks-card">
                        <div className="tasks__header">
                            <h4 className="tasks__heading">В работе</h4>
                        </div>
                        <div className="tasks__card-body">
                            {tasks.map((task: ITask) => {
                                if (task.status === 1)
                                    return <TaskItem key={task.id} task={task}/>

                            })}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="tasks__tasks-card">
                        <div className="tasks__header">
                            <h4 className="tasks__heading">Выполнено</h4>
                        </div>
                        <div className="tasks__card-body">
                            {tasks.map((task: ITask) => {
                                if (task.status === 2) {
                                    return <TaskItem key={task.id} task={task}/>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Tasks;
