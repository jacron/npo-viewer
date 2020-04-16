document.addEventListener('DOMContentLoaded', () => {
    console.log("document-title", document.title);
    setTimeout(() => {
        const iframes = document.getElementsByTagName('iframe');
        console.log('iframes', iframes);
        const iframe = iframes[0];
        console.log('iframe', iframe);
        if (iframe) {
            console.log(iframe.src);
            chrome.runtime.sendMessage({
                    request: 'init',
                    title: document.title,
                    src: iframe.src,
                },
                response => {
                    console.log('response', response);
                });
        }

    }, 1000);
});
