function iframeSrc() {
    const iframes = document.getElementsByTagName('iframe');
    const iframe = iframes[0];
    if (iframe) {
        return iframe.src;
    }
    return null;
}

chrome.runtime.onMessage.addListener(
    (req, sender, sendResponse) => {
        if (req.request === 'getIframeSrc') {
            sendResponse({
                src: iframeSrc()
            });
        }
        sendResponse('getting iframe src...');
    });
