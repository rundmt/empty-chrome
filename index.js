#!/usr/bin/env node

//url is required
var argv = require('yargs')
  .option('url', {
   alias: 'u',
   demand: true,
   describe: 'The URL to run against'
  }).argv;

var driver = require('./driver');

var browser = driver.start();
browser.get(argv.url);
