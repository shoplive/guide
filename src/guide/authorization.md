# 인증

인증은 일반 인증과 JWT 인증 방식이 있습니다.

## 일반 인증

스크립트 호출시 로그인한 사용자의 아이디와 이름을 입력하는 방식입니다. 사용자 인증을 이용하여 서버에서 JWT를 만들 수 없거나 간편한 방식을 원할 경우 이용합니다.

```js
mplayer("init", accessKey, campaignKey, { userId: userId, userName: userName });
mplayer("run", "shoplivePlayer");

// example
mplayer("init", "uv9CGthPzlvsInZerCw0", "bf129612ef4c", {
  userId: "shoplive",
  userName: "샵라이브",
});
mplayer("run", "shoplivePlayer");
```

## JWT 인증

비밀키를 이용하여 서버에서 JWT를 만들어 인증하는 방식입니다. 대부분의 상황에서 권장하는 방식입니다.

```js
mplayer("init", accessKey, campaignKey, jwt);
mplayer("run", "shoplivePlayer");

// example
mplayer(
  "init",
  "uv9CGthPzlvsInZerCw0",
  "bf129612ef4c",
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJzaG9wbGl2ZSIsIm5hbWUiOiLsg7XrnbzsnbTruIwiLCJpYXQiOjE2MDg1NTE2MTksImV4cCI6MTYwODU5NDgxNX0.-VLYorRmIyDAHkOxMt7GZQeArNhTzBqAGvGEs3AICFY"
);
mplayer("run", "shoplivePlayer");
```

JWT에 대한 내용은 [JWT](./jwt)페이지를 참고하세요.

### 인증 토큰 생성 가이드

JWT payload는 다음과 같습니다.

| 데이터     | 설명                               | 필수여부       | 샘플                                                                     |
| ---------- | ---------------------------------- | -------------- | ------------------------------------------------------------------------ |
| expiration | 만료시간 (timestamp)               | 필수(JWT 일때) | 1516239022                                                               |
| userId     | 사용자 아이디                      | 필수           | shoplive                                                                 |
| name       | 사용자 이름<br />(채팅창에서 사용) | 필수           | 샵라이브                                                                 |
| gender     | 사용자 성별                        | 필수아님       | `빈값`(미지정), `m`(남), `f`(여)                                         |
| age        | 사용자 나이                        | 필수아님       | `빈값`(미지정), `0`, `10`, `20`, `30`, .. 또는 `23`, `24`, `25` 가능<br>0세도 0~4세 통계에 포함됩니다. |

### 인증 토큰 생성기

<AuthorizationGenerator />

### 인증 토큰 검증기

<AuthorizationValidator />
