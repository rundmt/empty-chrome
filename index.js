#!/usr/bin/env node

var argv = require('yargs')
  .option('url', {
   alias: 'u',
   demand: true,
   describe: 'The URL to run against'
  }).argv;

var driver = require('./driver');
var browser = driver.start();
var webdriver = driver.webdriver;
browser.get(argv.url);
