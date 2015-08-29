document.getElementById('red').onclick = function() {
    changeColor('red');
}


var mainWinId;
document.getElementById('window').onclick = function() {
    chrome.windows.getLastFocused(
    {populate: false},
    function(currentWindow) {
	console.log(currentWindow.id);
        chrome.windows.update(currentWindow.id, { height: 600 });

	
	chrome.windows.create({
	url: "menu.html",
	top: 800,
	height: 100,
    })
    });
	

}


document.getElementById('menu').onclick = function() {
    chrome.tabs.executeScript(null,{file: "menu.js"})
}

$(function() {
	$('div').mouseover(
		$(this).css('background', 'red')
	)
})

function changeColor(color) {
    chrome.tabs.executeScript(null, {
        "code": "document.body.style.backgroundColor='"+color+"'"
    });
}