import { ReactNode, createContext, useMemo, useState, useCallback } from 'react'
import ExampleTasksList from '../exampleTasksList'
import bell from '../assets/bell.mp3'
import { TodoListContextType, Category, TaskList, TaskType, ID } from '../types/types'
import { getStoredTasks } from '../function/functions'

export const TodoListContext = createContext<TodoListContextType | null>(null)

type Props = {
	children: ReactNode
}

export function TodoListProvider({ children }: Props) {
	const [category, setCategory] = useState<Category>('All')
	const [taskList, setTaskList] = useState<TaskList>(getStoredTasks() || ExampleTasksList)

	localStorage.setItem('localTasks', JSON.stringify(taskList))

	const addTask = useCallback((task: TaskType) => {
		setTaskList((prev) => [task, ...prev])
	}, [])

	const removeTask = useCallback((idRemove: ID) => {
		setTaskList((prev) => prev.filter(({ id }) => id !== idRemove))
	}, [])

	const setTaskStatus = useCallback(
		(idUpdate: ID) => {
			const bellSong = new Audio(bell)
			const newTaskList = taskList.map((task) => {
				if (task.id !== idUpdate) return task

				if (!task.done) bellSong.play()
				return { ...task, done: !task.done }
			})

			setTaskList(newTaskList)
		},
		[taskList]
	)

	const clearCompleted = useCallback(() => {
		setTaskList((prev) => prev.filter(({ done }) => !done))
	}, [])

	const filterTaskList = useCallback(() => {
		if (category === 'Active') {
			return taskList.filter(({ done }) => !done)
		}

		if (category === 'Completed') {
			return taskList.filter(({ done }) => done)
		}

		return taskList
	}, [category, taskList])

	const value = useMemo(
		() => ({
			category,
			setCategory,
			taskList,
			filterTaskList,
			addTask,
			removeTask,
			setTaskStatus,
			clearCompleted
		}),
		[
			category,
			setCategory,
			taskList,
			filterTaskList,
			addTask,
			removeTask,
			setTaskStatus,
			clearCompleted
		]
	)
	return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>
}
