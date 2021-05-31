# 스크립트 연동 가이드

![연동 흐름](./imgs/index/intro.png)

샵라이브 플레이어가 삽입될 레이어에 `id`를 지정하고 스크립트를 호출합니다.

## 스크립트

플레이어를 렌더링 할 DOM(div, ...)을 만들고 id를 지정한 다음,

```html
<div id="{{ id }}"></div>
```

다음과 같은 스크립트를 **`</body>` 태그 바로 위**에 추가합니다.

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

| 파라미터        | 타입 | 설명                                                                | 필수 | 샘플                                                                    |
| ------------ | --- | ---------------------------------------------------------------- | --- | ---------------------------------------------------------------------- |
| access_key    | string | 가입 시 발급받은 계정의 엑세스키                                          | O | uv9CGt1PzXvsInQerCw                                                    |
| campaign_key  | string | 방송(캠페인)의 고유 아이디<br />빈 값인 경우 가장 가까운 날짜의 캠페인이 지정됩니다. |  |PzlvsInZ                                                                |
| authorization | json or string | 사용자 인증 정보.<br />게스트의 경우엔 빈값을 입력합니다.<br/>일반 인증의 경우에는 json object가,<br/>JWS 인증의 경우에는 JWT 문자열이 들어갑니다. |  | 인증방식에 따라 다름<br />[인증](./authorization)페이지를 참고해주세요. |
| options       | [options](#options) | 추가 옵션                                                           |  |                                                                         |

#### options

| 파라미터                                   | 설명                                                                           | 기본값    |
| ---------------------------------------- | ------------------------------------------------------------------------------ | --------- |
| messageCallback                          | 미리 정해진 `action`이 있고 별도로 커스템 액션을 정의할 수 있습니다.                        | -         |
| ui                                       | 화면 노출 요소                                                                 | -         |
| isFullScreen                             | `true` - 가로 세로 가득차게(위/아래 크롭)<br>`false` - 비율 유지               | 자동 선택 |
| isFullHeight                             | `true` - 비율 유지한 채로 가로 또는 세로 가득차게<br>`false` - 비율 유지       | 자동 선택 |
| hasNoAddressBar                          | `true` - 주소입력창이 없는 경우(앱)<br>`false` - 일반 브라우저                 | `false`   |
| useExtendedLayout                        | `true` - 상단 상태바까지 컨텐츠가 꽉찬 경우<br>`false` - 일반적인 경우         | `false`   |
| hideControls                             | `true` - 영상 외 컨트롤 감추기<br>`false` - 컨트롤 보이기                      | `false`   |
| unmute <span style="color:red">\*</span> | `true` - 로딩 시 가능하면 소리 켜기<br>`false` - 브라우저 기본 설정(뮤트 상태) | `true`    |

<span style="color:red">*</span> 안드로이드 크롬의 제한된 환경에서 자동 재생 시 소리켜기를 시도합니다. [참고](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)

#### messageCallback

| action                       | payload        | 설명 |
| ---------------------------- | -------------- | --- |
| `REQUEST_LOGIN`              | 없음            | 로그인이 필요할 때<br />(로그인만 채팅 허용일 때, 채팅창 선택) |
| `ERROR`                      | code (int32)<br>msg (string) | 에러 발생시 에러코드(code)와 에러메시지(string)를 전달합니다.<br>에러코드는 [여기](./error-code)서 확인하세요. |
| `DOWNLOAD_COUPON`            | coupon (string)<br>type(string) | 팝업(배너, 쿠폰, 공지)을 클릭할 때 타입과 함께 설정해놓은 값을 전달합니다.<br>type (발생 타입) - `BANNER`, `COUPON`, `NOTICE`  |
| `CLICK_PRODUCT`              | url (string)   | 상품 상세 페이지 이동을 위한 URL |
| `CLICK_SHARE_BTN`            | 없음            | 공유버튼 클릭 |
| `REQUEST_PICTURE_IN_PICTURE` | 없음            | PIP 모드 요청 |
| `CLOSE_PLAYER`               | 없음            | 플레이어 닫기(뒤로가기) |
| `VIDEO:setVideoMute`         | value (bool)   | `true` 소리 켜기<br>`false` 소리 끄기 |
| `VIDEO:setPosterUrl`         | value (string) | 방송 예고 이미지 URL |
| `VIDEO:setBackgroundUrl`     | value (string) | 기본 배경 이미지 URL |
| `VIDEO:setLiveStreamUrl`     | value (string) | hls(m3u8) 영상의 URL |
| `VIDEO:playVideo`            | 없음            | 현재 설정되어 있는 liveStreamUrl을 재생 |
| `VIDEO:pauseVideo`           | 없음            | 영상 중지 |
| `VIDEO:setVideoCurrentTime`  | value (float)  | (리플레이 재생 시) 영상의 특정 위치로 이동. value는 초단위의 float.<br>예) 영상이 총 3600초라고 할 때 35.5초 구간으로 이동. |
| `VIDEO:reloadVideo`          | 없음            | 영상 URL을 다시 세팅하는 방식으로 완전 리로딩 |


**ui**

| UI(key)         | 설명                    | 기본값                         | 클릭 이벤트                |
| --------------- | ----------------------- | ------------------------------ | -------------------------- |
| `viewerCount`   | 시청자 수               | 노출                           | 없음                       |
| `likeCount`     | 좋아요 수               | 노출                           | 없음                       |
| `optionButton`  | 옵션 버튼               | 미노출                         | CLICK_OPTION_BTN           |
| `shareButton`   | 공유 버튼               | 미노출                         | CLICK_SHARE_BTN            |
| `pipButton`     | PIP 버튼                | 미노출                         | REQUEST_PICTURE_IN_PICTURE |
| `backButton`    | 뒤로가기 버튼           | 미노출                         | CLOSE_PLAYER               |
| `liveIndicator` | 로고 옆 라이브 표시     | 미노출                         | 없음                       |
| `chatUI`        | 채팅영역 UI 표시        | ["chat", "adminMsg", "notice"] | 없음                       |
| `chatLine`      | 일반 채팅 메시지 표시수 | 8줄                            | 없음                       |

```js
var messageCallback = {
  REQUEST_LOGIN: function () {
    // 로그인이 필요할 때 호출
    alert("로그인이 필요합니다");
  },
  ERROR: function (payload) {
    // 에러처리
    console.log(payload.code); // 에러코드
    console.log(payload.msg); // 에러메시지
  },
  DOWNLOAD_COUPON: function (payload) {
    // 쿠폰 다운로드
    alert(payload.coupon + "쿠폰 다운로드 성공!");
  },
};

var options = {
  messageCallback: messageCallback,
  ui: {
    viewerCount: true,
    likeCount: true,
    shareButton: true,
    pipButton: true,
    backButton: true,
    optionButton: true,
    liveIndicator: false,
  },
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
