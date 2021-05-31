# Server API

## Retrieve campaign's meta information

- GET https://api.shoplive.cloud/v1/{accessKey}/campaign/{campaignKey}

### Request

| Parameter | Type | Source | Description | Required | Note |
| --------- | ---- | ------ | ----------- | -------- | ---- |
| accessKey | string! | path variable | Issued access key | O | |
| campaignKey | string? | path variable | If campaignKey is not found, most recent scheduled or onair campaign meta will be retrieved. |
| resolutionLevel | int32? | query parameter | Resolution level | X | `1` 320p (Default)<br>`2` 480p<br>`3` 720p<br>`4` 1080p<br>Resolution can be changed for better performance. |

### Response 

| Parameter | Type | Description | Note |
| --------- | ---- | ----------- | ---- |
| campaignKey | string! | Campaign key |  |
| campaignStatus | string! | Campaign status | `NOT_EXIST` Not exist campaign<br>`READY` Ready<br>`ONAIR` On-air<br>`CLOSING` Terminating<br>`CLOSED` Terminated |
| title | string! | Campaign title | |
| liveUrl | string? | Live stream URL | |
| posterUrl | string? | Notice image URL| |
| poster2Url | string? | Image URL to show after close |
| scheduledAt | long? | Live scheduled date | timestamp in millis |
| scheduledEndAt | long? | Live scheduled end date | timestamp in millis |
| startedAt | long? | Live started date | |
| closingAt | long? | Approaching close date when set `Close after n minutes` on main console | timestamp in millis |
| endedAt | long? | Live closed date | |


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
  "startedAt":1612315164000,
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
