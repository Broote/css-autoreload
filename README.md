# CSS autoreload

This script regularly checks if any of your CSS files were modified and reloads them without refreshing the whole page.

Use it as a bookmarklet:

```
javascript:void%20function(){function%20e(e){var%20t=new%20XMLHttpRequest;return%20t.open(%22HEAD%22,e+%22%3Fd=%22+Date.now(),!1),t.send(null),t.getResponseHeader(%22Last-Modified%22)}var%20t=document.querySelectorAll('link[href*=%22.css%22]');setInterval(function(){for(i=0;i%3Ct.length;++i){var%20n=t[i].href.split(%22%3F%22)[0],r=new%20Date(e(n)).getTime();t[i].href.split(%22%3Fm=%22)[1]!=r%26%26t[i].setAttribute(%22href%22,n+%22%3Fm=%22+r)}},1e3)}();
```

![Preview](https://user-images.githubusercontent.com/7975568/36636673-481d701a-19cb-11e8-99c9-681679c30054.gif?raw=true)