<template>
  <div class="shoplive-demo">
    <a class="shoplive-demo-btn" v-on:click="hideControls()">컨트롤 감추기</a>
    <a class="shoplive-demo-btn" v-on:click="showControls()">컨트롤 보이기</a>
    <div id="shoplivePlayer" class="shoplive-player">
      id="shoplivePlayer"
    </div>
  </div>
</template>

<script>
var demoAccessKey = 'uv9CGthPzlvsInZerCw0';

var messageCallback = function(action, payload) {
  switch (action) {
    case "REQUEST_LOGIN": // 로그인이 필요할 때 호출
      alert("로그인이 필요합니다");
      break;
  }
};
var options = {
  messageCallback: messageCallback,
};

var _mplayer;

export default {
  name: 'shopliveSimpleDemo',
  mounted() {
    (function (s,h,o,p,l,i,v,e) {s["ShoplivePlayer"]=l;(s[l]=s[l]||function(){
    (s[l].q=s[l].q||[]).push(arguments);}),(i=h.createElement(o)),
    (v=h.getElementsByTagName(o)[0]);i.async=1;i.src=p;v.parentNode.insertBefore(i,v);
    })(window,document,"script","https://static.shoplive.cloud/live.js","mplayer");

    mplayer("init", this.accessKey, this.campaignKey, { userId: this.userId, userName: this.name }, options);
    mplayer("run", "shoplivePlayer");

    _mplayer = mplayer;
  },
  data() {
    var now = new Date();
    return {
      errors: [],
      accessKey: demoAccessKey,
      campaignKey: 'bf129612ef4c',
      userId: 'shoplive',
      name: '샵라이브',
    }
  },
  methods: {
    hideControls(e) {
      _mplayer("send", "hideControls");
    },
    showControls(e) {
      _mplayer("send", "showControls");
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
  .shoplive-demo-btn
    border-radius 5px
    background-color #3eaf7c
    color #fff
    padding 10px
    display inline-block
    margin-left 10px
    margin-top 10px
    cursor pointer
</style>
