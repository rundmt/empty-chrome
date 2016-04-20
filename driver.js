require('chromedriver');
var webdriver = require('selenium-webdriver');


function start () {
  return new webdriver.Builder()
      .forBrowser('chrome')
      .build();
}

module.exports = {
  start: start,
  webdriver: webdriver
};
