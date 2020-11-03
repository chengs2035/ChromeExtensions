var is_injectpajs=false;
var is_injectApiDocs=false;
//这段脚本最先注入，直接就能取到body数据
//暂时不启用，后面调整后，再启用
// var s = document.createElement('script');
// s.src = chrome.extension.getURL('js/injectXMLHTTPRequest.js');
// s.onload = function() {
//     this.remove();
// };
// (document.head || document.documentElement).appendChild(s);

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