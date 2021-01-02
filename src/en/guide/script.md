# 스크립트 가이드

![연동 흐름](./imgs/index/intro.png)

샵라이브 플레이어가 삽입될 레이어에 `id`를 지정하고 스크립트를 호출합니다.

## 스크립트

플레이어를 렌더링 할 DOM(div,...)을 만들고 id를 지정한 다음, 다음과 같은 스크립트를 `</body>` 태그 바로 위에 추가합니다.

```js
(function (s,h,o,p,l,i,v,e) {s["ShoplivePlayer"]=l;(s[l]=s[l]||function(){
(s[l].q=s[l].q||[]).push(arguments);}),(i=h.createElement(o)),
(v=h.getElementsByTagName(o)[0]);i.async=1;i.src=p;v.parentNode.insertBefore(i,v);
})(window,document,"script","https://static.shoplive.cloud/live.js","mplayer");

mplayer("init", "{{ access_key }}", "{{ campaign_key }}", "{{ user authorization }}", {{ options }});
mplayer("run", "{{ id }}");
```

### init 함수

샵라이브 클라이언트를 초기화합니다.

`mplayer("init", access_key, campaign_key, user_authorization, options)`

| 인자값        | 설명                                                                | 샘플                                                                    |
| ------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| access_key    | 발급한 접근키                                                       | uv9CGthPzlvsInZerCw0                                                    |
| campaign_key  | 방송 캠페인 키<br />빈값인 경우 가장 가까운 날짜의 캠페인 자동 선택 | PzlvsInZ                                                                |
| authorization | 사용자 인증 정보<br />게스트의 경우엔 빈값 입력                     | 인증방식에 따라 다름<br />[인증](./authorization)페이지를 참고해주세요. |
| options       | 추가 옵션                                                           | { messageCallback }                                                     |

**options**

| 인자값          | 설명                                                       |
| --------------- | ---------------------------------------------------------- |
| messageCallback | 미리 정해진 `action`이 있고 별도 커스텀을 정의할 수 있음   |
| isFullScreen    | `true` - 가득차게, `false` - 비율 유지, (기본) - 자동 선택 |

**messageCallback**

| action            | payload                         | 설명                                                           |
| ----------------- | ------------------------------- | -------------------------------------------------------------- |
| `REQUEST_LOGIN`   | 없음                            | 로그인이 필요할 때<br />(로그인만 채팅 허용일 때, 채팅창 선택) |
| `ERROR`           | code(에러코드), msg(에러메시지) | 에러 발생시<br />에러코드는 [여기](./error-code)서 확인하세요. |
| `DOWNLOAD_COUPON` | coupon(쿠폰코드)                | 쿠폰 다운로드                                                  |

```js
var messageCallback = function(action, payload) {
  switch (action) {
    case "REQUEST_LOGIN": // 로그인이 필요할 때 호출
      alert("로그인이 필요합니다");
      break;
    case "ERROR": // 에러처리
      console.log(payload.code); // 에러코드
      console.log(payload.msg); // 에러메시지
      break;
    case "DOWNLOAD_COUPON": // 쿠본 다운로드
      alert(payload.coupon + "쿠폰 다운로드 성공!");
      break;
  }
};

var options = {
  messageCallback: messageCallback,
};

mplayer("init", access_key, campaign_key, user_authorization, options);
```

### run 함수

샵라이브 클라이언트를 시작합니다.

`mplayer("run", id)`

| 인자값 | 설명                         | 샘플           |
| ------ | ---------------------------- | -------------- |
| id     | 플레이어를 렌더링할 DOM의 ID | shoplivePlayer |

```js
mplayer("run", "{{ id }}");
```

### send 함수

샵라이브 클라이언트에 명령을 전송할 때 사용합니다.

`mplayer("send", action, payload)`

자세한 기능은 [데모페이지](../demo/controls)에서 확인하세요.

```js
mplayer("send", "hideControls");
```
