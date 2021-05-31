# 무신사용 서버 API

## 이벤트 결과 조회

방송에서 진행한 이벤트의 추첨 결과를 조회합니다.  
발급받은 secretKey로 sign한 JWT 인증 헤더가 필요합니다.

- GET https://api.shoplive.cloud/customer/v1/{accessKey}/event/{campaignKey}
- Authorization header

### Request

| Parameter | Type | Source | Description | Required | Note |
| --------- | ---- | ------ | ----------- | -------- | ---- |
| accessKey | string! | path variable | 발급받은 access key | O | |
| campaignKey | string! | path variable | 캠페인 key | O | |
| Authorization | string! | header | 인증 헤더 | O | |

### 인증 헤더 구성

- 웹 클라이언트가 방송에 로그인하기 위한 헤더 구성 방법과 거의 동일합니다.
- claims에 accessKey를 저장하고 secretKey로 sign합니다. 

```java
// JAVA
long expiration = System.currentTimeMillis() + 365 * 24 * 60 * 60 * 1000L; // an year

JwtBuilder builder = Jwts.builder()
    .signWith(SignatureAlgorithm.forName("HS256"), "{base64EncodedSecretKey}")
    .setExpiration(new Date(expiration))
    .setIssuedAt(new Date())
    .claim("accessKey", accessKey);

String authorization = builder.compact();
```

### Response

| Parameter | Type | Description | Note |
| --------- | ---- | ----------- | ---- |
| campaignId | long! | 캠페인 id |  |
| campaignKey | string! | 캠페인 key |  |
| title | string! | 방송 제목 | |
| eventResults | list\<[EventResult](#eventresult)> | 이벤트 항목별 당첨자 목록 | 한 방송에 여러 이벤트를 등록할 수 있으므로 list로 구성됩니다. |

#### EventResult

| Parameter | Type | Description | Note |
| --------- | ---- | ----------- | ---- |
| id | long! | 이벤트 리소스 id |  |
| imageUrl | string? | 이벤트 팝업 상단 이미지 URL |  |
| title | string? | 이벤트 팝업 상단 제목 텍스트 | |
| description | string? | 이벤트 팝업 상단 설명 텍스트 | |
| winners | list\<[EventWinners](#eventwinners)> | 이벤트 내 당첨자 목록 | 하나의 이벤트에서 여러번 추첨할 수 있으므로 list로 구성됩니다. |

#### EventWinners

| Parameter | Type | Description | Note |
| --------- | ---- | ----------- | ---- |
| createdAt | long! | 추첨 시간 | in millis |
| users | list\<[EventWinner](#eventwinner)> | 당첨자 목록 |  |

#### EventWinner

| Parameter | Type | Description | Note |
| --------- | ---- | ----------- | ---- |
| uid | long! | 샵라이브가 부여한 사용자의 고유 id | |
| userId | string? | 고객사가 세팅한 사용자의 unique id | |
| name | string! | 닉네임 | |

### Example (Normal)
```sh
curl "https://api.shoplive.cloud/customer/v1/a1AW6QRCXeoZ9MEWRdDQ/event/88719a1d56d7"
```

```json
{
   "campaignId":248,
   "campaignKey":"88719a1d56d7",
   "title":"Test_이벤트_2",
   "eventResults":[
      {
         "id":114,
         "imageUrl":"https://resource-dev.shoplive.cloud/images/25749ab5-9349-45fd-b7ba-6fe3935f8b51.png",
         "title":null,
         "description":null,
         "winners":[
            {
               "createdAt":1622191214000,
               "users":[
                  {
                     "uid":85018744547799191,
                     "userId":"userid-85018741797216921",
                     "name":"신내동에이셉"
                  },
                  {
                     "uid":85018745822867610,
                     "userId":"userid-85018741930386075",
                     "name":"혜잉ㅇ"
                  }
               ]
            },
            {
               "createdAt":1622286594000,
               "users":[
                  {
                     "uid":85018745688649881,
                     "userId":"userid-85018741797221005",
                     "name":"고냉지배추"
                  },
                  {
                     "uid":85018742333206674,
                     "userId":"userid-85018741729583768",
                     "name":"호록."
                  }
               ]
            }
         ]
      },
      {
         "id":115,
         "imageUrl":"https://resource-dev.shoplive.cloud/images/bd5a8857-e86f-430f-a680-e361ded54b4c.png",
         "title":null,
         "description":null,
         "winners":[
            
         ]
      },
      {
         "id":116,
         "imageUrl":"https://resource-dev.shoplive.cloud/images/a796ae47-7c99-48d3-b9b1-6cb8ff67513d.png",
         "title":null,
         "description":null,
         "winners":[
            {
               "createdAt":1622132924000,
               "users":[
                  {
                     "uid":85018743205621908,
                     "userId":"userid-85018741864850074",
                     "name":"레알슬로우"
                  },
                  {
                     "uid":85018743138513043,
                     "userId":"userid-85018741864858244",
                     "name":"빤쨘쮸"
                  },
                  {
                     "uid":85018742333206674,
                     "userId":"userid-85018741729583768",
                     "name":"호록."
                  }
               ]
            }
         ]
      }
   ]
}
```
### Example (Invalid campaign key)
```sh
curl https://api.shoplive.cloud/v1/9VfTeSqTyYjNtPXMmM9Y/campaign/adsf
```

```json
{
  "campaignKey":"asdf",
  "campaignStatus":"NOT_EXIST",
  "liveUrl":null,
  "scheduledAt":null,
  "startedAt":null,
  "endedAt":null
}
```
