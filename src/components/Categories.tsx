import { useContext } from 'react'
import styled, { css } from 'styled-components'
import CategoryButton from './CategoryButton'
import { LayoutContext } from '../context/LayoutContext'
import { LayoutContextType } from '../types/types'

type ContainerProps = {
	$isStandalone: boolean
}

const Container = styled.div<ContainerProps>`
	display: flex;
	font-size: var(--categories-font-size);
	font-weight: 700;
	color: ${({ theme }) => theme.infoTextColor};
	gap: 0.25rem;
	height: 100%;

	${({ $isStandalone }) =>
		$isStandalone
			? css`
					justify-content: center;
					align-items: center;
					height: 3rem;
					margin-top: 1rem;
					border-radius: 0.3125rem;
					background: ${({ theme }) => theme.taskBg};
					box-shadow: 0 1rem 4rem -1rem ${({ theme }) => theme.boxShadowColor};
			  `
			: css`
					position: absolute;
					left: 50%;
					translate: -50% 0;
			  `}
`

export default function Categories() {
	const { isCategoriesStandalone: isStandalone } = useContext(LayoutContext) as LayoutContextType

	return (
		<Container $isStandalone={isStandalone}>
			<CategoryButton content="All" />
			<CategoryButton content="Active" />
			<CategoryButton content="Completed" />
		</Container>
	)
}
