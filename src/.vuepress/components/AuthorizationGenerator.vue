<template>
  <div class="authorization-generator">
    <form
      @submit="checkForm"
      class="sample-form"
    >
      <div>
        <label for="accessKey">accessKey</label>
        <input
          id="accessKey"
          v-model="accessKey"
          type="text"
          name="accessKey"
        />
        <div role="info">발급받은 accessKey를 입력</div>
      </div>
      <div>
        <label for="secretKey">secretKey</label>
        <input
          id="secretKey"
          v-model="secretKey"
          type="password"
          name="secretKey"
        />
        <div role="info">발급받은 secretKey(base64)를 입력</div>
      </div>
      <div>
        <label for="userId">userId</label>
        <input
          id="userId"
          v-model="userId"
          type="text"
          name="userId"
        />
        <div role="info">로그인 사용자 ID 입력</div>
      </div>
      <div>
        <label for="name">name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
        />
        <div role="info">로그인 사용자 이름 입력</div>
      </div>
      <div>
        <label for="expiration">expiration</label>
        <input
          id="expiration"
          v-model="expiration"
          type="text"
          name="expiration"
        />
        <div role="info">현재시간 +12시간 timestamp 입력</div>
      </div>
      <input
        type="submit"
        value="JWT 생성"
      >
    </form>

    <div class="token-result" v-if="token">
      <div class="token-key">Token</div>
      <div class="token-value">{{ token }}</div>
    </div>
  </div>
</template>

<script>
import SignJWT from 'jose/dist/browser/jwt/sign';
import { toUint8Array } from 'js-base64';

var demoAccessKey = 'uv9CGthPzlvsInZerCw0';
var demoSecretKey = 'ckFXaWtRWENtSTA2QnpGVmxWNlBySWF4cUk1Q1pxbHU=';

export default {
  name: 'autorizationGenerator',
  data() {
    var now = new Date();
    return {
      errors: [],
      accessKey: demoAccessKey,
      secretKey: demoSecretKey,
      userId: 'shoplive',
      name: '샵라이브',
      expiration: parseInt((now.getTime() + 60 * 60 * 12) / 1000), // +1시간
      token: this.token
    }
  },
  methods: {
    async checkForm(e) {
      console.log('submit');
      e.preventDefault();

      var payload = { accessKey: this.accessKey, userId: this.userId, name: this.name };
      const jwt = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(this.expiration)
        .sign(toUint8Array(this.secretKey));


      this.token = jwt;
    }
  }
}
</script>

<style lang="stylus">
.authorization-generator
  .token-key
    font-weight bold
  .token-value
    font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", "Spoqa Han Sans Neo", monospace
    word-break break-all
    word-wrap break-word
    width 100%
    margin-top 3px
</style>
