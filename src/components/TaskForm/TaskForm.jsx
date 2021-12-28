import React, {useState} from 'react'
import FloodedButton from './../UI/FloodedButton/FloodedButton'
import DefaultInput from './../UI/DefaultInput/DefaultInput'
import cl from './TaskForm.module.scss'

const TaskForm = ({addTask, ...props}) => {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const createPost = (e) => {
        e.preventDefault()
        const newTask = { ...task, id: Date.now() }
        addTask(newTask)
        setTask({
            title: '',
            description: ''
        })
    }

    return (
        <form className={cl.taskForm}>
            <DefaultInput
                className={cl.taskFormItem}
                value={task.title}
                onChange={e => setTask({ ...task, title: e.target.value })}
                placeholder="Заголовок задачи"
            />
            <DefaultInput
                className={cl.taskFormItem}
                value={task.description}
                onChange={e => setTask({ ...task, description: e.target.value })}
                placeholder="Описание задачи"
            />
            <FloodedButton onClick={createPost}>
                Добавить
            </FloodedButton>
        </form>
    )
}

export default TaskForm
