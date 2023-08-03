import { useContext } from 'react'
import styled, { css } from 'styled-components'
import checkedIcon from '../assets/icon-check.svg'
import closeIcon from '../assets/icon-cross.svg'
import { TodoListContext } from '../context/TodoListContext'
import { TaskType, TodoListContextType } from '../types/types'
import breakpoints from '../breakpoints'

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1.5rem;
	aspect-ratio: 1/1;
	margin-right: 0.75rem;
	padding: 0.25rem;
	background: url(${closeIcon}) no-repeat center / 0.75rem;

	@media ${breakpoints.tabletPortraitUp} {
		height: 2rem;
		background-size: 1.25rem;
		margin-right: 1.125rem;
	}

	@media (hover) {
		visibility: hidden;
	}
`

const Container = styled.li`
	display: flex;
	align-items: center;
	height: 3.25rem;
	background: ${({ theme }) => theme.taskBg};
	border-bottom: 1px solid ${({ theme }) => theme.taskSeparation};

	@media ${breakpoints.tabletPortraitUp} {
		height: 4rem;
	}

	&:hover > ${Button} {
		// Button Delete
		visibility: visible;
	}
`

type CheckboxProps = {
	$done: boolean
}

const Checkbox = styled.button<CheckboxProps>`
	height: 1.25rem;
	aspect-ratio: 1/1;
	margin: 0 0.75rem 0 1.25rem;
	position: relative;
	border: 1px solid ${({ theme }) => theme.checkboxBorder};
	border-radius: 50%;
	cursor: pointer;

	@media ${breakpoints.tabletPortraitUp} {
		height: 1.625rem;
		margin: 0 1.5rem;
	}

	${({ $done }) =>
		$done
			? css`
					background:
						url(${checkedIcon}) center no-repeat,
						var(--check-background);
			  `
			: css`
					&:hover {
						background: var(--check-background);
						border: none;

						&::before {
							content: '';
							position: absolute;
							inset: 1px;
							border-radius: 50%;
							background: ${({ theme }) => theme.taskBg};
						}
					}
			  `}
`

const InvisibleCheckbox = styled.input`
	visibility: hidden;
`

type TextProps = {
	$done: boolean
}

const Text = styled.p<TextProps>`
	width: 100%;
	padding-right: 1rem;
	font-size: var(--task-font-size);
	color: ${({ $done, theme }) => ($done ? theme.lineThrough : theme.taskTextColor)};
	text-decoration: ${({ $done }) => ($done ? 'line-through' : 'initial')};
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	@media ${breakpoints.tabletPortraitUp} {
		padding-right: 0.5rem;
	}
`

export default function Task({ id, content, done }: TaskType) {
	const { removeTask, setTaskStatus } = useContext(TodoListContext) as TodoListContextType

	return (
		<Container title={content}>
			<Checkbox title="" $done={done} type="button" onClick={() => setTaskStatus(id)}>
				<InvisibleCheckbox type="checkbox" />
			</Checkbox>
			<Text $done={done}>{content}</Text>
			<Button title="" type="button" onClick={() => removeTask(id)} />
		</Container>
	)
}
