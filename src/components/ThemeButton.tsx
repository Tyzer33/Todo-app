import { useContext } from 'react'
import styled from 'styled-components'
import lightThemeIcon from '../assets/icon-moon.svg'
import darkThemeIcon from '../assets/icon-sun.svg'
import { CustomThemeContext } from '../context/CustomThemeContext'
import { CustomThemeContextType } from '../types/types'
import breakpoints from '../breakpoints'

const Button = styled.button`
	display: flex;
`

const Image = styled.img`
	height: 1.25rem;

	@media ${breakpoints.tabletPortraitUp} {
		height: 1.75rem;
	}
`

export default function ThemeButton() {
	const { isDarkTheme, switchTheme } = useContext(CustomThemeContext) as CustomThemeContextType
	const themeIcon = isDarkTheme ? darkThemeIcon : lightThemeIcon

	return (
		<Button onClick={switchTheme} type="button">
			<Image src={themeIcon} alt="Theme icon" />
		</Button>
	)
}
