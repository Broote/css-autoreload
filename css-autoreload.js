function fetchModified(url) {
    var req = new XMLHttpRequest();
    req.open("HEAD", url + "?d=" + Date.now(), false);
    req.send(null);
    return req.getResponseHeader('Last-Modified');
}
var styleSheet = document.querySelector('link[data-reload="true"]');
var styleSheetUrl = styleSheet.href.split('?')[0];
setInterval(function() {
    var styleSheetModified = new Date(fetchModified(styleSheetUrl)).getTime();
    styleSheet.setAttribute('href', styleSheetUrl + "?m=" + styleSheetModified);
}, 500);