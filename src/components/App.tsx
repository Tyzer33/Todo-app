import { useContext } from 'react'
import { styled } from 'styled-components'
import Header from './Header'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import Categories from './Categories'
import breakpoints from '../breakpoints'
import { LayoutContext } from '../context/LayoutContext'
import { LayoutContextType } from '../types/types'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 20.5rem;

	@media ${breakpoints.tabletPortraitUp} {
		width: 33.75rem;
	}
`

const Hint = styled.p`
	font-size: 0.875rem;
	color: ${({ theme }) => theme.infoTextColor};
	margin-top: 2.5rem;
	text-align: center;

	@media ${breakpoints.tabletPortraitUp} {
		margin-top: 3.25rem;
	}
`

export default function App() {
	const { isCategoriesStandalone } = useContext(LayoutContext) as LayoutContextType

	return (
		<Container>
			<Header />
			<InputTodo />
			<TodoList />
			{isCategoriesStandalone && <Categories />}
			<Hint>Drag and drop to reorder list</Hint>
		</Container>
	)
}
