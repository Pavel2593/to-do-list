import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
                        <TransitionGroup>
                            {
                                tasks.map((task, index) => (
                                    <CSSTransition
                                    key={task.id}
                                    timeout={500}
                                    classNames={{
                                        enter: cl.animationEnter,
                                        enterActive: cl.animationEnterActive,
                                        exit: cl.animationExit,
                                        exitActive: cl.animationExitActive,
                                    }}
                                    >
                                        <TaskItem
                                        removeTask={removeTask}
                                        number={index + 1}
                                        task={task}
                                        />
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                }
        </div>
    )
}

export default TaskList
