import React, {useState} from 'react';
import {autors, IAuthor, IStatusAndPriority, priorities, statuses} from "../../../other/EditPopupConsts";
import BaseButton from "../../UI/button/BaseButton";
import BasInput from "../../UI/input/BaseInput";
import './add-popup.scss'
import {useDispatch} from "react-redux";
import {addTask, hideAddPopup, hideEditPopup} from "../../../redux/actions";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {ITask} from "../../task-item/TaskItem";


function AddPopup({showPopup} : any) {
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

    function handleClick (newState: ITask) {
        newState.id = JSON.stringify(Date.now())
        if (newState.status === null) {
            newState.status = statuses[0].value
        }

        if (newState.priority === null) {
            newState.priority = priorities[0].value
        }

        if (newState.author_name === '') {
            newState.author_name = autors[0].author_name
        }
        // @ts-ignore
        newState.schedule.creation_time = JSON.parse(JSON.stringify(new Date()))
        dispatch(addTask({...newState}))
        console.log(newState)
        dispatch(hideAddPopup())
    }

    return (
        <div className="add-popup" onClick={showPopup}>
            <h4 className="add-popup__header">Новая задача</h4>
            <div className="add-popup__form">
                <div className="add-popup__line">
                    <span>Название</span>
                    <BasInput name="title" onChange={handleChange}/>
                </div>
                <div className="add-popup__line">
                    <span>Исполнитель</span>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="author_name"
                        onChange={handleChange}
                        defaultValue={autors[0].author_name}
                    >
                        {autors.map((author: IAuthor) =>
                            <MenuItem key={author.id} value={author.author_name}>
                                {author.author_name}
                            </MenuItem>
                        )}
                    </Select>
                </div>
                <div className="add-popup__column">
                    <span>Описание</span>
                    <textarea onChange={handleChange} name="description"/>
                </div>
                <div className="add-popup__line">
                    <span>Состояние</span>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="status"
                        onChange={handleChange}
                        defaultValue={statuses[0].value}
                    >
                        {statuses.map((status: IStatusAndPriority) =>
                            <MenuItem key={status.value} value={status.value}>
                                {status.text}
                            </MenuItem>
                        )}
                    </Select>
                </div>
                <div className="add-popup__line">
                    <span>Приоритет</span>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="priority"
                        onChange={handleChange}
                        defaultValue={priorities[0].value}
                    >
                        {priorities.map((priority: IStatusAndPriority) =>
                            <MenuItem key={priority.value} value={priority.value}>
                                {priority.text}
                            </MenuItem>
                        )}
                    </Select>
                </div>
                <div className="add-popup__btns">
                    <BaseButton color="gray" text="Отмена" action={()=> dispatch(hideAddPopup())} />
                    <BaseButton color="green" text="Сохранить" action={() => handleClick(state)}/>
                </div>
            </div>
        </div>
    );
}

export default AddPopup;
