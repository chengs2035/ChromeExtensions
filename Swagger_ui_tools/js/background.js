var is_pa;
chrome.storage.sync.get({is_pa: true}, function(items) {
	is_pa = items.is_pa;
});

chrome.webRequest.onCompleted.addListener(details => {
	// cancel 表示取消本次请求
	//return {cancel: true};
	console.log(details.url);
	if(details.url.indexOf("api-docs")!=-1){
		sendMessageToContentScript({cmd:'start-api-docs',is_pa:is_pa}, function(response){});	
	}
}, {urls: ["<all_urls>"]});


// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log(request, sender, sendResponse);
	sendResponse('');
});


function sendMessageToContentScript(message, callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		chrome.tabs.sendMessage(tabs[0].id, message, function(response)
		{
			if(callback) callback(response);
		});
	});
}



