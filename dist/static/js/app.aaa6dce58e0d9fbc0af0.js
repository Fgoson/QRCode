webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-link",{attrs:{to:"/"}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]},o=n("VU/8")({name:"App"},a,!1,null,null,null).exports,i=n("/ocq"),p={name:"QRCode",data:function(){return{msg:this.appSource()}},mounted:function(){},methods:{appSource:function(){var e=navigator.userAgent,t=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),n=e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,r="http://api.honpe.com:81/honpeapp/honpe.apk";return(t||n)&&(r="https://itunes.apple.com/app/id1093743730"),e.match(/MicroMessenger/i),r}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"QRCode"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]},u=n("VU/8")(p,s,!1,null,null,null).exports;r.a.use(i.a);var c=new i.a({routes:[{path:"/",name:"QRCode",component:u}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:c,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.aaa6dce58e0d9fbc0af0.js.map