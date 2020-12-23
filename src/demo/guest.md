# 게스트 (미로그인)

```js
var messageCallback = function(action, payload) {
  switch (action) {
    case "REQUEST_LOGIN": // 로그인이 필요할 때 호출
      alert("로그인이 필요합니다");
      break;
  }
};
var options = {
  messageCallback: messageCallback,
};
mplayer("init", accessKey, campaignKey, "", options);
mplayer("run", "shoplivePlayer");
```

---

<ShopliveGuestDemo />
