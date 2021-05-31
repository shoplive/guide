# Authorization

SHOPLIVE supports two authorization methods - Simple Auth(ID/Password) and JWT auth.

## ID/Password Auth

This method uses simply userID and userName when initializing SHOPLIVE player. Use this method if you can't generate JWT token in the server-side or if you just want simple authorization.

```js
mplayer("init", accessKey, campaignKey, { userId: userId, userName: userName });
mplayer("run", "shoplivePlayer");

// example
mplayer("init", "uv9CGthPzlvsInZerCw0", "bf129612ef4c", {
  userId: "user_id",
  userName: "user_name",
});
mplayer("run", "shoplivePlayer");
```

## JWT Auth

This method uses JWT token which is generated in the server-side using secret key. This method is recommended in most cases.  

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

Please refer to [JWT](./jwt) for more details.

### How to generate an JWT Auth Token

Please see the details of JWT payload below.

| Data     | Description                               | Compulsory       | Sample                                                                     |
| ---------- | ---------------------------------- | -------------- | ------------------------------------------------------------------------ |
| expiration | Expiration timestamp              | Compulsory (in case of JWT) | 1516239022                                                               |
| userId     | User ID                      | Compulsory           | user_id                                                                 |
| name       | User Name <br />(will be shown in the chatting UI) | Compulsory           | user_name                                                                 |
| gender     | Gender of User                        | Optional       | ``(when not assigned), `m`(male), `f`(female)                                         |
| age        | Age of User                        | Optional       | `` or `0`(when not assigned), `10`, `20`, `30` or exact age like `23`, `24`, `25` |

### Auth Token Generator

<AuthorizationGenerator />

### Auth Token validator

<AuthorizationValidator />
