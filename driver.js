var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

function start () {
  return new webdriver.Builder()
      .forBrowser('chrome')
      .build();
}

module.exports = {
  start: start,
  webdriver: webdriver
};
