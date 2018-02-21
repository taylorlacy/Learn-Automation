//build
var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var assert = require('assert');
var By = $driver.By;
$browser.manage().window().maximize();
//end build


//Helpers
var scrollTo = function(selector){
  var element = $browser.findElement(selector);
  $browser.executeScript("arguments[0].scrollIntoView()", element);
};
//end Helpers

var zips = ["74820", "73401", "73030"]
var randomZips = zips [(Math.random() * zips.length) | 0]

$browser.get('https://legalshield.com').then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return scrollTo(By.css('.media-container'));
}).then(function(){
  return $browser.findElement(By.css('a.btn-row:nth-child(1)')).click();
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.findElement(By.id('find-associate-zip-code')).sendKeys(randomZips);
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.quit();
});
