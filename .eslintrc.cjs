module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/jsx-runtime',
		'plugin:styled-components-a11y/recommended',
		'prettier'
	],
	parserOptions: {
		project: './tsconfig.json'
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'styled-components-a11y'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
	}
}
