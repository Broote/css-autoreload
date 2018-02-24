# CSS autoreload

This script checks if your stylesheet was modified and reloads it without refreshing the whole page.

<a href="javascript:(function(){ function fetchModified(url) { var req = new XMLHttpRequest(); req.open(&quot;HEAD&quot;, url + &quot;?d=&quot; + Date.now(), false); req.send(null); return req.getResponseHeader('Last-Modified'); } var styleSheets = document.querySelectorAll('link[href*=&quot;.css&quot;]'); setInterval(function() { for (i = 0; i < styleSheets.length; ++i) { var styleSheetUrl = styleSheets[i].href.split('?')[0]; var styleSheetModified = new Date(fetchModified(styleSheetUrl)).getTime(); styleSheets[i].setAttribute('href', styleSheetUrl + &quot;?m=&quot; + styleSheetModified); } }, 1000); })(); " id="bookmarklet_link">CSS Autoreload</a>

![Preview](preview.gif?raw=true)