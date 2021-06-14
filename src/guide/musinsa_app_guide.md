# 무신사 앱 연동 가이드

- 앱과의 모든 이벤트는 MUSINSA APP <-> MUSINSA WEB <-> SHOPLIVE (script)의 경로로 주고 받습니다.
- 이 문서는 MUSINSA WEB과 SHOPLIVE SCRIPT와의 이벤트에 대해 기술합니다.

## 이벤트

## 1. SHOPLIVE → MUSINSA WEB
* 메시지 콜백 함수(messageCallback)를 등록하면 이벤트가 발생할 때 이 콜백 함수를 통해 전달합니다.

| 이벤트명 | 파라미터 | 이벤트 | 설명 |
| ----- | ---- | ---- | ---- |
| `SYSTEM_INIT` |  | 자바스크립트 로딩 완료 | 웹뷰 내의 자바스크립트 및 이벤트 콜백의 로딩이 완료되었음을 앱으로 알립니다.<br>이 이벤트를 수신 후 앱은 <a href="#video-initialized">VIDEO_INITIALIZED</a> 를 호출합니다. |
| `REQUEST_LOGIN` | | 로그인이 필요한 경우 | 채팅 등 로그인이 필요한 상황에서 호출됩니다. |
| `DOWNLOAD_COUPON` | <code>{type:<a href="#coupon-type">`TYPE`</a>, coupon:`쿠폰코드`}</code> | 쿠폰 혹은 배너를 클릭 | 팝업의 클릭 이벤트를 [쿠폰 다운로드](coupon-download)로 정의한 경우 호출됩니다. |
| `CLICK_PRODUCT` | <code>{url: `상품 URL`}</code> | 상품 팝업 목록에서 상품을 클릭 | 상품을 클릭할 경우 [화면의 컨트롤 요소들을 숨기면서 PIP 모드로 진입]()시키고 메인 화면에서 상품 상세 페이지로 이동하면 됩니다. |
| `CLOSE_PLAYER` | | 뒤로가기(닫기) 버튼을 클릭 | 방송에서 퇴장하고 화면을 닫습니다. |
| `REQUEST_PICTURE_IN_PICTURE` | | PIP 모드 진입 버튼을 클릭 | [화면의 컨트롤 요소들을 숨기면서 PIP 모드로 진입]()시킵니다. |
| `CLICK_SHARE_BTN` | | 공유하기 버튼을 클릭 | 공유하기 레이어를 노출합니다. |
| `START_SCROLL` | | 상품 팝업 목록 혹은 채팅 목록에서 터치 스크롤을 시작 | **안드로이드**에서 이벤트 제어를 위해 스크롤 상태를 전달.<br> 안드로이드에서 화면의 빈 영역을 스와이프 다운하여 PIP 모드로 진입하는 기능이 있을 경우 이 이벤트와의 충돌을 방지하기 위해 `START_SCROLL`을 받으면 안드로이드 자체의 이벤트 핸들러는 잠시 중단하도록 합니다. |
| `STOP_SCROLL` | | 상품 팝업 목록 혹은 채팅 목록에서 터치 스크롤을 종료 | 중지한 스크롤 다운 이벤트 핸들러를 재개합니다. |
| `VIDEO:setLiveStreamUrl` | <code>{"value": `영상 URL`}</code> | 영상 URL 전달 | 이 이벤트가 호출되면 앱에 payload.value를 영상 m3u8 URL로 전달하면 됩니다. |
| `VIDEO:setPosterUrl` | <code>{"value": `예고 이미지 URL`}</code> | 예고 이미지 URL 전달 | 이 이벤트가 호출되면 앱에 payload.value를 예고 이미지 URL로 전달하면 됩니다. |
| `VIDEO:setBackgroundUrl` | <code>{"value": `배경 이미지 URL`}</code> | 기본 배경 이미지 URL 전달 | 이 이벤트가 호출되면 앱에 payload.value를 배경 URL로 전달하면 됩니다. |
| `VIDEO:setVideoMute` | <code>{"value": `bool`}</code> | 소리 끄기/켜기 여부 전달 | 이 이벤트가 호출되면 앱에 payload.value(bool)를 전달하여 소리를 끄거나 켜도록 합니다. |
| `VIDEO:reloadVideo` |  | 예고 이미지 URL 전달 | 이 이벤트가 호출되면 앱이 기존 영상의 버퍼를 모두 버리고 가지고 있는 URL로 다시 재생을 시도하도록 합니다.<br>resume과는 다른 기능이며, 영상의 gap이 매우 커졌거나 기존 플레이어 인스턴스에 문제가 생겼을 경우 깨끗하게 갱신하여 영상을 다시 플레이할 수 있도록 하기 위함입니다. |
| `VIDEO:playVideo` | | 영상 재생 시작 | `리플레이용`<br>이 이벤트가 호출되면 앱에 영상을 play 혹은 resume 하도록 전달합니다. |
| `VIDEO:pauseVideo` | | 영상 재생 일시정지 | `리플레이용`<br>이 이벤트가 호출되면 앱에 영상을 pause 하도록 전달합니다. |
| `VIDEO:setVideoCurrentTime` | <code>{"value": `float`}</code> | 영상의 특정 위치로 이동 | 영상의 특정 위치로 이동하도록 앱에 전달합니다. payload.value는 float 타입의 초단위 값. |

