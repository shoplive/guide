<template>
  <div class="shoplive-demo">
    <form
      @submit="checkForm"
      class="sample-form"
    >
      <div>
        <label for="demoAccessKey">accessKey</label>
        <input
          id="demoAccessKey"
          v-model="accessKey"
          type="text"
          name="accessKey"
        />
        <div role="info">발급받은 accessKey를 입력</div>
      </div>
      <div>
        <label for="demoUserId">userId</label>
        <input
          id="demoUserId"
          v-model="userId"
          type="text"
          name="userId"
        />
        <div role="info">로그인 사용자 ID 입력</div>
      </div>
      <div>
        <label for="demoName">name</label>
        <input
          id="demoName"
          v-model="name"
          type="text"
          name="name"
        />
        <div role="info">로그인 사용자 이름 입력</div>
      </div>
      <div>
        <label for="demoExpiration">expiration</label>
        <input
          id="demoExpiration"
          v-model="expiration"
          type="text"
          name="expiration"
        />
        <div role="info">현재시간 +12시간 timestamp 입력</div>
      </div>
      <input
        type="submit"
        value="플레이어 생성"
      >
    </form>

    <div id="shoplivePlayer" class="shoplive-player">
      id="shoplivePlayer"
    </div>
  </div>
</template>

<script>
var demoAccessKey = 'uv9CGthPzlvsInZerCw0';

export default {
  name: 'shopliveSimpleDemo',
  mounted() {
    (function (s,h,o,p,l,i,v,e) {s["ShoplivePlayer"]=l;(s[l]=s[l]||function(){
    (s[l].q=s[l].q||[]).push(arguments);}),(i=h.createElement(o)),
    (v=h.getElementsByTagName(o)[0]);i.async=1;i.src=p;v.parentNode.insertBefore(i,v);
    })(window,document,"script","https://static.shoplive.cloud/live.js","mplayer");
  },
  data() {
    var now = new Date();
    return {
      errors: [],
      accessKey: demoAccessKey,
      userId: 'shoplive',
      name: '샵라이브',
      expiration: parseInt(now.getTime() / 1000) + 60 * 60 * 12, // +1시간
      token: this.token
    }
  },
  methods: {
    async checkForm(e) {
      e.preventDefault();

      mplayer("init", this.accessKey, '', 195);
      mplayer("run", "shoplivePlayer");
    }
  }
}
</script>

<style lang="stylus">
.shoplive-demo
  .shoplive-player
    margin-top 20px
    border 1px dashed #999
    width 480px
    max-width 100%
</style>
