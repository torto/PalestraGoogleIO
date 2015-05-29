var bespoke = require('bespoke'),
  mozillaSandstone = require('../../../lib/bespoke-theme-mozilla-sandstone.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop');

bespoke.from('article', [
  mozillaSandstone(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  backdrop()
]);
