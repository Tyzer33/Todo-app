import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './components/App'
import GlobalStyles from './styles/globalStyles'
import { TodoListProvider } from './context/TodoListContext'
import { CustomThemeProvider } from './context/CustomThemeContext'
import { LayoutProvider } from './context/LayoutContext'
import ErrorComponent from './components/ErrorComponent'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomThemeProvider>
			<GlobalStyles />
			<ErrorBoundary fallback={<ErrorComponent />}>
				<LayoutProvider>
					<TodoListProvider>
						<App />
					</TodoListProvider>
				</LayoutProvider>
			</ErrorBoundary>
		</CustomThemeProvider>
	</React.StrictMode>
)
