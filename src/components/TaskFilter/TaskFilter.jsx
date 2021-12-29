import React from 'react'
import DefaultInput from '../UI/DefaultInput/DefaultInput';
import DefaultSelect from '../UI/DefaultSelect/DefaultSelect';
import cl from './TaskFilter.module.scss'

const TaskFilter = ({filterObject, setFilterObject}) => {

    const changeSearchInput = (value) => {
        setFilterObject({...filterObject, search: value})
    }

    const changeSortSelect = (value) => {
        setFilterObject({...filterObject, sort: value})
    }

    return (
        <div className={cl.taskFilter}>
            <DefaultInput
                placeholder='Поиск...'
                className={cl.taskFilterItem}
                value={filterObject.search}
                onChange={e => changeSearchInput(e.target.value)}
            />
            <DefaultSelect
                className={cl.taskFilterItem}
                returnValueFunction={changeSortSelect}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    )
}

export default TaskFilter
