<template>
  <div>
    <form
      @submit="checkForm"
      class="authorization-generator"
    >
      <div>accessKey</div>
      <div>
        <input
          id="accessKey"
          v-model="accessKey"
          type="text"
          name="accessKey"
        />
      </div>
      <div>secretKey</div>
      <div>
        <input
          id="secretKey"
          v-model="secretKey"
          type="password"
          name="secretKey"
        />
      </div>
      <div>userId</div>
      <div>
        <input
          id="userId"
          v-model="userId"
          type="text"
          name="userId"
        />
      </div>
      <div>name</div>
      <div>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
        />
      </div>
      <div>expiration</div>
      <div>
        <input
          id="expiration"
          v-model="expiration"
          type="text"
          name="expiration"
        />
      </div>
      <input
        type="submit"
        value="JWT 생성"
      >
    </form>

    <div v-if="token">
      <div>Token</div>
      <div>{{ token }}</div>
    </div>
  </div>
</template>

<script>
import SignJWT from 'jose/dist/browser/jwt/sign';
import { toUint8Array } from 'js-base64';

export default {
  name: 'autorizationGenerator',
  data() {
    var now = new Date();
    return {
      errors: [],
      accessKey: 'uv9CGthPzlvsInZer123',
      secretKey: 'ZlVITDaZpcjdPZllHQm1VRGFEMXJCVWV1UFZPaVNiTGs=',
      userId: 'shoplive',
      name: '샵라이브',
      expiration: parseInt((now.getTime() + 60 * 60) / 1000), // +1시간
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