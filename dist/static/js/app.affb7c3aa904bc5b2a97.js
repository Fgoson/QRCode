webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-link",{attrs:{to:"/"}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]},o=n("VU/8")({name:"App"},a,!1,null,null,null).exports,p=n("/ocq"),s={name:"QRCode",data:function(){return{msg:this.appSource()}},mounted:function(){},methods:{appSource:function(){var e=navigator.userAgent,t=(/MicroMessenger/i.test(e),!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)),n=e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,r="http://api.honpe.com:81/honpeapp/honpe.apk?mp.wexin.qq.com";return(t||n)&&(r="https://itunes.apple.com/app/id1093743730"),r}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"QRCode"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("a",{attrs:{href:e.msg}},[e._v("wxxz")]),e._v(" "),n("a",{attrs:{href:"http://baidu.com"}},[e._v("baidu")]),e._v(" "),n("h2",[e._v("msg")])])},staticRenderFns:[]},u=n("VU/8")(s,i,!1,null,null,null).exports;r.a.use(p.a);var c=new p.a({routes:[{path:"/",name:"QRCode",component:u}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:c,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.affb7c3aa904bc5b2a97.js.map