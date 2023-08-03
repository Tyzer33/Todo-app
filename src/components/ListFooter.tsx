import { useContext } from 'react'
import styled from 'styled-components'
import Categories from './Categories'
import { TodoListContext } from '../context/TodoListContext'
import { LayoutContextType, TodoListContextType } from '../types/types'
import { LayoutContext } from '../context/LayoutContext'
import breakpoints from '../breakpoints'

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3.125rem;
	padding: 0 1.25rem;
	background: ${({ theme }) => theme.taskBg};
	font-size: var(--footer-font-size);
	color: ${({ theme }) => theme.infoTextColor};

	@media ${breakpoints.tabletPortraitUp} {
		padding: 0 1.5rem;
	}
`

const Button = styled.button`
	height: 75%;

	&:hover {
		color: ${({ theme }) => theme.hoverTextColor};
	}
`

export default function ListFooter() {
	const { isCategoriesStandalone } = useContext(LayoutContext) as LayoutContextType
	const { taskList, clearCompleted } = useContext(TodoListContext) as TodoListContextType
	const tasksLeft = taskList.filter(({ done }) => !done).length

	return (
		<Container>
			<p>{tasksLeft} items left</p>
			{!isCategoriesStandalone && <Categories />}
			<Button type="button" onClick={clearCompleted}>
				Clear Completed
			</Button>
		</Container>
	)
}
