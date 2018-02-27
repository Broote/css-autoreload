# CSS autoreload

This script regularly checks if any of your CSS files were modified and reloads them without refreshing the whole page.

Use it as a bookmarklet:

```
javascript:void%20function(){var%20e=document.querySelectorAll('link[href*=%22.css%22]');setInterval(function(){for(i=0;i%3Ce.length;++i){var%20t=e[i].href.split(%22%3F%22)[0],n=new%20XMLHttpRequest;if(n.open(%22HEAD%22,t+%22%3Fd=%22+Date.now(),!1),n.send(null),200==n.status){var%20o=new%20Date(n.getResponseHeader(%22Last-Modified%22)).getTime(),s=n.getResponseHeader(%22Content-Length%22);e[i].href.split(%22%3Fm=%22)[1]!=o+%22-%22+s%26%26(console.log(%22Reloaded:%20%22+t),console.log(n.getAllResponseHeaders()),e[i].setAttribute(%22href%22,t+%22%3Fm=%22+o+%22-%22+s))}}},1e3)}();
```

![Preview](https://user-images.githubusercontent.com/7975568/36636673-481d701a-19cb-11e8-99c9-681679c30054.gif?raw=true)