(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{370:function(e,s,n){},410:function(e,s,n){"use strict";n(370)},431:function(e,s,n){"use strict";n.r(s);n(95),n(68);var t,o={messageCallback:{}},i={name:"shopliveSimpleDemo",mounted:function(){var e,s,n,i,a,l;e=window,s=document,n="script",i="mplayer",e.ShoplivePlayer=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},a=s.createElement(n),l=s.getElementsByTagName(n)[0],a.async=1,a.src="https://static.shoplive.cloud/live.js",l.parentNode.insertBefore(a,l),mplayer("init",this.accessKey,this.campaignKey,{userId:this.userId,userName:this.name},o),mplayer("run","shoplivePlayer"),t=mplayer},data:function(){new Date;return{errors:[],accessKey:"uv9CGthPzlvsInZerCw0",campaignKey:"bf129612ef4c",userId:"shoplive",name:"샵라이브"}},methods:{hideControls:function(e){t("send","hideControls")},showControls:function(e){t("send","showControls")}}},a=(n(410),n(42)),l=Object(a.a)(i,(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"shoplive-demo"},[n("a",{staticClass:"shoplive-demo-btn",on:{click:function(s){return e.hideControls()}}},[e._v("컨트롤 감추기")]),e._v(" "),n("a",{staticClass:"shoplive-demo-btn",on:{click:function(s){return e.showControls()}}},[e._v("컨트롤 보이기")]),e._v(" "),n("div",{staticClass:"shoplive-player",attrs:{id:"shoplivePlayer"}},[e._v('\n    id="shoplivePlayer"\n  ')])])}),[],!1,null,null,null);s.default=l.exports}}]);