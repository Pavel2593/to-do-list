import React, { useState } from 'react'
import { useSearchAndSortTasks } from './components/hooks/useSearchAndSortTasks';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import DefaultPopup from './components/UI/DefaultPopup/DefaultPopup';
import FloodedButton from './components/UI/FloodedButton/FloodedButton';
import HeaderList from './components/UI/HeaderList/HeaderList';

function App() {
	const [tasks, setTasks] = useState([
		{ id: 7, title: 'to-do-list', description: 'разобраться с axios' },
		{ id: 0, title: 'Уборка перед НГ', description: 'Помыть полы' },
		{ id: 1, title: 'досуг', description: 'сходить попить кофе' },
		{ id: 2, title: 'Подарки НГ', description: 'тайный санты бюджет 1000' },
		{ id: 3, title: 'JavaScript', description: 'test test test test' },
	]);

	const [filterObject, setFilterObject] = useState({ sort: '', search: '' })
	const [showTaskFormPopup, setShowTaskFormPopup] = useState(false)
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
				<TaskList
					removeTask={removeTask}
					tasks={searchedAndSortPosts}
				/>
			</div>
		</div>
	);
}

export default App;
