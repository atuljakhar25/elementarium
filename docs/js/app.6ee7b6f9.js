(function(a){function e(e){for(var o,i,s=e[0],r=e[1],c=e[2],m=0,u=[];m<s.length;m++)i=s[m],n[i]&&u.push(n[i][0]),n[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(a[o]=r[o]);f&&f(e);while(u.length)u.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var a,e=0;e<l.length;e++){for(var t=l[e],o=!0,i=1;i<t.length;i++){var s=t[i];0!==n[s]&&(o=!1)}o&&(l.splice(e--,1),a=r(r.s=t[0]))}return a}var o={},i={app:0},n={app:0},l=[];function s(a){return r.p+"js/"+({}[a]||a)+"."+{"chunk-11ab159a":"a29e1b79","chunk-453237ef":"650d0ecb"}[a]+".js"}function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(a){var e=[],t={"chunk-11ab159a":1,"chunk-453237ef":1};i[a]?e.push(i[a]):0!==i[a]&&t[a]&&e.push(i[a]=new Promise(function(e,t){for(var o="css/"+({}[a]||a)+"."+{"chunk-11ab159a":"1f10791d","chunk-453237ef":"e69e09e4"}[a]+".css",n=r.p+o,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var c=l[s],m=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(m===o||m===n))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],m=c.getAttribute("data-href");if(m===o||m===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||n,l=new Error("Loading CSS chunk "+a+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete i[a],f.parentNode.removeChild(f),t(l)},f.href=n;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){i[a]=0}));var o=n[a];if(0!==o)if(o)e.push(o[2]);else{var l=new Promise(function(e,t){o=n[a]=[e,t]});e.push(o[2]=l);var c,m=document.createElement("script");m.charset="utf-8",m.timeout=120,r.nc&&m.setAttribute("nonce",r.nc),m.src=s(a),c=function(e){m.onerror=m.onload=null,clearTimeout(u);var t=n[a];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,l=new Error("Loading chunk "+a+" failed.\n("+o+": "+i+")");l.type=o,l.request=i,t[1](l)}n[a]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:m})},12e4);m.onerror=m.onload=c,document.head.appendChild(m)}return Promise.all(e)},r.m=a,r.c=o,r.d=function(a,e,t){r.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,e){if(1&e&&(a=r(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var o in a)r.d(t,o,function(e){return a[e]}.bind(null,o));return t},r.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(e,"a",e),e},r.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},r.p="/mini-elementarium/",r.oe=function(a){throw console.error(a),a};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],m=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=m;l.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"0cfb":function(a,e,t){},"516b":function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"row-fill flex centralize",attrs:{id:"periodic-table"}},[t("div",{staticClass:"row",class:{"search-mode":a.search}},[a._l(a.chemicals,function(e){return[t("div",a._b({staticClass:"col ratio-square circle pointer",on:{click:function(t){return a.openElementInfo(e)}}},"div",a.getChemical(e),!1),[t("div",{staticClass:"flex centralize"},[t("span",{staticClass:"l-08 c-gray-d9"},[a._v(a._s(e.initials)),t("sup",{staticClass:"l-05 w-bold"},[a._v(a._s(e.atom))])])])])]}),t("div",{staticClass:"col ratio-square",staticStyle:{"grid-area":"_5"}},[t("div",{staticClass:"flex centralize"},[t("dots-horizontal-icon",{staticClass:"c-fuchsia-l1 pt-2"})],1)]),t("div",{staticClass:"col ratio-square",staticStyle:{"grid-area":"_6"}},[t("div",{staticClass:"flex centralize"},[t("dots-horizontal-icon",{staticClass:"c-purple-l1 pt-2"})],1)]),a._l(7,function(e){return t("div",{staticClass:"col pr-2 flex align-center",style:{"grid-area":"p"+e}},[t("span",{staticClass:"l-05 c-gray-d2"},[a._v(a._s(e))])])}),a._l(18,function(e){return t("div",{staticClass:"col flex align-end justify-center",style:{"grid-area":"g"+e.toString(19).toUpperCase()}},[t("span",{staticClass:"l-05 c-gray-d2"},[a._v(a._s(e))])])})],2)])},i=[],n=t("ad9b"),l={name:"periodic-table",props:{search:{type:String,default:""},chemicals:{type:Array,default:[]}},methods:{getChemical:function(a){return{style:{"grid-area":a.initials,background:`var(${a.color})`},class:{active:this.search&&a.active}}},openElementInfo:function(a){return this.$root.historyRegister=!0,this.$router.push({name:"element",params:{selector:a.latin}})},updateSearch:function(){return this.chemicals.forEach((a,e)=>{var t,o,i,n,l,s,r,c;return r=this.search.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),l=r.length,t=a.atom.toString(),i=a.initials.toLowerCase(),n=a.latin.toLowerCase(),s=a.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=a.family.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=((a=!0)=>{return this.chemicals[e].active=a}),l<3?1===l&&i.startsWith(r)?c():2===l&&i===r?c():t===r?c():c(!1):t===r?c():n.startsWith(r)?c():s.startsWith(r)?c():o.includes(r)?c():c(!1)})}},watch:{search:"updateSearch"},components:{"dots-horizontal-icon":n["a"]}},s=l,r=(t("c161"),t("2877")),c=Object(r["a"])(s,o,i,!1,null,null,null);e["default"]=c.exports},"54a6":function(a,e,t){},"56d7":function(a,e,t){"use strict";t.r(e);t("7f7f"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return a.$root.hasLoaded?t("div",{staticClass:"container fill-screen px-2 px-md-0",attrs:{id:"app"}},[t("navbar",{on:{search:function(e){a.search=e}}}),t("transition",{attrs:{name:"transition-slide-x"}},[t("button",{directives:[{name:"show",rawName:"v-show",value:a.$route.meta.backButton,expression:"$route.meta.backButton"}],staticClass:"mdc-button ml-md-2 c-white",attrs:{id:"back-button"},on:{click:a.back}},[a.history<1?t("icon-periodic-table",{staticClass:"mdc-button__icon",staticStyle:{height:"24px"}}):a._e(),a.history>0?t("icon-arrow-left",{staticClass:"mdc-button__icon",staticStyle:{height:"24px"}}):a._e(),t("span",{staticClass:"mdc-button__label px-3 w-bold"},[a.history<1?[a._v(a._s(a.$root.texts.ui.home))]:a._e(),a.history>0?[a._v(a._s(a.$root.texts.ui.back))]:a._e()],2)],1)]),t("transition",{attrs:{name:"transition-page",mode:"out-in"}},[t("router-view",a._b({},"router-view",a.routeProps,!1))],1)],1):a._e()},n=[],l=t("57e5"),s=t("2581"),r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("nav",{staticClass:"row full-row py-1 px-md-3 flex no-wrap"},[a._m(0),t("div",{staticClass:"col-fill"}),t("div",{staticClass:"col"},[t("transition",{attrs:{name:"transition-scale"}},[t("button",{directives:[{name:"show",rawName:"v-show",value:a.$route.meta.searchBar,expression:"$route.meta.searchBar"}],staticClass:"mdc-icon-button",on:{click:function(e){a.showSearchbar=!0,a.focusSearchbar()}}},[t("span",{staticClass:"mdc-icon-button__label"},[t("icon-magnify")],1)])]),t("button",{staticClass:"mdc-icon-button",on:{click:function(e){a.showLanguageDialog=!a.showLanguageDialog}}},[t("span",{staticClass:"mdc-icon-button__label"},[t("icon-earth")],1)]),t("button",{staticClass:"mdc-icon-button",on:{click:a.openAppInfo}},[t("span",{staticClass:"mdc-icon-button__label"},[t("icon-info")],1)])],1),t("transition",{attrs:{name:"transition-slide-y"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:a.showSearchbar,expression:"showSearchbar"}],staticClass:"container p-1",attrs:{id:"search-bar"}},[t("div",{staticClass:"row-fill"},[t("div",{staticClass:"col-fill mdc-text-field mdc-text-field--fullwidth bg-white"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.search,expression:"search"}],staticClass:"mdc-text-field__input px-3",attrs:{id:"search-input",type:"text",spellcheck:"false",placeholder:a.$root.texts.ui.search},domProps:{value:a.search},on:{keyup:[function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:a.closeSearchbar(e)},function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.blurSearchbar(e)}],input:function(e){e.target.composing||(a.search=e.target.value)}}})]),t("div",{staticClass:"col",attrs:{id:"close-button-col"}},[t("button",{staticClass:"mdc-icon-button",on:{click:a.closeSearchbar}},[t("span",{staticClass:"mdc-icon-button__label"},[t("icon-close",{staticClass:"c-gray-d8"})],1)])])])])]),t("language-dialog",{model:{value:a.showLanguageDialog,callback:function(e){a.showLanguageDialog=e},expression:"showLanguageDialog"}})],1)},c=[function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"col flex items-center"},[o("img",{attrs:{src:t("9b19"),width:"32",height:"32"}}),o("span",{staticClass:"h-xs pl-2 l-07 w-bold"},[a._v("MINI ELEMENTARIUM")])])}],m=t("bbc4"),u=t("17a2"),f=t("da50"),d=t("7eb5"),g=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"mdc-dialog",attrs:{id:"languageDialog"}},[t("div",{staticClass:"mdc-dialog__container"},[t("div",{staticClass:"mdc-dialog__surface"},[t("h2",{staticClass:"mdc-dialog__title"},[a._v(a._s(a.$root.texts.ui.selectLanguage))]),t("div",{staticClass:"mdc-dialog__content px-0 py-2"},[t("ul",{staticClass:"mdc-list"},[t("li",{staticClass:"mdc-list-item px-4",on:{click:function(e){a.setLanguage("en"),a.close()}}},[t("span",{staticClass:"mdc-list-item__text ml-2"},[a._v("English")])]),t("li",{staticClass:"mdc-list-item px-4",on:{click:function(e){a.setLanguage("pt"),a.close()}}},[t("span",{staticClass:"mdc-list-item__text ml-2"},[a._v("Portugês")])]),t("li",{staticClass:"mdc-list-item px-4",on:{click:function(e){a.setLanguage("ru"),a.close()}}},[t("span",{staticClass:"mdc-list-item__text ml-2"},[a._v("Pусский")])])])]),t("footer",{staticClass:"mdc-dialog__actions"},[t("button",{staticClass:"mdc-button mdc-dialog__button px-3",on:{click:function(e){return a.close()}}},[t("span",{staticClass:"mdc-button__label w-bold"},[a._v(a._s(a.$root.texts.ui.close))])])])])]),t("div",{staticClass:"mdc-dialog__scrim",on:{click:function(e){return a.close()}}})])},h=[],p=t("704c"),b={name:"language-dialog",props:{value:Boolean},data:function(){return{dialog:Object,languages:[{name:"English",value:"en"},{name:"Purtuguês",value:"pt"},{name:"Pусский",value:"ru"}]}},methods:{setLanguage:function(a){return this.$root.language=a},close:function(){return this.$emit("input",!1)}},watch:{value:function(){return this.value?this.dialog.open():this.dialog.close()}},mounted:function(){return this.dialog=new p["a"](document.querySelector("#languageDialog"))}},y=b,v=t("2877"),w=Object(v["a"])(y,g,h,!1,null,null,null),C=w.exports,M=t("93e0"),_=t("3bb7"),k={name:"navbar",data:function(){return{search:"",showSearchbar:!1,showLanguageDialog:!1}},methods:{focusSearchbar:function(){return setTimeout(function(){return document.querySelector("#search-input").focus()},200)},blurSearchbar:function(){return document.querySelector("#search-input").blur()},closeSearchbar:function(){return this.search="",this.showSearchbar=!1},openAppInfo:function(){return this.$root.historyRegister=!0,this.$router.push({name:`about ${this.$root.language}`})}},watch:{$route:"closeSearchbar",search:function(){return this.$emit("search",this.search)}},mounted:function(){return document.addEventListener("DOMContentLoaded",function(){return new _["a"](document.querySelector(".mdc-text-field")),new M["a"](document.querySelector(".mdc-text-field__icon"))})},components:{"icon-magnify":m["a"],"icon-earth":u["a"],"icon-info":f["a"],"icon-close":d["a"],"language-dialog":C}},x=k,R=(t("996e"),Object(v["a"])(x,r,c,!1,null,null,null)),S=R.exports,A={name:"App",data:function(){return{search:"",history:0}},computed:{routeProps:function(){return{search:this.search,language:this.$root.language,chemicals:this.$root.chemicals,class:{"has-back-button":this.$route.meta.backButton}}}},methods:{back:function(){return this.$root.historyRegister=!1,this.history>1?(this.$router.go(-1),this.history-=1):(this.$router.push("/"),this.history=0)}},watch:{$route:function(){if(this.$root.historyRegister)return this.history+=1,this.$root.historyRegister=!1}},components:{navbar:S,"icon-arrow-left":l["a"],"icon-periodic-table":s["a"]}},E=A,L=(t("cf25"),Object(v["a"])(E,i,n,!1,null,null,null)),N=L.exports,T=t("8c4f"),$=t("516b");o["a"].use(T["a"]);var P=new T["a"]({routes:[{path:"/",name:"home",component:$["default"],meta:{searchBar:!0}},{path:"/",name:"home en",component:function(){return Promise.resolve().then(t.bind(null,"516b"))},meta:{language:"en",searchBar:!0}},{path:"/en",redirect:{name:"home en"}},{path:"/about",name:"about en",component:function(){return t.e("chunk-11ab159a").then(t.bind(null,"754b"))},meta:{language:"en",backButton:!0}},{path:"/en/:selector",name:"element en",component:function(){return t.e("chunk-453237ef").then(t.bind(null,"e56d"))},meta:{language:"en",backButton:!0}},{path:"/",name:"home pt",component:function(){return Promise.resolve().then(t.bind(null,"516b"))},meta:{language:"pt",searchBar:!0}},{path:"/pt",redirect:{name:"home pt"}},{path:"/sobre",name:"about pt",component:function(){return t.e("chunk-11ab159a").then(t.bind(null,"754b"))},meta:{language:"pt",backButton:!0}},{path:"/pt/:selector",name:"element pt",component:function(){return t.e("chunk-453237ef").then(t.bind(null,"e56d"))},meta:{language:"pt",backButton:!0}},{path:"/",name:"home ru",component:function(){return Promise.resolve().then(t.bind(null,"516b"))},meta:{language:"ru",searchBar:!0}},{path:"/ru",redirect:{name:"home ru"}},{path:"/около",name:"about ru",component:function(){return t.e("chunk-11ab159a").then(t.bind(null,"754b"))},meta:{language:"ru",backButton:!0}},{path:"/ru/:selector",name:"element ru",component:function(){return t.e("chunk-453237ef").then(t.bind(null,"e56d"))},meta:{language:"ru",backButton:!0}},{path:"/:selector",name:"element",component:function(){return t.e("chunk-453237ef").then(t.bind(null,"e56d"))},meta:{backButton:!0}},{path:"*",redirect:"/"}]}),B=t("bc3a"),X=(t("71c2"),t("5dcd")),O=t("9d41");o["a"].config.productionTip=!1,"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/mini-elementarium/service-worker.js")}),new o["a"]({el:"#app",render:function(a){return a(N)},data:{chemicals:X,language:"en",texts:O,hasLoaded:!1,historyRegister:!1},methods:{updateLanguage:function(){var a=this;Object(B["get"])("static/lang/".concat(this.language,".json")).then(function(e){var t=e.data;a.texts=t.texts,t.chemicals.forEach(function(e,o){a.$set(a.chemicals[o],"name",t.chemicals[o]),a.$set(a.chemicals[o].family,"text",t.texts.families[a.chemicals[o].family.name])}),a.hasLoaded=!0})}},watch:{language:"updateLanguage",$route:function(a){var e=a.meta.language;e&&(this.language=e)}},beforeMount:function(){this.$route.meta.language&&(this.language=this.$route.meta.language),this.updateLanguage()},router:P})},"5dcd":function(a){a.exports=[{atom:1,initials:"H",latin:"Hydrogenium",mass:1.0079,family:{name:"hydrogen"},color:"--color-light",electrons:{base:!1,config:["1,s,1"]}},{atom:2,initials:"He",latin:"Helium",mass:4.0026,family:{name:"nobleGases"},color:"--color-sapphire-l1",electrons:{base:!1,config:["1,s,2"]}},{atom:3,initials:"Li",latin:"Lithium",mass:1.941,family:{name:"alkaliMetals"},color:"--color-red-l1",electrons:{base:"He",config:["2,s,1"]}},{atom:4,initials:"Be",latin:"Beryllium",mass:9.0122,family:{name:"alkalineEarthMetals"},color:"--color-orange-l1",electrons:{base:"He",config:["2,s,2"]}},{atom:5,initials:"B",latin:"Borum",mass:10.811,family:{name:"semimetals"},color:"--color-lime-l1",electrons:{base:"He",config:["2,s,2","2,p,1"]}},{atom:6,initials:"C",latin:"Carboneum",mass:12.011,family:{name:"nonMetals"},color:"--color-green-l1",electrons:{base:"He",config:["2,s,2","2,p,2"]}},{atom:7,initials:"N",latin:"Nitrogenium",mass:14.007,family:{name:"nonMetals"},color:"--color-green-l1",electrons:{base:"He",config:["2,s,2","2,p,3"]}},{atom:8,initials:"O",latin:"Oxygenium",mass:15.999,family:{name:"nonMetals"},color:"--color-green-l1",electrons:{base:"He",config:["2,s,2","2,p,4"]}},{atom:9,initials:"F",latin:"Fluorum",mass:18.998,family:{name:"halogens"},color:"--color-blue-l1",electrons:{base:"He",config:["2,s,2","2,p,5"]}},{atom:10,initials:"Ne",latin:"Neon",mass:20.18,family:{name:"nobleGases"},color:"--color-sapphire-l1",electrons:{base:"He",config:["2,s,2","2,p,6"]}},{atom:11,initials:"Na",latin:"Natrium",mass:22.99,family:{name:"alkaliMetals"},color:"--color-red-l1",electrons:{base:"Ne",config:["3,s,1"]}},{atom:12,initials:"Mg",latin:"Magnesium",mass:24.305,family:{name:"alkalineEarthMetals"},color:"--color-orange-l1",electrons:{base:"Ne",config:["3,s,2"]}},{atom:13,initials:"Al",latin:"Aluminium",mass:26.962,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Ne",config:["3,s,2","3,p,1"]}},{atom:14,initials:"Si",latin:"Silicium",mass:28.066,family:{name:"semimetals"},color:"--color-lime-l1",electrons:{base:"Ne",config:["3,s,2","3,p,2"]}},{atom:15,initials:"P",latin:"Phosphorus",mass:30.974,family:{name:"nonMetals"},color:"--color-green-l1",electrons:{base:"Ne",config:["3,s,2","3,p,3"]}},{atom:16,initials:"S",latin:"Sulphur",mass:32.065,family:{name:"nonMetals"},color:"--color-green-l1",electrons:{base:"Ne",config:["3,s,2","3,p,4"]}},{atom:17,initials:"Cl",latin:"Chlorum",mass:35.453,family:{name:"halogens"},color:"--color-blue-l1",electrons:{base:"Ne",config:["3,s,2","3,p,5"]}},{atom:18,initials:"Ar",latin:"Argon",mass:39.948,family:{name:"nobleGases"},color:"--color-sapphire-l1",electrons:{base:"Ne",config:["3,s,2","3,p,6"]}},{atom:19,initials:"K",latin:"Kalium",mass:39.098,family:{name:"alkaliMetals"},color:"--color-red-l1",electrons:{base:"Ar",config:["4,s,1"]}},{atom:20,initials:"Ca",latin:"Calcium",mass:40.078,family:{name:"alkalineEarthMetals"},color:"--color-orange-l1",electrons:{base:"Ar",config:["4,s,2"]}},{atom:21,initials:"Sc",latin:"Scandium",mass:44.956,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,1","4,s,2"]}},{atom:22,initials:"Ti",latin:"Titanium",mass:74.88,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,2","4,s,2"]}},{atom:23,initials:"V",latin:"Vanadium",mass:50.942,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,3","4,s,2"]}},{atom:24,initials:"Cr",latin:"Chromium",mass:51.996,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,5","4,s,1"]}},{atom:25,initials:"Mn",latin:"Manganum",mass:54.938,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,5","4,s,2"]}},{atom:26,initials:"Fe",latin:"Ferrum",mass:55.845,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,6","4,s,2"]}},{atom:27,initials:"Co",latin:"Cobaltum",mass:58933,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,7","4,s,2"]}},{atom:28,initials:"Ni",latin:"Niccolum",mass:58.693,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,9","4,s,1"]}},{atom:29,initials:"Cu",latin:"Cuprum",mass:63.546,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,10","4,s,1"]}},{atom:30,initials:"Zn",latin:"Zincum",mass:65.38,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Ar",config:["3,d,10","4,s,2"]}},{atom:31,initials:"Ga",latin:"Gallium",mass:69.723,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Ar",config:["3,d,10","4,s,2","4,p,1"]}},{atom:32,initials:"Ge",latin:"Germanium",mass:72.631,family:{name:"semimetals"},color:"--color-lime-l1",electrons:{base:"Ar",config:["3,d,10","4,s,2","4,p,2"]}},{atom:33,initials:"As",latin:"Arsenicum",mass:74.922,family:{name:"semimetals"},color:"--color-lime-l1",electrons:{base:"Ar",config:["3,d,10","4,s,2","4,p,3"]}},{atom:34,initials:"Se",latin:"Selenium",mass:78.971,family:{name:"nonMetals"},color:"--color-green-l1",electrons:{base:"Ar",config:["3,d,10","4,s,2","4,p,4"]}},{atom:35,initials:"Br",latin:"Bromum",mass:79.904,family:{name:"halogens"},color:"--color-blue-l1",electrons:{base:"Ar",config:["3,d,10","4,s,2","4,p,5"]}},{atom:36,initials:"Kr",latin:"Krypton",mass:84.768,family:{name:"nobleGases"},color:"--color-sapphire-l1",electrons:{base:"Ar",config:["3,d,10","4,s,2","4,p,6"]}},{atom:37,initials:"Rb",latin:"Rubidium",mass:85.468,family:{name:"alkaliMetals"},color:"--color-red-l1",electrons:{base:"Kr",config:["5,s,1"]}},{atom:38,initials:"Sr",latin:"Strontium",mass:87.62,family:{name:"alkalineEarthMetals"},color:"--color-orange-l1",electrons:{base:"Kr",config:["5,s,2"]}},{atom:39,initials:"Y",latin:"Yttrium",mass:88.906,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,1","5,s,2"]}},{atom:40,initials:"Zr",latin:"Zirconium",mass:91.224,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,2","5,s,2"]}},{atom:41,initials:"Nb",latin:"Niobium",mass:92.906,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,4","5,s,1"]}},{atom:42,initials:"Mo",latin:"Molybdaenum",mass:95.95,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,5","5,s,1"]}},{atom:43,initials:"Tc",latin:"Technetium",mass:98.907,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,5","5,s,2"]}},{atom:44,initials:"Ru",latin:"Ruthenium",mass:101.07,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,7","5,s,1"]}},{atom:45,initials:"Rh",latin:"Rhodium",mass:102.906,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,8","5,s,1"]}},{atom:46,initials:"Pd",latin:"Palladium",mass:106.42,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,10"]}},{atom:47,initials:"Ag",latin:"Argentum",mass:107.868,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,10","5,s,1"]}},{atom:48,initials:"Cd",latin:"Cadmium",mass:112.414,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Kr",config:["4,d,10","5,s,2"]}},{atom:49,initials:"In",latin:"Indium",mass:114.818,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Kr",config:["4,d,10","5,s,2","5,p,1"]}},{atom:50,initials:"Sn",latin:"Stannum",mass:118.711,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Kr",config:["4,d,10","5,s,2","5,p,2"]}},{atom:51,initials:"Sb",latin:"Stibium",mass:121.76,family:{name:"semimetals"},color:"--color-lime-l1",electrons:{base:"Kr",config:["4,d,10","5,s,2","5,p,3"]}},{atom:52,initials:"Te",latin:"Tellurium",mass:127.6,family:{name:"semimetals"},color:"--color-lime-l1",electrons:{base:"Kr",config:["4,d,10","5,s,2","5,p,4"]}},{atom:53,initials:"I",latin:"Iodium",mass:126.904,family:{name:"halogens"},color:"--color-blue-l1",electrons:{base:"Kr",config:["4,d,10","5,s,2","5,p,5"]}},{atom:54,initials:"Xe",latin:"Xenon",mass:131.294,family:{name:"nobleGases"},color:"--color-sapphire-l1",electrons:{base:"Kr",config:["4,d,10","5,s,2","5,p,6"]}},{atom:55,initials:"Cs",latin:"Caesium",mass:132.905,family:{name:"alkaliMetals"},color:"--color-red-l1",electrons:{base:"Xe",config:["6,s,1"]}},{atom:56,initials:"Ba",latin:"Barium",mass:137.328,family:{name:"alkalineEarthMetals"},color:"--color-orange-l1",electrons:{base:"Xe",config:["6,s,2"]}},{atom:57,initials:"La",latin:"Lanthanum",mass:138.905,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["5,d,1","6,s,2"]}},{atom:58,initials:"Ce",latin:"Cerium",mass:140.116,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,1","5,d,1","6,s,2"]}},{atom:59,initials:"Pr",latin:"Praseodymium",mass:140.908,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,3","6,s,2"]}},{atom:60,initials:"Nd",latin:"Neodymium",mass:144.243,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,4","6,s,2"]}},{atom:61,initials:"Pm",latin:"Promethium",mass:144.913,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,5","6,s,2"]}},{atom:62,initials:"Sm",latin:"Samarium",mass:150,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,6","6,s,2"]}},{atom:63,initials:"Eu",latin:"Europium",mass:151.964,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,7","6,s,2"]}},{atom:64,initials:"Gd",latin:"Gadolinium",mass:157.25,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,7","5,d,1","6,s,2"]}},{atom:65,initials:"Tb",latin:"Terbium",mass:158.925,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,9","6,s,2"]}},{atom:66,initials:"Dy",latin:"Dysprosium",mass:162.5,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,10","6,s,2"]}},{atom:67,initials:"Ho",latin:"Holmium",mass:164.93,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,11","6,s,2"]}},{atom:68,initials:"Er",latin:"Erbium",mass:167.259,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,12","6,s,2"]}},{atom:69,initials:"Tm",latin:"Thulium",mass:168.934,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,13","6,s,2"]}},{atom:70,initials:"Yb",latin:"Ytterbium",mass:173.055,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,14","6,s,2"]}},{atom:71,initials:"Lu",latin:"Lutetium",mass:174.967,family:{name:"lanthanoids"},color:"--color-fuchsia-l1",electrons:{base:"Xe",config:["4,f,14","5,d,1","6,s,2"]}},{atom:72,initials:"Hf",latin:"Hafnium",mass:178.49,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,2","6,s,2"]}},{atom:73,initials:"Ta",latin:"Tantalum",mass:180.948,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,3","6,s,2"]}},{atom:74,initials:"W",latin:"Wolframium",mass:183.85,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,4","6,s,2"]}},{atom:75,initials:"Re",latin:"Rhenium",mass:186.207,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,5","6,s,2"]}},{atom:76,initials:"Os",latin:"Osmium",mass:190.23,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,6","6,s,2"]}},{atom:77,initials:"Ir",latin:"Iridium",mass:192.22,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,7","6,s,2"]}},{atom:78,initials:"Pt",latin:"Platinum",mass:195.08,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,9","6,s,1"]}},{atom:79,initials:"Au",latin:"Aurum",mass:196.967,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,1"]}},{atom:80,initials:"Hg",latin:"Hydrargyrum",mass:200.59,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,2"]}},{atom:81,initials:"Tl",latin:"Thallium",mass:204.383,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,2","6,p,1"]}},{atom:82,initials:"Pb",latin:"Plumbum",mass:207.2,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,2","6,p,2"]}},{atom:83,initials:"Bi",latin:"Bismuthum",mass:208.68,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,2","6,p,3"]}},{atom:84,initials:"Po",latin:"Polonium",mass:208.982,family:{name:"semimetals"},color:"--color-lime-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,2","6,p,4"]}},{atom:85,initials:"At",latin:"Astatum",mass:209.987,family:{name:"halogens"},color:"--color-blue-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,2","6,p,5"]}},{atom:86,initials:"Rn",latin:"Radon",mass:22.018,family:{name:"nobleGases"},color:"--color-sapphire-l1",electrons:{base:"Xe",config:["4,f,14","5,d,10","6,s,2","6,p,6"]}},{atom:87,initials:"Fr",latin:"Francium",mass:223.02,family:{name:"alkaliMetals"},color:"--color-red-l1",electrons:{base:"Rn",config:["7,s,1"]}},{atom:88,initials:"Ra",latin:"Radium",mass:226.025,family:{name:"alkalineEarthMetals"},color:"--color-orange-l1",electrons:{base:"Rn",config:["7,s,2"]}},{atom:89,initials:"Ac",latin:"Actinium",mass:227.028,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["6,d,1","7,s,2"]}},{atom:90,initials:"Th",latin:"Thorium",mass:232.038,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["6,d,2","7,s,2"]}},{atom:91,initials:"Pa",latin:"Protactinium",mass:231.036,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,2","6,d,1","7,s,2"]}},{atom:92,initials:"U",latin:"Uranium",mass:238.029,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,3","6,d,1","7,s,2"]}},{atom:93,initials:"Np",latin:"Neptunium",mass:237.048,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,4","6,d,1","7,s,2"]}},{atom:94,initials:"Pu",latin:"Plutonium",mass:244.064,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,6","7,s,2"]}},{atom:95,initials:"Am",latin:"Americium",mass:243.061,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,7","7,s,2"]}},{atom:96,initials:"Cm",latin:"Curium",mass:247.07,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,7","6,d,1","7,s,2"]}},{atom:97,initials:"Bk",latin:"Berkelium",mass:247.07,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,9","7,s,2"]}},{atom:98,initials:"Cf",latin:"Californium",mass:251.08,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,10","7,s,2"]}},{atom:99,initials:"Es",latin:"Einsteinium",mass:254,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,11","7,s,2"]}},{atom:100,initials:"Fm",latin:"Fermium",mass:257.095,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,12","7,s,2"]}},{atom:101,initials:"Md",latin:"Mendelevium",mass:258.1,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,13","7,s,2"]}},{atom:102,initials:"No",latin:"Nobelium",mass:259.101,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,14","7,s,2"]}},{atom:103,initials:"Lr",latin:"Lawrencium",mass:262,family:{name:"actinoids"},color:"--color-purple-l1",electrons:{base:"Rn",config:["5,f,14","7,s,2","7,p,1"]}},{atom:104,initials:"Rf",latin:"Rutherfordium",mass:261,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,2","7,s,2"]}},{atom:105,initials:"Db",latin:"Dubnium",mass:262,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,3","7,s,2"]}},{atom:106,initials:"Sg",latin:"Seaborgium",mass:266,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,4","7,s,2"]}},{atom:107,initials:"Bh",latin:"Bohrium",mass:264,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,5","7,s,2"]}},{atom:108,initials:"Hs",latin:"Hassium",mass:269,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,6","7,s,2"]}},{atom:109,initials:"Mt",latin:"Meitnerium",mass:278,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,7","7,s,2"]}},{atom:110,initials:"Ds",latin:"Darmstadtium",mass:281,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,8","7,s,2"]}},{atom:111,initials:"Rg",latin:"Roentgenium",mass:280,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,9","7,s,2"]}},{atom:112,initials:"Cn",latin:"Copernicium",mass:285,family:{name:"transitionMetals"},color:"--color-yellow-l1",electrons:{base:"Rn",config:["5,f,14","6,d,10","7,s,2"]}},{atom:113,initials:"Nh",latin:"Nihonium",mass:286,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Rn",config:["5,f,14","6,d,10","7,s,2","7,p,1"]}},{atom:114,initials:"Fl",latin:"Flerovium",mass:289,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Rn",config:["5,f,14","6,d,10","7,s,2","7,p,2"]}},{atom:115,initials:"Mc",latin:"Moscovium",mass:289,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Rn",config:["5,f,14","6,d,10","7,s,2","7,p,3"]}},{atom:116,initials:"Lv",latin:"Livermorium",mass:293,family:{name:"postTransitionMetals"},color:"--color-turquoise-l1",electrons:{base:"Rn",config:["5,f,14","6,d,10","7,s,2","7,p,4"]}},{atom:117,initials:"Ts",latin:"Tennessine",mass:294,family:{name:"halogens"},color:"--color-blue-l1",electrons:{base:"Rn",config:["5,f,14","6,d,10","7,s,2","7,p,5"]}},{atom:118,initials:"Og",latin:"Oganesson",mass:294,family:{name:"nobleGases"},color:"--color-sapphire-l1",electrons:{base:"Rn",config:["5,f,14","6,d,10","7,s,2","7,p,6"]}}]},"996e":function(a,e,t){"use strict";var o=t("f3e8"),i=t.n(o);i.a},"9b19":function(a,e,t){a.exports=t.p+"img/logo.88037ec8.svg"},"9d41":function(a){a.exports={ui:{appDescription:"...",ConsultingByMaxim:"...",chemicalElement:"...",selectLanguage:"...",license:"...",search:"...",close:"...",back:"..."},families:{hydrogen:"...",nobleGases:"...",halogens:"...",alkaliMetals:"...",alkalineEarthMetals:"...",transitionMetals:"...",postTransitionMetals:"...",semimetals:"...",nonMetals:"...",lanthanoids:"...",actinoids:"..."},chemical:{family:"...",atomicMass:"...",electronicConfiguration:"..."}}},c161:function(a,e,t){"use strict";var o=t("54a6"),i=t.n(o);i.a},cf25:function(a,e,t){"use strict";var o=t("0cfb"),i=t.n(o);i.a},f3e8:function(a,e,t){}});