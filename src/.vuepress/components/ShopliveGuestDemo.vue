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
  name: 'shopliveGuestDemo',
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
