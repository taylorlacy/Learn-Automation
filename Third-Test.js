var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var assert = require('assert');
var By = $driver.By;
$browser.manage().window().maximize();

$browser.get('https://legalshield.com').then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.findElement(By.css('a.btn:nth-child(4)')).click()
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.quit()
})
