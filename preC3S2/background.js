
chrome.windows.onFocusChanged.addListener(function() {
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.command == "open_menu")
            chrome.tabs.sendMessage(tab.id, {
            command: "open",
            },
            function(msg) {
                console.log("result message:", msg);
            });
            sendResponse({
                msg: "OK"
        });
    }
);
