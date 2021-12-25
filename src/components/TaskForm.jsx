import React, {useState} from 'react'
import FloodedButton from './UI/FloodedButton/FloodedButton'
import DefaultInput from './UI/DefaultInput/DefaultInput'

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
        <form style={{ marginBottom: '10px' }}>
            <DefaultInput
                value={task.title}
                onChange={e => setTask({ ...task, title: e.target.value })}
                placeholder="Заголовок задачи"
            />
            <DefaultInput
                value={task.description}
                onChange={e => setTask({ ...task, description: e.target.value })}
                placeholder="Описание задачи"
            />
            <FloodedButton onClick={createPost}>
                Создать задачу
            </FloodedButton>
        </form>
    )
}

export default TaskForm
