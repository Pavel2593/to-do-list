import React from 'react'
import TaskItem from '../TaskItem'
import classes from './TaskList.module.scss'

const TaskList = ({removeTask, tasks, title }) => {
    const isListEmpty = tasks.length === 0
    return (
        <div>
            <h1 className={classes.TaskList__title}>{title}</h1>
            {
                isListEmpty
                    ?
                        <h2 className={classes.TaskList__subtitle}>Пополните список дел.</h2>
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
