# Authorization

SHOPLIVE supports 2 authorization methods - ID/Password auth and JWT auth.

## ID/Password Authentication

This method shows how you use userID and userName of logged-in user when you call the script. Use this method when you are not able to use JWT or just want simple authorization.

```js
mplayer("init", accessKey, campaignKey, { userId: userId, userName: userName });
mplayer("run", "shoplivePlayer");

// example
mplayer("init", "uv9CGthPzlvsInZerCw0", "bf129612ef4c", {
  userId: "SHOPLIVEID",
  userName: "SHOPLIVEUSER",
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
| age        | 사용자 나이                        | 필수아님       | `빈값` 또는 `0`(미지정), `10`, `20`, `30`, .. 또는 `23`, `24`, `25` 가능 |

### 인증 토큰 생성기

<AuthorizationGenerator />

### 인증 토큰 검증기

<AuthorizationValidator />
