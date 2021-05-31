# JWT

## 소개

[jwt.io](https://jwt.io)

## 샘플

### Java

```java
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtAuthorizationGeneratorSample {
    public static void main(String[] args) {
        /*
         * 암호화 알고리즘
         * 지원하는 알고리즘은 https://jwt.io/ 혹은 https://github.com/jwtk/jjwt 사이트를 참조하세요
         */
        String algorithm = "HS256";

        /*
         * 발급 받은 base64 인코딩된 secret key
         */
        String base64EncodedSecretKey = "ckFXaWtRWENtSTA2QnpGVmxWNlBySWF4cUk1Q1pxbHU=";

        /*
         * 유효 시간을 12시간으로 설정
         */
        long expiration = System.currentTimeMillis() + 12 * (60 * 60 * 1000);
        // OR
        // long expiration = LocalDateTime.now().plus(12, ChronoUnit.HOURS).atZone(ZoneId.systemDefault()).toEpochSecond();

        /*
         * 사용자 아이디
         * 이 아이디를 기준으로 서비스 사용자를 구분하며 최대 255바이트까지 설정할 수 있습니다
         */
        String userId = "sample_user_id";

        /*
         * 채팅에 노출할 사용자명
         * 금칙어에 해당하는 단어는 별표(*)로 대체되어 표시됩니다
         */
        String name = "my_nickname";

        /*
         * 접속자 통계에서 참조할 성별 정보입니다.
         * 남성(m), 여성(f), 기타(n, null, etc.)
         */
        String gender = "f";

        /*
         * 접속자 통계에서 참조할 연령 정보입니다.
         * 임의의 숫자로 입력할 수 있으며 통계에는 5세 단위로 그룹화하여 표시합니다.
         */
        Integer age = 15;

        JwtBuilder builder = Jwts.builder()
            .signWith(SignatureAlgorithm.forName(algorithm), base64EncodedSecretKey)
            .setExpiration(new Date(expiration))
            .setIssuedAt(new Date())
            .claim("userId", userId)
            .claim("name", name)
            .claim("gender", gender)
            .claim("age", age);

        String jwt = builder.compact();

        System.out.printf("jwt: " + jwt);
    }
}

```

```
결과

jwt: eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTA1NzA1MDgsImlhdCI6MTYxMDUyNzMwOCwidXNlcklkIjoic2FtcGxlX3VzZXJfaWQiLCJuYW1lIjoibXlfbmlja25hbWUiLCJnZW5kZXIiOiJmIiwiYWdlIjoxNX0.0Z5YUo99149fIFyfqwxa-7SLyqC0RHR1T8P7jZLhpG8
```
