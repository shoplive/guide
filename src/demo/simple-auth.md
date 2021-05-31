# 일반 인증

```js
(function (s,h,o,p,l,i,v,e) {s["ShoplivePlayer"]=l;(s[l]=s[l]||function(){
(s[l].q=s[l].q||[]).push(arguments);}),(i=h.createElement(o)),
(v=h.getElementsByTagName(o)[0]);i.async=1;i.src=p;v.parentNode.insertBefore(i,v);
})(window,document,"script","https://static.shoplive.cloud/live.js","mplayer");

var messageCallback = {
  REQUEST_LOGIN: function () {
    alert("로그인이 필요합니다");
  },
};
var options = {
  messageCallback: messageCallback,
};
mplayer(
  "init",
  accessKey,
  campaignKey,
  { userId: userId, userName: userName },
  options
);
mplayer("run", "shoplivePlayer");
```

---

<ShopliveSimpleDemo />
