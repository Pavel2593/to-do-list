import React, { useState, useMemo } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList/TaskList'
import DefaultInput from './components/UI/DefaultInput/DefaultInput';
import DefaultSelect from './components/UI/DefaultSelect/DefaultSelect';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			title: 'c) JavaScript',
			description: 'd)test test test test'
		},
		{
			id: 7,
			title: 'c) JavaScript',
			description: 'c)test test test test'
		},
		{
			id: 1,
			title: 'a) JavaScript',
			description: 'b)test test test test'
		},
		{
			id: 2,
			title: 'd) JavaScript',
			description: 'a)test test test test'
		},
		{
			id: 3,
			title: 'b) JavaScript',
			description: 'c)test test test test'
		},
	]);

	const [searchInput, setSearchInput] = useState('');
	const [selectedSort, setSelectedSort] = useState('')

	const sortedTasks = useMemo(() => {
		let result
		if (selectedSort) {
			result = [...tasks].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		} else {
			result = tasks
		}

		return result

	}, [selectedSort, tasks]);

	const searchedAndSortPosts = useMemo(() => {
		return sortedTasks.filter(task => task.title.includes(searchInput));
	}, [searchInput, sortedTasks])

	const addTask = (newTask) => {
		setTasks([...tasks, newTask])
	}

	const removeTask = (deletedTaskId) => {
		setTasks(tasks.filter(
			task => task.id !== deletedTaskId
		))
	}

	const sortTasks = (value) => {
		setSelectedSort(value)
	}

	return (
		<div className="app">
			<TaskForm addTask={addTask}/>
			<DefaultInput
				placeholder='Поиск...'
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
			<DefaultSelect
				sortTask={sortTasks}
				defaultValue='Сортировка'
				options={[
					{ value: 'title', name: 'По названию'},
					{ value: 'description', name: 'По описанию'}
				]}
			/>
			<TaskList
				removeTask={removeTask}
				tasks={searchedAndSortPosts} 
				title='Cписок задач'
			/>

		</div>
	);
}

export default App;
