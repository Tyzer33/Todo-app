import { isBoolean, isTaskList } from './typeguards'

export function getStoredDarkTheme() {
	const localStorageDarkTheme = localStorage.getItem('darkTheme')

	if (localStorageDarkTheme) {
		const parsedLocalStorage = JSON.parse(localStorageDarkTheme)
		if (isBoolean(parsedLocalStorage)) {
			return parsedLocalStorage
		}
	}

	return null
}

export function getStoredTasks() {
	const localTasks = localStorage.getItem('localTasks')
	if (localTasks) {
		const parsedLocalTasks = JSON.parse(localTasks)
		if (isTaskList(parsedLocalTasks)) {
			return parsedLocalTasks
		}
	}
	return null
}
