export type ID = number

export type Category = 'All' | 'Active' | 'Completed'

export type TaskType = {
	id: ID
	content: string
	done: boolean
}

export type TaskList = TaskType[]

export type TodoListContextType = {
	category: Category
	setCategory: React.Dispatch<React.SetStateAction<Category>>
	taskList: TaskList
	filterTaskList: () => TaskList
	addTask: (task: TaskType) => void
	removeTask: (idRemove: ID) => void
	setTaskStatus: (idUpdate: ID) => void
	clearCompleted: () => void
}

export type CustomThemeContextType = {
	isDarkTheme: boolean
	switchTheme: () => void
}

export type LayoutContextType = {
	isCategoriesStandalone: boolean
}
