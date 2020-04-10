/**
 * @fileoverview Provides Django JS Catalog environment for eslint
 * @author Ben Spaulding
 */

'use strict';

module.exports = {
	environments: {
		i18n: {
			globals: {
				// As listed in Django documentation at:
				// https://github.com/django/django/blob/2.2.12/docs/topics/i18n/translation.txt#L1041
				gettext: 'readonly',
				ngettext: 'readonly',
				interpolate: 'readonly',
				get_format: 'readonly',
				gettext_noop: 'readonly',
				pgettext: 'readonly',
				npgettext: 'readonly',
				pluralidx: 'readonly',
				// Undocumented, but is the global object that django stores the above and other
				// i18n bits in.
				django: 'readonly',
			},
		},
	},
};
