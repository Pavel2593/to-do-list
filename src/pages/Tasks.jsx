import React, { useState, useEffect } from 'react'
import { useSearchAndSortTasks } from './../hooks/useSearchAndSortTasks'
import { useFetching } from './../hooks/useFetching'
import TaskFilter from './../components/TaskFilter/TaskFilter'
import TaskForm from './../components/TaskForm/TaskForm'
import TaskList from './../components/TaskList/TaskList'
import DefaultPopup from './../components/UI/DefaultPopup/DefaultPopup'
import FloodedButton from './../components/UI/FloodedButton/FloodedButton'
import HeaderList from './../components/UI/HeaderList/HeaderList'
import Pagination from './../components/UI/Pagination/Pagination'
import TaskServic from './../API/TaskServis'
import DefaultLoader from './../components/UI/DefaultLoader/DefaultLoader'
import { getPageCount } from './../utils/pages'

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [showTaskFormPopup, setShowTaskFormPopup] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [filterObject, setFilterObject] = useState({ sort: '', search: '' })
    const searchedAndSortPosts = useSearchAndSortTasks(tasks, filterObject.sort, filterObject.search);
    const [fetchTasks, isTasksLoading, tasksError] = useFetching(async (limit, page) => {
        const response = await TaskServic.getAll(limit, page)
        setTasks(response.data)
        const totalCount = response.headers['x-total-count']
        const pageCount = getPageCount(totalCount, limit)
        setTotalPages(pageCount)

    })

    useEffect(() => {
        fetchTasks(limit, page)
    }, [])

    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
        setShowTaskFormPopup(false)
    }

    const removeTask = (deletedTaskId) => {
        setTasks(tasks.filter(
            task => task.id !== deletedTaskId
        ))
    }

    const changePage = (page) => {
        setPage(page)
        fetchTasks(limit, page)
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
                <Pagination totalPages={totalPages} page={page} changePage={changePage} />
            </div>
        </div>
    );
}

export default Tasks;