#### <a name="coupon-type">COUPON TYPE</a>
| 타입 | 설명 | 
| --- | --- |
| COUPON | 쿠폰 |
| BANNER | 배너 |
| NOTICE | 공지 |

### 콜백 예시
```javascript
var messageCallback = {
  SYSTEM_INIT: function() {
    console.log("SYSTEM_INIT called");

    // 앱에서 video 초기화를 완료하면 VIDEO_INITIALIZED 이벤트를 전달합니다.
    // window.__receiveAppEvent("VIDEO_INITIALIZED");
    // OR
    mplayer("app", "VIDEO_INITIALIZED");
  },
  REQUEST_LOGIN: function () {
    alert("로그인이 필요합니다");
  },
  DOWNLOAD_COUPON: function (payload) {
    var type = payload.type;
    var coupon = payload.coupon;

    alert(coupon + "쿠폰을 다운로드하였습니다.");

    if (type === "BANNER") {
      mplayer("send", "removeBanner");
    } else if (type === "COUPON") {
      mplayer("send", "removeCoupon");
    } else if (type === "NOTICE") {
      mplayer("send", "removeNotice");
    }
  },
  CLICK_PRODUCT: function (payload) {
    if (typeof window.webkit !== "undefined") {
      // iOS
      var message = {
        command: "reduceLiveCommerce",
        name: null,
        parameters: {
          isHorizontal: false,
          url: payload.url,
        },
      };
      window.webkit.messageHandlers.MusinsaAppInterface.postMessage(
        message
      );
      mplayer("send", "hideControls");
    } else if (typeof window.MusinsaAppInterface !== "undefined") {
      // android
      window.MusinsaAppInterface.reduceLiveCommerce(false, payload.url);
      mplayer("send", "hideControls");
    } else {
      location.href = payload.url;
    }
  },
  CLOSE_PLAYER: function () {
    history.back();
  },
  REQUEST_PICTURE_IN_PICTURE: function () {
    if (typeof window.webkit !== "undefined") {
      // iOS
      var message = {
        command: "reduceLiveCommerce",
        name: null,
        parameters: {
          isHorizontal: false,
          url: "",
        },
      };
      window.webkit.messageHandlers.MusinsaAppInterface.postMessage(
        message
      );
      mplayer("send", "hideControls");
    } else if (typeof window.MusinsaAppInterface !== "undefined") {
      // android
      window.MusinsaAppInterface.reduceLiveCommerce(false, "");
      mplayer("send", "hideControls");
    } else {
      history.back();
    }
  },
  "VIDEO:setLiveStreamUrl": function(payload) {
    // 이 이벤트가 호출되면 앱에 payload.value를 영상 m3u8 URL로 전달하면 됩니다.
    console.log("VIDEO:setLiveStreamUrl", payload.value);
  },
  "VIDEO:setPosterUrl": function(payload) {
    // 이 이벤트가 호출되면 앱에 payload.value를 예고 이미지 URL로 전달하면 됩니다.
    console.log("VIDEO:setPosterUrl", payload.value);
  },
  "VIDEO:setBackgroundUrl": function(payload) {
    // 이 이벤트가 호출되면 앱에 payload.value를 배경 URL로 전달하면 됩니다.
    console.log("VIDEO:setBackgroundUrl", payload.value);
  },
  "VIDEO:setVideoMute": function(payload) {
    // 이 이벤트가 호출되면 앱에 payload.value(bool)를 전달하여 소리를 끄거나 켜도록 합니다.
    console.log("VIDEO:setVideoMute", payload.value);
  },
  "VIDEO:reloadVideo": function() {
    // 이 이벤트가 호출되면 앱이 기존 영상의 버퍼를 모두 버리고 가지고 있는 URL로 다시 재생을 시도하도록 합니다.
    // resume과는 다른 기능이며, 영상의 gap이 매우 커졌거나 기존 플레이어 인스턴스에 문제가 생겼을 경우 깨끗하게 갱신하여 영상을 다시 플레이할 수 있도록 하기 위함입니다.
    console.log("VIDEO:reloadVideo");
  },
  "VIDEO:playVideo": function() {
    // 리플레이용
    // 이 이벤트가 호출되면 앱에 영상을 play 혹은 resume 하도록 전달합니다.
    console.log("VIDEO:playVideo");
  },
  "VIDEO:pauseVideo": function() {
    // 리플레이용
    // 이 이벤트가 호출되면 앱에 영상을 pause 하도록 전달합니다.
    console.log("VIDEO:pauseVideo");
  },
  "VIDEO:setVideoCurrentTime": function(payload) {
    // 리플레이용
    // 영상의 특정 위치로 이동하도록 앱에 전달합니다. payload.value는 float 타입의 초단위 값.
    console.log("VIDEO:setVideoCurrentTime", payload.value);
  },
};
```

