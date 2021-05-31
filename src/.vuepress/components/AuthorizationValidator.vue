<template>
  <div class="authorization-validator">
    <form
      @submit="checkForm"
      class="sample-form"
    >
      <div>
        <label for="avSecretKey">secretKey</label>
        <input
          id="avSecretKey"
          v-model="secretKey"
          type="password"
          name="secretKey"
        />
        <div role="info">발급받은 secretKey(base64)를 입력</div>
      </div>
      <div>
        <label for="avToken">JWT</label>
        <textarea
          id="avToken"
          v-model="token"
          name="token"
          rows="5"
        />
        <div role="info">생성한 토큰 입력</div>
      </div>
      <input
        type="submit"
        value="JWT 검증"
      >
    </form>

    <div class="verify-result" v-if="verify">
      <div class="verify-value">{{ verify }}</div>
    </div>
  </div>
</template>

<script>
import jwtVerify from 'jose/dist/browser/jwt/verify';
import { toUint8Array } from 'js-base64';

var demoSecretKey = 'ckFXaWtRWENtSTA2QnpGVmxWNlBySWF4cUk1Q1pxbHU=';

export default {
  name: 'authorizationValidator',
  data() {
    var now = new Date();
    return {
      errors: [],
      secretKey: demoSecretKey,
      token: '',
      verify: this.verify
    }
  },
  methods: {
    async checkForm(e) {
      e.preventDefault();

      try {
        const { payload, protectedHeader } = await jwtVerify(this.token, toUint8Array(this.secretKey));
        this.verify = '👍 Signature Verified';
      } catch(e) {
        console.log(e);
        this.verify = '🚫 Invalid Signature';
      }
    }
  }
}
</script>

<style lang="stylus">
textarea
  font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", "Spoqa Han Sans Neo", monospace
.authorization-validator
  .token-key
    font-weight bold
  .token-value
    font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", "Spoqa Han Sans Neo", monospace
    word-break break-all
    word-wrap break-word
    width 100%
    margin-top 3px
</style>
