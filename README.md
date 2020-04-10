# `eslint-plugin-django`

## Overview

This eslint environment plugin provides globals for the [Django JavaScript
Catalog](https://docs.djangoproject.com/en/2.2/topics/i18n/translation/#using-the-javascript-translation-catalog).

Most eslint configurations use
[`"no-undef": "error"`](https://eslint.org/docs/rules/no-undef), which will cause
eslint to error if you internationalize your code and use Django as your backend,
e.g.:

```html+django
{# some template that loads your JS code #}
<script type="text/javascript" src="{% url 'javascript-catalog' %}"></script>
```

… then call one of its functions in your front-end code:

```js
const someText = gettext('My Text');
```

## Installation

First add the plugin as a development dependency:

```sh
npm install --save-dev eslint-plugin-django
```

Then configure eslint to use it:

```json
{
  "plugins": ["django"],
  "env": {
    "browser": true,
    "node": true,
    "django/i18n": true
  }
}
```

Refer to the eslint docs for configuring
[`plugins`](https://eslint.org/docs/user-guide/configuring#configuring-plugins) and
[`environments`](https://eslint.org/docs/user-guide/configuring#specifying-environments)
if you need more information.

## Alternatives

If you don’t want to install this plugin you could simple list the necessary
functions in the eslint configuration
[`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals) key:

```json
{
  "globals": {
    "gettext": "readonly",
    "ngettext": "readonly",
    "interpolate": "readonly",
    "get_format": "readonly",
    "gettext_noop": "readonly",
    "pgettext": "readonly",
    "npgettext": "readonly",
    "pluralidx": "readonly"
  }
}
```
