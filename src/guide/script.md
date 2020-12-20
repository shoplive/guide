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

mplayer("init", "{{ access_key }}", "{{ campaign_key }}", "{{ user authorization }}");
mplayer("run", "{{ id }}");
```

**init 함수**

샵라이브 클라이언트를 초기화합니다.

`mplayer("init", access_key, campaign_key, user_authorization)`

| 인자값        | 설명                                                    | 샘플                 |
| ------------- | ------------------------------------------------------- | -------------------- |
| access_key    | 발급한 접근키                                           | uv9CGthPzlvsInZer123 |
| campaign_key  | 방송 캠페인 키<br />빈값인 경우 최근 생성한 캠페인 선택 | PzlvsInZ             |
| authorization | 사용자 인증 정보<br />게스트의 경우엔 빈값 입력         | 인증방식에 따라 다름<br />[인증](./authorization)페이지를 참고해주세요. |

**run 함수**

샵라이브 클라이언트를 시작합니다.

`mplayer("run", id)`

| 인자값 | 설명                         | 샘플           |
| ------ | ---------------------------- | -------------- |
| id     | 플레이어를 렌더링할 DOM의 ID | shoplivePlayer |
