<template>
  <div class="authorization-generator">
    <form
      @submit="checkForm"
      class="sample-form"
    >
      <div>
        <label for="agAccessKey">accessKey</label>
        <input
          id="agAccessKey"
          v-model="accessKey"
          type="text"
          name="accessKey"
        />
        <div role="info">발급받은 accessKey를 입력</div>
      </div>
      <div>
        <label for="agSecretKey">secretKey</label>
        <input
          id="agSecretKey"
          v-model="secretKey"
          type="password"
          name="secretKey"
        />
        <div role="info">발급받은 secretKey(base64)를 입력</div>
      </div>
      <div>
        <label for="agUserId">userId</label>
        <input
          id="agUserId"
          v-model="userId"
          type="text"
          name="userId"
        />
        <div role="info">로그인 사용자 ID 입력</div>
      </div>
      <div>
        <label for="agName">name</label>
        <input
          id="agName"
          v-model="name"
          type="text"
          name="name"
        />
        <div role="info">로그인 사용자 이름 입력</div>
      </div>
      <div>
        <label for="agExpiration">expiration</label>
        <input
          id="agExpiration"
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

    <div class="token-result sample-form" v-if="token">
      <div class="token-key">Token</div>
      <textarea class="token-value" rows="5" readonly>{{ token }}</textarea>
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
      expiration: parseInt(now.getTime() / 1000) + 60 * 60 * 12, // +1시간
      token: this.token
    }
  },
  methods: {
    async checkForm(e) {
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
</style>
