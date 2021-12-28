import React from 'react';
import BorderButton from './../UI/BorderButton/BorderButton';
import cl from './TaskItem.module.scss'

const TaskItem = ({removeTask, number, task}) => {
    return (
        <div className={cl.taskItem}>
            <div>
                <h2 className={cl.taskItemMB}>{number}) {task.title}</h2>
                <div>
                    {task.description}
                </div>
            </div>
            <div>
                <BorderButton onClick={() => removeTask(task.id)}>Удалить</BorderButton>
            </div>
        </div>
    )
}

export default TaskItem