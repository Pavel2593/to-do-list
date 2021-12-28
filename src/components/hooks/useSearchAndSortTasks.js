import { useMemo } from 'react';

export const useSortedTasks = (tasks, sort) => {
    const sortedTasks = useMemo(() => {
        let result
        if (sort) {
            result = [...tasks].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            result = tasks
        }

        return result

    }, [sort, tasks]);

    return sortedTasks
}

export const useSearchAndSortTasks = (task, sort, search) => {
    const sortedTasks = useSortedTasks(task, sort)
    const searchedAndSortPosts = useMemo(() => {
        return sortedTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, sortedTasks])

    return searchedAndSortPosts
}