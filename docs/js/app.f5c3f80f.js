(function(e){function t(t){for(var s,i,c=t[0],o=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-js/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3fa6":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=(a("d3b7"),a("bc3a")),r=a.n(n),i={},c=r.a.create(i);c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=c,window.axios=c,Object.defineProperties(e.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},s["a"].use(Plugin);Plugin;var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("h1",[e._v(" VueJS Assignment ")])])]),a("v-main",[a("router-view",{key:e.$route.fullPath})],1)],1)},u=[],d={name:"App",data:function(){return{}}},l=d,f=(a("5c0b"),a("2877")),b=a("6544"),v=a.n(b),p=a("7496"),m=a("40dc"),h=a("f6c4"),j=Object(f["a"])(l,o,u,!1,null,null,null),g=j.exports;v()(j,{VApp:p["a"],VAppBar:m["a"],VMain:h["a"]});var w=a("8c4f"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("div",{staticClass:"list-header"},[a("div",{staticClass:"search-group"},[a("div",{staticClass:"search-input"},[a("v-text-field",{attrs:{value:e.searchParams.name,label:"Filter by name",outlined:""},on:{keyup:e.updateSearch}})],1),a("div",{staticClass:"sorting-input"},[a("v-select",{attrs:{items:e.sortingOptions,value:e.sortingValue,label:"Sort by",outlined:""},on:{change:e.updateSorting}})],1)]),a("div",{staticClass:"view-modes"},[a("v-tabs",{attrs:{"background-color":"transparent"},on:{change:e.changeViewMode}},[a("v-tab",[e._v("Grid")]),a("v-tab",[e._v("List")])],1)],1)]),a("v-row",[e.loading?a("v-col",{attrs:{cols:"12"}},[a("h1",[e._v("Please wait...")])]):e._e(),e.loading?e._e():a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"user-list",class:e.viewMode},e._l(e.users,(function(e){return a("user-item",{key:e.id,attrs:{user:e}})})),1)])],1),a("v-row",[a("v-pagination",{attrs:{length:e.searchParams.page_count},on:{input:e.updatePage},model:{value:e.searchParams.page,callback:function(t){e.$set(e.searchParams,"page",t)},expression:"searchParams.page"}})],1)],1)},_=[],x=a("1da1"),y=a("5530"),C=(a("ac1f"),a("1276"),a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"user-card",on:{click:function(t){return e.showDetails(e.user.id)}}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-avatar",{attrs:{size:"70px"}},[e.user.avatar?a("img",{attrs:{alt:"Avatar",src:e.user.avatar}}):e._e()]),a("div",{staticClass:"user-details"},[a("h3",[e._v(" "+e._s(e.user.name)+" ")]),a("div",[a("a",{staticClass:"email",attrs:{target:"_blank",href:"mailto:"+e.user.email},on:{click:function(e){e.stopPropagation()}}},[e._v(e._s(e.user.email))])]),a("div",[a("a",{staticClass:"phone",attrs:{href:"tel:"+e.user.phone},on:{click:function(e){e.stopPropagation()}}},[e._v(e._s(e.user.phone))])])])],1)],1)],1)}),O=[],P={name:"UserItem",props:["user"],methods:{showDetails:function(e){se.push({path:"/user/".concat(e)})}}},U=P,V=(a("5b20"),a("8212")),$=a("b0af"),D=a("62ad"),z=a("0fd9"),S=Object(f["a"])(U,C,O,!1,null,"c502e460",null),M=S.exports;v()(S,{VAvatar:V["a"],VCard:$["a"],VCol:D["a"],VRow:z["a"]});var I=a("2f62"),R={mounted:function(){this.initUsers()},components:{UserItem:M},name:"Dashboard",data:function(){return{loading:!1}},computed:Object(y["a"])({},Object(I["c"])(["viewMode","users","searchParams","sortingValue","sortingOptions"])),props:{},methods:Object(y["a"])(Object(y["a"])({},Object(I["b"])({getUsers:"getUsers"})),{},{initUsers:function(){this.$store.state.users.length||this.updateUsers(!1)},updateUsers:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.loading=!0,!t){e.next=6;break}return e.next=4,this.getUsers(this.searchParams);case 4:e.next=8;break;case 6:return e.next=8,this.getUsers();case 8:this.loading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),updateSearch:function(e){this.$store.commit("updateSearch",e.target.value),"Enter"==e.key&&this.updateUsers(!0),console.log(e)},updateSorting:function(e){var t=e.split("-"),a=Object(y["a"])({},this.searchParams);a.page=1,a.sortBy=t[0],a.order=t[1],this.$store.commit("updateSorting",{newSort:a,newSortingValue:e}),this.updateUsers(!0)},updatePage:function(e){this.searchParams.page=e,this.updateUsers(!0)},changeViewMode:function(e){var t=0==e?"grid":"list";this.$store.commit("changeViewMode",t)}})},A=R,B=(a("b985"),a("a523")),E=a("891e"),T=a("b974"),N=a("71a3"),q=a("fe57"),F=a("8654"),J=Object(f["a"])(A,k,_,!1,null,null,null),G=J.exports;v()(J,{VCol:D["a"],VContainer:B["a"],VPagination:E["a"],VRow:z["a"],VSelect:T["a"],VTab:N["a"],VTabs:q["a"],VTextField:F["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[e.loading?a("v-col",{attrs:{cols:"12"}},[a("h1",[e._v("Please wait...")])]):e._e(),!e.loading&&e.$store.state.userData?a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"user-details"},[a("div",{staticClass:"navigation"},[a("div",{staticClass:"go-back",on:{click:e.goBack}},[a("v-icon",{staticClass:"go-back-icon"},[e._v("mdi-arrow-left")]),a("span",{staticClass:"go-back-text"},[e._v("Go Back")])],1),e.$store.state.users.length?a("div",{staticClass:"user-navigation"},[a("div",{staticClass:"previous",class:{disabled:e.userIndex<=0},on:{click:function(t){return e.changeUser("prev")}}},[a("v-icon",{staticClass:"previous-icon"},[e._v("mdi-arrow-left")]),a("span",{staticClass:"previous-text"},[e._v("Previous User")])],1),a("div",{staticClass:"next",class:{disabled:e.userIndex>=e.$store.state.users.length-1},on:{click:function(t){return e.changeUser("next")}}},[a("span",{staticClass:"next-text"},[e._v("Next User")]),a("v-icon",{staticClass:"next-icon"},[e._v("mdi-arrow-right")])],1)]):e._e()]),a("v-card",[a("v-row",[a("v-col",{staticClass:"main-info text-center",attrs:{cols:"12",sm:"12",md:"4",lg:"4"}},[a("v-avatar",{attrs:{size:"150px"}},[e.$store.state.userData.avatar?a("img",{attrs:{alt:"Avatar",src:e.$store.state.userData.avatar}}):e._e()]),a("div",{staticClass:"name"},[a("span",[e._v(e._s(e.$store.state.userData.name))])])],1),a("v-col",{staticClass:"additional-info",attrs:{cols:"12",sm:"12",md:"8",lg:"8"}},[a("div",{staticClass:"additional-info-item email"},[a("v-icon",[e._v("mdi-email")]),a("div",[e._v(e._s(e.$store.state.userData.email))])],1),a("div",{staticClass:"additional-info-item phone"},[a("v-icon",[e._v("mdi-phone")]),a("div",[e._v(e._s(e.$store.state.userData.phone))])],1),a("div",{staticClass:"additional-info-item company"},[a("v-icon",[e._v("mdi-domain")]),a("div",[e._v(e._s(e.$store.state.userData.company))])],1),a("div",{staticClass:"additional-info-item birthday"},[a("v-icon",[e._v("mdi-cake")]),a("div",[e._v(e._s(e._f("formatDate")(e.$store.state.userData.birthdate)))])],1),a("div",{staticClass:"additional-info-item cc"},[a("v-icon",[e._v("mdi-credit-card")]),a("div",[e._v(e._s(e.$store.state.userData.creditcard))])],1),a("hr"),a("div",{staticClass:"additional-info-item bio"},[a("div",[e._v(e._s(e.$store.state.userData.bio))])])])],1)],1)],1)]):e._e()],1)],1)},H=[],K=(a("c740"),a("5319"),a("c1df")),Q=a.n(K),W={mounted:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initUser(this.$route.params.userId);case 2:this.userIndex=this.$store.state.users.findIndex((function(e){return e.id==t.$route.params.userId}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{},name:"UserDetails",data:function(){return{loading:!1,userIndex:0}},props:{},methods:Object(y["a"])(Object(y["a"])({},Object(I["b"])({getUser:"getUser"})),{},{initUser:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.getUser(t);case 3:this.loading=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goBack:function(){se.push("/")},changeUser:function(e){switch(e){case"prev":if(this.userIndex>0){console.log(this.$store.state.users);var t=this.$store.state.users[this.userIndex-1].id;console.log(t),se.replace({path:"/user/".concat(t)})}break;case"next":console.log(this.$store.state.users);var a=this.$store.state.users[this.userIndex+1].id;console.log(a),se.push({path:"/user/".concat(a)});break}}}),filters:{formatDate:function(e){if(e)return Q()(String(e)).format("DD MMMM")}}},X=W,Y=(a("b7f5"),a("132d")),Z=Object(f["a"])(X,L,H,!1,null,null,null),ee=Z.exports;v()(Z,{VAvatar:V["a"],VCard:$["a"],VCol:D["a"],VContainer:B["a"],VIcon:Y["a"],VRow:z["a"]}),s["a"].use(w["a"]);var te=[{path:"/",name:"Dashboard",component:G},{path:"/user/:userId",name:"UserDetails",component:ee}],ae=new w["a"]({mode:"history",base:"/vue-js/",routes:te}),se=ae;a("b0c0"),a("99af");s["a"].use(I["a"]);var ne=new I["a"].Store({state:{viewMode:"grid",users:[],userData:{name:"",avatar:"",birthdate:"",email:"",phone:"",company:"",creditcard:""},searchParams:{name:"",sortBy:"name",order:"asc",page:1,page_count:9,limit:12},sortingValue:"name-asc",sortingOptions:[{text:"Name, ascending",value:"name-asc"},{text:"Name, descending",value:"name-desc"},{text:"ID, ascending",value:"id-asc"},{text:"ID, descending",value:"id-desc"}]},mutations:{changeViewMode:function(e,t){e.viewMode=t},updateUsers:function(e,t){e.users=t},updateUserData:function(e,t){e.userData=t},updateSearch:function(e,t){e.searchParams.name=t},updateSorting:function(e,t){e.searchParams=t.newSort,e.sortingValue=t.newSortingValue}},actions:{getUsers:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function a(){var s,n,i,c,o,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.commit,n=(null===t||void 0===t?void 0:t.sortBy)||"name",i=(null===t||void 0===t?void 0:t.order)||"asc",c=(null===t||void 0===t?void 0:t.page)||"1",o=(null===t||void 0===t?void 0:t.limit)||"12",u="https://614e6c45b4f6d30017b4820f.mockapi.io/users?sortBy=".concat(n,"&order=").concat(i,"&page=").concat(c,"&limit=").concat(o),null!==t&&void 0!==t&&t.name&&(u=u.concat("&name=".concat(t.name))),a.next=9,r()(u).then((function(e){s("updateUsers",e.data)}));case 9:case"end":return a.stop()}}),a)})))()},getUser:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.commit,n="https://614e6c45b4f6d30017b4820f.mockapi.io/users/".concat(t),a.next=4,r()(n).then((function(e){s("updateUserData",e.data)}));case 4:case"end":return a.stop()}}),a)})))()}},modules:{}}),re=a("f309");s["a"].use(re["a"]);var ie=new re["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:se,store:ne,vuetify:ie,render:function(e){return e(g)}}).$mount("#app")},"5b20":function(e,t,a){"use strict";a("3fa6")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},b7f5:function(e,t,a){"use strict";a("e5eb")},b985:function(e,t,a){"use strict";a("de7f")},de7f:function(e,t,a){},e5eb:function(e,t,a){}});
//# sourceMappingURL=app.f5c3f80f.js.map