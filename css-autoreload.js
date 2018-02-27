var styleSheets = document.querySelectorAll('link[href*=".css"]');
setInterval(function() {
    for (i = 0; i < styleSheets.length; ++i) {
        var styleSheetUrl = styleSheets[i].href.split('?')[0];                
        var req = new XMLHttpRequest();
        req.open("HEAD", styleSheetUrl + "?d=" + Date.now(), false);
        req.send(null);
        if(req.status == 200) {
            var styleSheetModified = new Date(req.getResponseHeader('Last-Modified')).getTime();
            var styleSheetLength = req.getResponseHeader('Content-Length');
            if(styleSheets[i].href.split('?m=')[1] != styleSheetModified + "-" + styleSheetLength) {
                console.log("Reloaded: " + styleSheetUrl);
                console.log(req.getAllResponseHeaders());
                styleSheets[i].setAttribute('href', styleSheetUrl + "?m=" + styleSheetModified + "-" + styleSheetLength);
            }
        }
    }
}, 1000);