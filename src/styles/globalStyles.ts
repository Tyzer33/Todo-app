import { createGlobalStyle } from 'styled-components'
import bgMobileLight from '../assets/bg-mobile-light.jpg'
import bgMobileDark from '../assets/bg-mobile-dark.jpg'
import bgDesktopLight from '../assets/bg-desktop-light.jpg'
import bgDesktopDark from '../assets/bg-desktop-dark.jpg'
import breakpoints from '../breakpoints'

const GlobalStyles = createGlobalStyle`
:root {

	--task-font-size: 0.75rem;
	--footer-font-size: 0.6875rem;
	--categories-font-size: 0.875rem;
	--category-active: hsl(220, 98%, 61%);
	--validate-input-bg: hsl(220, 98%, 61%);
	--lg1: hsl(192, 100%, 67%);
	--lg2: hsl(280, 87%, 65%);
	--check-background: linear-gradient(135deg, var(--lg1) , var(--lg2));

	@media ${breakpoints.tabletPortraitUp} {
		--task-font-size: 1.0625rem;
		--footer-font-size: 0.875rem;
	}
}


* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem 1.5rem;
	font-family: 'Josefin Sans', sans-serif;

	background-color: ${({ theme }) => theme.background};
	background-image: url(${({ theme }) => (theme.name === 'light' ? bgMobileLight : bgMobileDark)});
	background-repeat: no-repeat;
	background-position: top center;
	background-size: auto 200px;

	@media ${breakpoints.tabletPortraitUp} {
		padding: 4.625rem 0 3.25rem 0;
	}


	/* Media queries only for background */
	@media (min-width: 376px) {
		background-size: 100%;
	}

	@media (min-width: 450px) {
		background-image: url(${({ theme }) => (theme.name === 'light' ? bgDesktopLight : bgDesktopDark)});
		background-size: auto 200px;
	}

	@media ${breakpoints.tabletPortraitUp} {
		background-size: auto 300px;
	}

	@media (min-width: 1440px) {
		background-size: 100%;
	}
	/* End of Media queries for background */

}


input{
	font-family: 'Josefin Sans', sans-serif;
	border: none;
	background: none;

	&:focus {
		outline: none;
	}
}

button {
	background: none;
	border: none;
	font-family: inherit;
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	cursor: pointer;
}

`

export default GlobalStyles
