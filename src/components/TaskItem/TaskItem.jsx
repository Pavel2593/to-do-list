import React from 'react';
import BorderButton from './../UI/BorderButton/BorderButton';
import cl from './TaskItem.module.scss'

const TaskItem = ({removeTask, number, task}) => {
    return (
        <div className={cl.taskItem}>
            <h2 className={cl.taskItemMB20}>{number}) {task.title}</h2>
            <div className={cl.taskItemMB40}>
                {task.body}
            </div>
            <div className={cl.taskItemRight}>
                <BorderButton onClick={() => removeTask(task.id)}>Удалить</BorderButton>
            </div>
        </div>
    )
}

export default TaskItem