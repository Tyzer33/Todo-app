import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { TodoListContext } from '../context/TodoListContext'
import { Category, TodoListContextType } from '../types/types'

type ButtonProps = {
	$isActive: boolean
}

const Button = styled.button<ButtonProps>`
	height: 100%;
	padding: 0.5rem;

	${({ $isActive }) =>
		$isActive
			? css`
					color: var(--category-active);
			  `
			: css`
					&:hover {
						color: ${({ theme }) => theme.hoverTextColor};
					}
			  `}
`

type Props = {
	content: Category
}

function CategoryButton({ content }: Props) {
	const { category, setCategory } = useContext(TodoListContext) as TodoListContextType

	return (
		<Button type="button" $isActive={category === content} onClick={() => setCategory(content)}>
			{content}
		</Button>
	)
}

export default CategoryButton
