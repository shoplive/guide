# 서버 API

## 캠페인 정보 조회

캠페인의 상태, live stream URL 등의 요약 정보를 조회합니다.

- GET https://api.shoplive.cloud/v1/{accessKey}/campaign/{campaignKey}

### Request

| Parameter | Type | Source | Description | Required | Note |
| --------- | ---- | ------ | ----------- | -------- | ---- |
| accessKey | string! | path variable | 발급받은 access key | O | |
| campaignKey | string? | path variable | 캠페인 key | X | 값이 없을 경우 가장 가까운 날짜의 진행중 혹은 예정된 캠페인에 대한 정보를 조회합니다. |
| resolutionLevel | int32? | query parameter | 해상도 레벨 | X | `1` 320p (기본값)<br>`2` 480p<br>`3` 720p<br>`4` 1080p<br>레벨에 따른 실제 해상도는 변경될 수 있습니다. |

### Response 

| Parameter | Type | Description | Note |
| --------- | ---- | ----------- | ---- |
| campaignKey | string! | 캠페인 key |  |
| campaignStatus | string! | 캠페인 상태 | `NOT_EXIST` 존재하지 않는 캠페인<br>`READY` 준비중 <br>`ONAIR` 방송중<br>`CLOSING` 종료중<br>`CLOSED` 종료 |
| title | string! | 방송 제목 | |
| liveUrl | string? | 영상 재생 URL | |
| posterUrl | string? | 방송 예고 이미지 URL | 방송 전에 노출할 방송 예고 이미지 |
| poster2Url | string? | 방송 종료 후 이미지 URL | 방송 종료 후 안내 이미지 |
| scheduledAt | long? | 방송 예정 시간 | timestamp in millis |
| scheduledEndAt | long? | 방송 종료 예정 시간 | timestamp in millis |
| startedAt | long? | 방송 시작 시간 | |
| closingAt | long? | `n분 후 종료`를 설정했을 때 실제 종료 예정 시간 | timestamp in millis |
| endedAt | long? | 방송 종료 시간 | |


### Example (Normal)
```sh
curl https://api.shoplive.cloud/v1/9VfTeSqTyYjNtPXMmM9Y/campaign/9Xc14b7kf63e?resolutionLevel=1
```

```json
{
  "campaignKey":"9Xc14b7kf63e",
  "campaignStatus":"ONAIR",
  "liveUrl":"https://path/to/sample_live_url.m3u8",
  "scheduledAt":1614164446000,
  "scheduledEndAt":1614165446000,
  "startedAt":1612315164000,
  "closingAt":null,
  "endedAt":null
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
