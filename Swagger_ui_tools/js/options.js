document.addEventListener('DOMContentLoaded', function() {
	var defaultConfig = {is_pa: false}; 
	chrome.storage.sync.get(defaultConfig, function(items) {
		document.getElementById('is_pa').checked = items.is_pa;
	});
});

document.getElementById('save').addEventListener('click', function() {
	var is_pa = document.getElementById('is_pa').checked;
	chrome.storage.sync.set({ is_pa: is_pa}, function() {
		document.getElementById('status').textContent = '保存成功！';
		setTimeout(() => {document.getElementById('status').textContent = '';}, 800);
	});
});