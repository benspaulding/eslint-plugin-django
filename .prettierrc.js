'use strict';

module.exports = {
	printWidth: 88,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['*.md', '*.y?ml'],
			options: {
				useTabs: false,
			},
		},
	],
};
