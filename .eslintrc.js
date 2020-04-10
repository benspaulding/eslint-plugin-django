'use strict';

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2020,
	},
	env: {
		es6: true,
		node: true,
	},
	plugins: ['prettier'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		strict: ['error', 'global'],
	},
};
