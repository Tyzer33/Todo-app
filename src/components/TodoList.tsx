import { useContext } from 'react'
import styled from 'styled-components'
import Task from './Task'
import ListFooter from './ListFooter'
import { TodoListContext } from '../context/TodoListContext'
import { TodoListContextType } from '../types/types'

const Container = styled.div`
	border-radius: 0.3125rem;
	overflow: hidden;
	box-shadow: 0 2rem 3rem -2rem ${({ theme }) => theme.boxShadowColor};
`

const TaskContainer = styled.ul`
	background: ${({ theme }) => theme.behindTaskColor};
`

export default function TodoList() {
	const { filterTaskList } = useContext(TodoListContext) as TodoListContextType

	return (
		<Container>
			<TaskContainer>
				{filterTaskList().map(({ id, content, done }) => (
					<Task id={id} content={content} done={done} key={id} />
				))}
			</TaskContainer>
			<ListFooter />
		</Container>
	)
}
