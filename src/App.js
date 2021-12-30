import React, { useState, useEffect } from 'react'
import { useSearchAndSortTasks } from './hooks/useSearchAndSortTasks'
import { useFetching } from './hooks/useFetching'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import DefaultPopup from './components/UI/DefaultPopup/DefaultPopup'
import FloodedButton from './components/UI/FloodedButton/FloodedButton'
import HeaderList from './components/UI/HeaderList/HeaderList'
import TaskServic from './API/TaskServis'
import DefaultLoader from './components/UI/DefaultLoader/DefaultLoader'

function App() {
	const [tasks, setTasks] = useState([]);
	const [filterObject, setFilterObject] = useState({ sort: '', search: '' })
	const [showTaskFormPopup, setShowTaskFormPopup] = useState(false)
	const [fetchTasks, isTasksLoading, tasksError] = useFetching(async () => {
		const response = await TaskServic.getAll()
		setTasks(response)
	})
	
	useEffect(() => {
		fetchTasks()
	}, [])

	const searchedAndSortPosts = useSearchAndSortTasks(tasks, filterObject.sort, filterObject.search);

	const addTask = (newTask) => {
		setTasks([...tasks, newTask])
		setShowTaskFormPopup(false)
	}

	const removeTask = (deletedTaskId) => {
		setTasks(tasks.filter(
			task => task.id !== deletedTaskId
		))
	}

	return (
		<div className="app">
			<div className='main'>
				<HeaderList>
					<TaskFilter
						filterObject={filterObject}
						setFilterObject={setFilterObject}
					/>
					<FloodedButton onClick={() => setShowTaskFormPopup(true)} >Создать задачу</FloodedButton>
					<DefaultPopup title="Создать задачу" show={showTaskFormPopup} setShow={setShowTaskFormPopup}>
						<TaskForm addTask={addTask} />
					</DefaultPopup>
				</HeaderList>
				{tasksError &&
					<p>{tasksError}</p>
				}
				{
				isTasksLoading
					?
						<DefaultLoader />
					: 
						<TaskList
							removeTask={removeTask}
							tasks={searchedAndSortPosts}
						/>
				}
			</div>
		</div>
	);
}

export default App;
