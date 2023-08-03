import styled from 'styled-components'
import breakpoints from '../breakpoints'

const Container = styled.div`
	position: absolute;
	inset: 0 0 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.background};
	font-size: 1.5rem;
	color: ${({ theme }) => theme.titleColor};
	text-align: center;

	@media ${breakpoints.tabletPortraitUp} {
		font-size: 2.5rem;
	}
`
function ErrorComponent() {
	return (
		<Container>
			🚨
			<p>Sorry, an error occured!</p>
			🚨
		</Container>
	)
}

export default ErrorComponent