## 2. MUSINSA WEB → SHOPLIVE

| 이벤트명 | 파라미터 | 이벤트 | 설명 |
| ----- | ---- | ---- | ---- |
| <a name="video-initialized">`VIDEO_INITIALIZED`</a> | | 플레이어 준비완료 | 앱이 `SYSTEM_INIT`을 수신한 후 플레이어가 준비되면 SHOPLIVE로 이 이벤트를 전달합니다. |
| `SET_IS_PLAYING_VIDEO` | `bool` | 재생 상태가 변경될 경우 호출 | 재상 상태가 변경(play, pause)될 때마다 호출합니다.<br>pause 상태가 오래 지속되면 영상을 리로딩하도록 하기 위한 재생 버튼이 나타납니다.<br>이 정책은 변경될 수 있습니다. |
| `RELOAD_BTN` | `bool` | 영상 새로고침 버튼을 표시하거나 숨김 | 명시적으로 영상의 새로고침 하기 위한 버튼을 표시하거나 숨깁니다. |
| `SHOW_GOODS_UI` | | 채팅창을 가리고 상품 카드뷰를 노출하고자 할 때 호출 | 채팅 입력 중 화면의 빈 곳을 클릭하는 등의 액션으로 초기 화면으로 돌아가고자 할 경우 호출합니다. |
| `REMOVE_COUPON` | | 우측 상단 쿠폰을 숨깁니다 | 쿠폰 발급이 완료되어 화면에서 숨기고자 할 때 호출합니다.<br>팝업의 닫기 방식이 **API 호출로 닫기**일 때 유효합니다. |
| `REMOVE_BANNER` | | 중간 배너를 숨깁니다 | 배너를 클릭한 후 화면에서 숨기고자 할 때 호출합니다.<br>팝업의 닫기 방식이 **API 호출로 닫기**일 때 유효합니다. |
| `REMOVE_NOTICE` | | 화면 하단 공지를 숨깁니다 | 공지를 클릭한 후 화면에서 숨기고자 할 때 호출합니다.<br>팝업의 닫기 방식이 **API 호출로 닫기**일 때 유효합니다. |
| `ON_PIP_MODE_CHANGED` | `bool` | PIP 모드가 변경될 때 호출 | `true`인 경우 화면의 컨트롤 요소들을 모두 숨깁니다. |
| `ON_VIDEO_DURATION_CHANGED` | `float` | 리플레이 모드에서 영상의 전체 길이가 변경될 때 호출 | Seeker에서 전체 길이 계산을 위해 필요합니다. |
| `ON_VIDEO_TIME_UPDATED` | `float` | 리플레이 모드에서 현재 재생중인 위치 정보를 수시로 전달 | Seeker에서 현재 위치 표시를 위해 필요합니다. |

### 호출 예시 
```javascript
// 앱 초기화 완료
mplayer("app", "VIDEO_INITIALIZED");

// 화면에서 쿠폰 숨김
mplayer("app", "REMOVE_COUPON");

// PIP 모드 진입
mplayer("app", "ON_PIP_MODE_CHANGED", true);
```

[comment]: <> (<!--)

[comment]: <> (<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>)

[comment]: <> (<div class="mermaid">)

[comment]: <> (    graph TD; A-->B; A-->C; B-->D; C-->D;)

[comment]: <> (</div>)

[comment]: <> ( <pre><code class="language-mermaid">graph LR)

[comment]: <> (A--&gt;B)

[comment]: <> (</code></pre>)

[comment]: <> (<div class="mermaid">graph LR)

[comment]: <> (A--&gt;B)

[comment]: <> (</div>)

[comment]: <> (<script>)

[comment]: <> (var config = {)

[comment]: <> (    startOnLoad:true,)

[comment]: <> (    theme: 'forest',)

[comment]: <> (    flowchart:{)

[comment]: <> (            useMaxWidth:false,)

[comment]: <> (            htmlLabels:true)

[comment]: <> (        })

[comment]: <> (};)

[comment]: <> (mermaid.initialize&#40;config&#41;;)

[comment]: <> (window.mermaid.init&#40;undefined, document.querySelectorAll&#40;'.language-mermaid'&#41;&#41;;)

[comment]: <> (</script>)

[comment]: <> (-->)
