# 외부 연동

```js
mplayer("send", action, payload);

// 컨트롤 감추기
mplayer("send", "hideControls");
// 컨트롤 보이기
mplayer("send", "showControls");
```

| 기능          | action       | payload |
| ------------- | ------------ | ------- |
| 컨트롤 감추기 | hideControls | 없음    |
| 컨트롤 보이기 | showControls | 없음    |

---

<ShopliveControlDemo />
