[![Build Status](https://secure.travis-ci.org/bensternthal/bespoke-theme-mozilla-sandstone.png?branch=master)](https://travis-ci.org/bensternthal/bespoke-theme-mozilla-sandstone)

# bespoke-theme-mozilla-sandstone

Mozilla Sandstone [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) Theme &mdash; [View demo](http://bensternthal.github.io/bespoke-theme-mozilla-sandstone)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/bensternthal/bespoke-theme-mozilla-sandstone/master/dist/bespoke-theme-mozilla-sandstone.min.js
[max]: https://raw.github.com/bensternthal/bespoke-theme-mozilla-sandstone/master/dist/bespoke-theme-mozilla-sandstone.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  mozillaSandstone = require('bespoke-theme-mozilla-sandstone');

bespoke.from('#presentation', [
  mozillaSandstone()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.mozillaSandstone()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-mozilla-sandstone
```

### Bower

```bash
$ bower install bespoke-theme-mozilla-sandstone
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
