module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: ["tsconfig.json"],
		tsconfigRootDir: __dirname,
		createDefaultProgram: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"airbnb",
		"airbnb-typescript",
		"plugin:jsx-a11y/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	plugins: ["jsx-a11y", "@typescript-eslint", "prettier"],
	rules: {
		"react/jsx-key": "error",
		"prettier/prettier": [
			"error",
			{},
			{
				usePrettierrc: true,
			},
		],
		"@typescript-eslint/indent": "off",
		"prefer-arrow-callback": "warn",
	},
	overrides: [
		{
			// enable the rule specifically for TypeScript files
			files: ["*.ts", "*.tsx"],
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": ["warn"],
			},
		},
	],
};
