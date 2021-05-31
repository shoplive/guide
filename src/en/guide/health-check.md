# Service health check

It can be checked `shoplive` service is normal by calling a specific API.  
You can run a script or expose an image to avoid a white page.

## Guide

Call below API and verify the response status is 200 OK.

```
https://config.shoplive.cloud/ping.json
```

## Sample

Previous

```js
function initPlayer() {
  (function (s,h,o,p,l,i,v,e) {s["ShoplivePlayer"]=l;(s[l]=s[l]||function(){
  (s[l].q=s[l].q||[]).push(arguments);}),(i=h.createElement(o)),
  (v=h.getElementsByTagName(o)[0]);i.async=1;i.src=p;v.parentNode.insertBefore(i,v);
  })(window,document,"script","https://static.shoplive.cloud/live.js","mplayer");

  mplayer("init", "{{ access_key }}", "{{ campaign_key }}", "{{ user authorization }}", {{ options }});
  mplayer("run", "{{ id }}");
}
```

Add health check process (jQuery)

```js
$.get("https://config.shoplive.cloud/ping.json", function(_data_, status) {
  if (status === "success") {
    initPlayer();
  }
}).fail(function() {
  // error handling
});
```

Add health check process (vanilla js)

```js
var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "https://config.shoplive.cloud/ping.json", true);

request.onreadystatechange = function() {
  if (request.readyState === 4) {
    if (request.status === 200) {
      initPlayer();
    } else {
      // error handling
    }
  }
};

request.send(null);
```
