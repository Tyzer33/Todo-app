import styled from 'styled-components'
import ThemeButton from './ThemeButton'
import breakpoints from '../breakpoints'

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`

const Title = styled.h1`
	font-size: 1.75rem;
	letter-spacing: 0.625rem;
	color: ${({ theme }) => theme.titleColor};

	@media ${breakpoints.tabletPortraitUp} {
		font-size: 2.5rem;
		letter-spacing: 0.875rem;
	}
`

export default function Header() {
	return (
		<Container>
			<Title>TODO</Title>
			<ThemeButton />
		</Container>
	)
}
