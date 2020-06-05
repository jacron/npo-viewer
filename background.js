// activate page action when url contains npostart.nl or nos.nl
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlMatches: 'npostart.nl/' },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

const winspecs = 'width=1300,height=790,resizable=0,locationbar=0,top=100,left=100';

//https://start-player.npo.nl/embed/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzbWFydHRhZyI6eyJzaXRlSWQiOiI0In0sImhhc1N1YnNjcmlwdGlvbiI6IjEiLCJoYXNQcmVtaXVtU3Vic2NyaXB0aW9uIjoiMSIsImVsZW1lbnRJZCI6InBsYXllci1MSV9OTDFfNDE4ODEwMiIsIm1lZGlhSWQiOiJMSV9OTDFfNDE4ODEwMiIsInRvcHNwaW4iOnsicGFydHlJZCI6IjA6azUxbXZsOGU6eU9wVlJpYTl6cExoRjd-M3BqbXNFNk1GM2ROZ2NRcDIiLCJwcm9maWxlSWQiOiIyZDBhMmU2YS00MDJhLTQ4NzItOWU4Ny1lNjAyNGRmMGE3YmQifSwiaGFzU2V0dGluZ3MiOiIxIiwic3R5bGVWZXJzaW9uIjoiMiIsImhhc0FkQ29uc2VudCI6IjAiLCJzaGFyZSI6IjAiLCJhdXRvcGxheSI6IjEiLCJwYWdlVXJsIjoiaHR0cDpcL1wvd3d3Lm5wb3N0YXJ0Lm5sXC9saXZlXC9ucG8tMSIsInN0ZXJSZWZlcnJhbFVybCI6Imh0dHA6XC9cL3d3dy5ucG9zdGFydC5ubFwvbGl2ZVwvbnBvLTEiLCJzdGVyU2l0ZUlkIjoibnBvc3RhcnQiLCJpYXQiOjE1ODcwMTEwNjUsIm5iZiI6MTU4NzAxMTA2NSwiZXhwIjoxNTg3MDM5ODY1LCJjb25zdW1lcklkIjpudWxsLCJpc1BsYXlsaXN0IjpmYWxzZSwicmVmZXJyZXJVcmwiOm51bGwsInNraXBDYXRhbG9nIjowLCJub0FkcyI6MCwicmVjb21tZW5kYXRpb25zIjoxLCJpc3MiOiJleUpwZGlJNklpdDNTSHB2VVhsRWFqWnBRVVJ4YUc5eGRWSXlhSGM5UFNJc0luWmhiSFZsSWpvaWIxZ3laSFJxTWpaSGEzQTRjRnA0V0c0NGVrb3hWVzh5VERCcVQzcDFSMkYwZVhCeVVFVnZNVzQxTWs0NE5tUjNVMkY0Y0hab2F6WlVUMmt3TUdwdFNDSXNJbTFoWXlJNklqRmlZbU13TXprelpXUXdaVFptTm1RM01UZzFNRGsxTkdGaE1USXlNVEUzTTJFellqSTFZVE5rT0dJMU1EQmtZelF4WTJSaE5ERTFZVFk1WldNNVlqZ2lmUT09In0.Pf9DRaei-OYgLWgJCh0sPj9IxxsPzlZ_pd2NLuwO-DM

function requestIframeSrc(tab) {
    chrome.tabs.sendMessage(tab.id, {request: 'getIframeSrc'},
        response => {
            // console.log('response', response);
            window.open(response.src, 'npo', winspecs);
        });
}

// execute pageaction when user clicks icon
chrome.pageAction.onClicked.addListener(() => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        requestIframeSrc(tabs[0]);
    });
});


