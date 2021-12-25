import React from 'react';
import FloodedButton from './UI/FloodedButton/FloodedButton';


const TaskItem = ({removeTask, number, task}) => {
    return (
        <div className='task'>
            <div className='task__content'>
                <h2 className='task__title'>{number}) {task.title}</h2>
                <div>
                    {task.description}
                </div>
            </div>
            <div className='task__btn'>
                <FloodedButton onClick={() => removeTask(task.id)}>Удалить</FloodedButton>
            </div>
        </div>
    )
}

export default TaskItem