import { TaskList, TaskType } from '../types/types'

export function isBoolean(string: unknown): string is boolean {
	return typeof string === 'boolean'
}

function isTask(obj: unknown): obj is TaskType {
	if (!obj || typeof obj !== 'object') return false

	const keyOfTask = ['id', 'content', 'done']
	return keyOfTask.every((key) => Object.keys(obj).includes(key))
}

export function isTaskList(arr: unknown): arr is TaskList {
	return Array.isArray(arr) && arr.every((item) => isTask(item))
}
