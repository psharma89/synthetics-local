var $driver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var $browser = new $driver.Builder().
   withCapabilities($driver.Capabilities.chrome()).
   build();





console.log('start');

var faker = require('faker');
$browser.get('http://survey.medallia.com/?mcy-tuwyt-com').then(function(){
	$browser.findElement($driver.By.id('i_onf_q_macysinc_mcy_tuwytcom_feedback_type_alt_1')).then(function(element){
		element.click();
	});
}).then(function(){
	$browser.findElement($driver.By.id('i_onf_q_macysinc_mcy_tuwytcom_contacttopics_alt_3')).then(function(element){
		element.click();
	});
}).then(function(){
	$browser.findElement($driver.By.id('nextButton')).then(function(element){
		element.click();
	});
}).then(function(){
	var text = faker.lorem.paragraph();
	$browser.findElement($driver.By.id('spl_q_macysinc_mcy_tuwytcom_feedback_feedback_cmt_input')).then(function(element){
		element.sendKeys(text);
	});
}).then(function(){
	$browser.findElement($driver.By.id('i_onf_q_macysinc_mcy_tuwytcom_contactpermission_alt_2')).then(function(element){
		element.click();
	});
}).then(function(){
	$browser.findElement($driver.By.id('nextButton')).then(function(element){
		element.click();
		setTimeout(function(){
			$browser.quit();
		}, 2000)
	});
});



