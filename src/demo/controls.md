# 외부 연동

```js
mplayer("send", action, payload);

// 컨트롤 감추기
mplayer("send", "hideControls");
// 컨트롤 보이기
mplayer("send", "showControls");

// 쿠폰 다운로드 후 수동으로 추적 이벤트 전달할 때
var messageCallback = {
  DOWNLOAD_COUPON: function(payload, parent) {
    var type = payload.type;
    var coupon = payload.coupon;

    alert(payload.coupon + " 쿠폰을 다운로드했습니다.");

    if (type === "BANNER") {
      mplayer("send", "removeBanner");
    } else if (type === "COUPON") {
      mplayer("send", "removeCoupon");
    } else if (type === "NOTICE") {
      mplayer("send", "removeNotice");
    }
  },
};
```

| action       | 기능          | payload |
| ------------ | ------------ | ------- |
| hideControls | 컨트롤 감추기 | 없음    |
| showControls | 컨트롤 보이기 | 없음    |
| mute         | 음소거      |  없음    |
| unmute       | 음소거 해제  | 없음    |
| removeBanner | 배너닫기    | 없음    |
| removeCoupon | 쿠폰닫기    | 없음    |
| removeNotice | 공지닫기    | 없음    |


**<a name="app_event">앱 이벤트</a>** 

| action       | 앱 이벤트       | payload | note |
| ------------- | ------------ | ------- | ---- |
| videoInitialized | 비디오 초기화 완료 | 없음 | 예) mplayer("send", "videoInitialized"); |
| showGoodsUi | 키보드가 내려갈 때 채팅 입력창을 없애고 상품 카드 뷰를 노출 | 없음 | 예) mplayer("send", "showGoodsUi"); |
| setIsPlayingVideo | 영상의 재생 상태가 변할 때 호출. 재생이 시작되면 true, 멈추면 false | {"value": `true`} | 예) mplayer("send", "setIsPlayingVideo", {"value": true}); |
| onVideoTimeUpdated | (리플레이 m3u8) 영상 재생 중인 시간의 상대적인 위치 정보를 주기적으로 호출. | {"value": 35.5} | 웹에서 250ms마다 호출중. 앱에서는 1초 혹은 그 이하 주기로 호출해 주세요.<br>예) mplayer("send", "onVideoTimeUpdated", {"value": 35.5}); |
| onVideoDurationChanged | (리플레이 m3u8) 영상의 길이 정보가 획득될 때 호출 | {"value": 3601.3} | |
---

<ShopliveControlDemo />
