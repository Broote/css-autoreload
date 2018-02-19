function fetchModified(url) {
    var req = new XMLHttpRequest();
    req.open("HEAD", url + "?d=" + Date.now(), false);
    req.send(null);
    return req.getResponseHeader('Last-Modified');
}
var styleSheets = document.querySelectorAll('link[data-reload="true"]');
setInterval(function() {
    for (i = 0; i < styleSheets.length; ++i) {
        var styleSheetUrl = styleSheets[i].href.split('?')[0];
        var styleSheetModified = new Date(fetchModified(styleSheetUrl)).getTime();
        styleSheets[i].setAttribute('href', styleSheetUrl + "?m=" + styleSheetModified);
    }
}, 500);
