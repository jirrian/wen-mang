/*
Adapted from https://github.com/ITPNYU/hacking-the-browser/blob/master/content-script-via-browser-action/background.js
*/

console.log('Content Script via Browser Action background page, version 1');

chrome.browserAction.onClicked.addListener(function() {
  console.log('Clicked the browser action!');
  	chrome.tabs.executeScript({file: 'read.js'});
});

var id = chrome.contextMenus.create({"title": "Read selection!", "contexts":["selection"], "onclick": read});

function read(){
	chrome.tabs.executeScript({file: 'read.js'});
}