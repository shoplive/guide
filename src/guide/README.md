## 소개

* 샵라이브는 간단한 자바스크립트 삽입으로 웹페이지에 라이브 방송을 즉시 구현할 수 있습니다.
* 샵라이브가 제공하는 안드로이드, iOS용 SDK를 이용하여 앱에 라이브 방송을 쉽게 통합할 수 있으며  
  웹보다 개선된 인터렉션과 PIP 등 다양한 기능을 추가로 사용할 수 있습니다.
* 간단한 이름 기반의 계정 연동부터 강력한 보안을 기반으로 한 JWS 연동까지 다양한 방식의 인증을 지원합니다.
* 빠르고 지속적인 업그레이드를 제공합니다.

##  웹 기반 연동

플레이어가 삽입될 영역에 `id`를 지정하고 몇가지의 옵션과 함께 스크립트를 호출하면 연동이 마무리됩니다.  

```html
<div id="root"></div>
```
```javascript
<script>
(function (s,h,o,p,l,i,v,e) {s["ShoplivePlayer"]=l;(s[l]=s[l]||function(){
(s[l].q=s[l].q||[]).push(arguments);}),(i=h.createElement(o)),
(v=h.getElementsByTagName(o)[0]);i.async=1;i.src=p;v.parentNode.insertBefore(i,v);
})(window,document,"script","https://static.shoplive.cloud/live.js","mplayer");

mplayer("init", "${ak}", "${ck}", "${authorization}", options);
mplayer("run", "root");
</script>
```

![연동 흐름](./imgs/index/intro.png)

자세한 사항은 [스크립트 연동 가이드](./script)를 참고하세요.

## 앱 SDK 연동

안드로이드 및 iOS를 위한 SDK가 준비되어 있습니다.  
의존성을 추가하고 몇 줄의 코드만 추가하세요.  
즉시 앱과 통합된 라이브 방송 서비스를 이용할 수 있습니다. 

`iOS` SDK는 <a href="https://github.com/shoplive/ios-sdk">여기</a>를 참조하세요.
  
## 사용자 정보 연동

스크립트 초기화 시 사용자 아이디, 사용자 이름을 전달합니다.  
별도의 인증 토큰이 필요하지 않은 일반 인증과 JWT를 이용한 강한 인증 방식을 사용할 수 있습니다.

| 인증방식  | 연동 데이터                               | 특징                                         |
| ------ | -------------------------------------- | ------------------------------------------- |
| 일반 인증 | { user_id: 아이디, user_name: 이름, ... } | 간편한 연동방식                              |
| JWT 인증  | xxxx.yyyy.zzzz (JSON Web Token)           | 발급받은 비밀키로 sign한 JWT를 생성하여 전달하는 방식 |

인증과 관련된 내용은 [인증](./authorization)을 참고하세요.
