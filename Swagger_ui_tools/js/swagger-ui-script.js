var is_injectpajs=false;
var is_injectApiDocs=false;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if(request.cmd == 'start-api-docs') {
		sendResponse('');
		if(!is_injectApiDocs){
			injectApiDocsJs();
			is_injectApiDocs=true;
		}
	}
	
});

// 向页面注入JS
function injectApiDocsJs(jsPath)
{
	jsPath='js/swagger-ui-script-inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	document.body.appendChild(temp);
}