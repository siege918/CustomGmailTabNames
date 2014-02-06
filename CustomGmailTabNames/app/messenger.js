chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
        sendResponse({names: localStorage["nameReplacements"], tooltips: localStorage["tooltipReplacements"], emails: localStorage["emails"]});}
    );