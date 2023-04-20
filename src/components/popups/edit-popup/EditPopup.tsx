import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './edit-popup.scss'
import BaseButton from "../../UI/button/BaseButton";
import {ITask} from "../../task-item/TaskItem";
import {autors, IAuthor, IStatusAndPriority, priorities, statuses} from "../../../other/EditPopupConsts";
import {hideEditPopup} from "../../../redux/actions";
import tasks from '../../../server/tasks.json'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function EditPopup({cancel} : any) {
    const task: ITask = useSelector((state: any) => state.tasks.editTask)
    const dispatch = useDispatch()
    const [state, setState] = useState<ITask>({
        id: "",
        status: null,
        priority: null,
        title: "",
        description: "",
        schedule: {
            creation_time: ""
        },
        author_name: ""
    })
    const handleChange = React.useCallback(({ target: { name, value } }: any) => {
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }, [])

    function handleClick (prevState: ITask, newState: ITask) {
        newState.id = prevState.id
        newState.schedule.creation_time = prevState.schedule.creation_time
        if(newState.author_name === ''){
            newState.author_name = prevState.author_name
        }
        if(newState.title === ''){
            newState.title = prevState.title
        }

        if(newState.description === ''){
            newState.description = prevState.description
        }

        if(newState.status === null){
            newState.status = prevState.status
        }

        if(newState.priority === null){
            newState.priority = prevState.priority
        }
        const objIndex = tasks.findIndex(((p: ITask) => p.id === prevState.id))
        // @ts-ignore
        tasks[objIndex] = newState
        dispatch(hideEditPopup())
    }

    return (
       <div className="edit-popup">
           <h4 className="edit-popup__header">{task.title}</h4>
               <div className="edit-popup__form">
                   <div className="edit-popup__line">
                       <span>Исполнитель</span>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="author_name"
                              defaultValue={task.author_name}
                              onChange={handleChange}
                          >
                              {autors.map((author: IAuthor) =>
                              <MenuItem key={author.id} value={author.author_name}>
                                  {author.author_name}
                              </MenuItem>
                              )}
                          </Select>
                   </div>
                   <div className="edit-popup__column">
                       <span>Описание</span>
                       <textarea onChange={handleChange} name="description" defaultValue={task.description} />
                   </div>
                   <div className="edit-popup__line">
                       <span>Состояние</span>
                       <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           name="status"
                           defaultValue={() => {
                               const status = statuses.find(i => i.value === task.status)
                               // @ts-ignore
                               return status.value
                           }}
                           onChange={handleChange}
                       >
                           {statuses.map((status: IStatusAndPriority) =>
                               <MenuItem key={status.value} value={status.value}>
                                   {status.text}
                               </MenuItem>
                           )}
                       </Select>
                   </div>
                   <div className="edit-popup__line">
                       <span>Приоритет</span>
                       <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           name="priority"
                           defaultValue={() => {
                               const priority = priorities.find(i => i.value === task.priority)
                               // @ts-ignore
                               return priority.value
                           }}
                           onChange={handleChange}
                       >
                           {priorities.map((priority: IStatusAndPriority) =>
                               <MenuItem key={priority.value} value={priority.value}>
                                   {priority.text}
                               </MenuItem>
                           )}
                       </Select>
                   </div>
                   <div className="edit-popup__btns">
                       <BaseButton color="gray" text="Удалить"/>
                       <BaseButton color="green" text="Сохранить" action={() => handleClick(task, state)}/>
                   </div>
               </div>
       </div>
    );
}

export default EditPopup;
