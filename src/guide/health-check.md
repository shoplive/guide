# 서버 상태 체크

CDN 장애를 대응하기 위해 HEALTH CHECK 기능을 제공합니다.

장애에 대비하여 특정한 이미지를 출력하거나 스크립트를 실행할 수 있습니다.

## 체크방법

다음 URL을 호출하고 status code가 200인지 확인합니다.

https://config.shoplive.cloud/ping.json

## 샘플 코드

기존코드

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

Health 체크 추가 (jQuery)

```js
$.get("https://config.shoplive.cloud/ping.json", function(_data_, status) {
  if (status === "success") {
    initPlayer();
  }
}).fail(function() {
  // error handling
});
```

Health 체크 추가 (vanilla js)

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
