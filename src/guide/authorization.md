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
  "eyJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3NLZXkiOiJ1djlDR3RoUHpsdnNJblplckN3MCIsInVzZXJJZCI6InNob3BsaXZlIiwibmFtZSI6IuyDteudvOydtOu4jCIsImlhdCI6MTYwODQ4NDMyNywiZXhwIjoxNjA4NTI3NDI3fQ.ia0fG5E45Ds1jK9P--km6L-gaw4IBZ--Sh5_c06ZpCs"
);
mplayer("run", "shoplivePlayer");
```

JWT에 대한 내용은 [JWT](./jwt)페이지를 참고하세요.

### 인증 토큰 생성 가이드

JWT payload는 다음과 같습니다.

| 데이터     | 설명                          | 샘플                 |
| ---------- | ----------------------------- | -------------------- |
| accessKey  | 발급한 접근키                 | uv9CGthPzlvsInZerCw0 |
| expiration | 만료시간 (timestamp)          | 1516239022           |
| userId     | 사용자 아이디                 | shoplive             |
| name       | 사용자 이름 (채팅창에서 사용) | 샵라이브             |

### 인증 토큰 생성기

<AuthorizationGenerator />

### 인증 토큰 검증기

<AuthorizationValidator />
