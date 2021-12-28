import React from 'react'
import TaskItem from './../TaskItem/TaskItem'
import cl from './TaskList.module.scss'

const TaskList = ({ removeTask, tasks}) => {
    const isListEmpty = tasks.length === 0
    return (
        <div className={cl.TaskList}>
            {
                isListEmpty
                    ?
                        <h1 className={cl.TaskList__subtitle}>Пополните список дел.</h1>
                    :
                        tasks.map((task, index) => (
                            <TaskItem
                                removeTask={removeTask}
                                number={index + 1}
                                task={task}
                                key={task.id}
                            />
                        ))
                    
            }
        </div>
    )
}

export default TaskList
