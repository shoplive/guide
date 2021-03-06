# JWT

## Introduction

[jwt.io](https://jwt.io)

## Sample

### Java

```java
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtAuthorizationGeneratorSample {
    public static void main(String[] args) {
        /*
         * Encoding algorithm
         * Please refer to https://jwt.io/ or https://github.com/jwtk/jjwt for the details of algorithm.
         */
        String algorithm = "HS256";

        /*
         * Secret key encoded by base64
         */
        String base64EncodedSecretKey = "ckFXaWtRWENtSTA2QnpGVmxWNlBySWF4cUk1Q1pxbHU=";

        /*
         * Set 12 hours for expiration time
         */
        long expiration = System.currentTimeMillis() + 12 * (60 * 60 * 1000);
        // OR
        // long expiration = LocalDateTime.now().plus(12, ChronoUnit.HOURS).atZone(ZoneId.systemDefault()).toEpochSecond();

        /*
         * userID is an unique ID to identify user in the service and maximum length is 255 bytes
         */
        String userId = "sample_user_id";

        /*
         * Setting user name which will be shown in the chatting UI.
         * If user name contains restricted word, (*) will replace the restricted part of the user name.
         */
        String name = "my_nickname";

        JwtBuilder builder = Jwts.builder()
            .signWith(SignatureAlgorithm.forName(algorithm), base64EncodedSecretKey)
            .setExpiration(new Date(expiration))
            .setIssuedAt(new Date())
            .claim("userId", userId)
            .claim("name", name);

        String jwt = builder.compact();

        System.out.printf("jwt: " + jwt);
    }
}

```

```
Result

jwt: eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDg1ODE0ODAsImlhdCI6MTYwODUzODI4MCwidXNlcklkIjoic2FtcGxlX3VzZXJfaWQiLCJuYW1lIjoibXlfbmlja25hbWUifQ.vSSv2pyYVsQngwqytdVWuGxgq5pO7P-RAPM6mWXellA

```
