/**
 * @fileoverview Tests for django/i18n.
 * @author Ben Spaulding
 */

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require('assert').strict;
const django = require('../lib');

const i18env = django.environments.i18n;

describe('django/i18n', () => {
	it('globals properties should be readonly', () => {
		assert.ok(Object.values(i18env.globals).every((v) => v === 'readonly'));
	});

	// TODO: Write test to ensure plugin / env can is properly loaded by eslint.
});
