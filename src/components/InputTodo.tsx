import { useContext, useState } from 'react'
import styled from 'styled-components'
import { TodoListContext } from '../context/TodoListContext'
import { TodoListContextType } from '../types/types'
import breakpoints from '../breakpoints'

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 3rem;
	margin: 2rem 0 1rem 0;
	background: ${({ theme }) => theme.taskBg};
	border-radius: 0.3125rem;
	padding: 0.75rem;
	padding-left: 0;

	@media ${breakpoints.tabletPortraitUp} {
		height: 4rem;
		margin: 2.75rem 0 1.5rem 0;
	}
`

const FakeCheckBox = styled.div`
	height: 1.25rem;
	aspect-ratio: 1/1;
	margin-left: 1.25rem;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.checkboxBorder};

	@media ${breakpoints.tabletPortraitUp} {
		height: 1.625rem;
		margin-left: 1.5rem;
	}
`

const Input = styled.input`
	height: 100%;
	width: 100%;
	padding: 0 1rem 0 0.75rem;
	font-size: var(--task-font-size);
	color: ${({ theme }) => theme.taskTextColor};
	text-overflow: ellipsis;

	@media ${breakpoints.tabletPortraitUp} {
		padding: 0 2rem 0 1.5rem;
	}
`

const Button = styled.button`
	height: 100%;
	padding: 0 1rem;
	background: var(--validate-input-bg);
	color: white;
	border-radius: 5px;
	font-size: 0.75rem;
`

export default function InputTodo() {
	const [inputed, setInputed] = useState('')
	const { addTask } = useContext(TodoListContext) as TodoListContextType

	const validation = () => {
		addTask({ id: Date.now(), content: inputed, done: false })
		setInputed('')
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			validation()
		}
	}

	return (
		<Container>
			<FakeCheckBox />
			<Input
				type="text"
				value={inputed}
				onChange={(e) => setInputed(e.target.value)}
				placeholder="Create a new todo..."
				onKeyDown={handleKeyDown}
			/>
			{inputed !== '' && (
				<Button type="button" onClick={validation}>
					Validate
				</Button>
			)}
		</Container>
	)
}
