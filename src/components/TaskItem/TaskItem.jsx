import React from 'react';
import { useNavigate } from 'react-router-dom';
import FloodedButton from '../UI/FloodedButton/FloodedButton';
import BorderButton from './../UI/BorderButton/BorderButton';
import cl from './TaskItem.module.scss'

const TaskItem = ({removeTask, number, task}) => {
    let navigate = useNavigate()

    return (
        <div className={cl.taskItem}>
            <h2 className={cl.taskItemMB20}>{task.id}) {task.title}</h2>
            <div className={cl.taskItemMB40}>
                {task.body}
            </div>
            <div className={cl.taskItemRight}>
                <FloodedButton
                    className={cl.taskItemMR20}
                    onClick={() => {
                        navigate(`post/${task.id}`);
                    }}
                >Открыть</FloodedButton>
                <BorderButton onClick={() => removeTask(task.id)}>Удалить</BorderButton>
            </div>
        </div>
    )
}

export default TaskItem