(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["primaryProduct"],{"014b":function(t,e,r){"use strict";var n=r("e53d"),a=r("07e3"),i=r("8e60"),c=r("63b6"),s=r("9138"),o=r("ebfd").KEY,l=r("294c"),u=r("dbdb"),f=r("45f2"),d=r("62a0"),p=r("5168"),b=r("ccb9"),v=r("6718"),m=r("47ee"),h=r("9003"),y=r("e4ae"),C=r("f772"),_=r("36c3"),g=r("1bc3"),x=r("aebd"),O=r("a159"),w=r("0395"),P=r("bf0b"),S=r("d9f6"),j=r("c3a1"),k=P.f,E=S.f,$=w.f,D=n.Symbol,A=n.JSON,N=A&&A.stringify,F="prototype",B=p("_hidden"),I=p("toPrimitive"),R={}.propertyIsEnumerable,M=u("symbol-registry"),J=u("symbols"),T=u("op-symbols"),q=Object[F],H="function"==typeof D,K=n.QObject,U=!K||!K[F]||!K[F].findChild,W=i&&l(function(){return 7!=O(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=k(q,e);n&&delete q[e],E(t,e,r),n&&t!==q&&E(q,e,n)}:E,G=function(t){var e=J[t]=O(D[F]);return e._k=t,e},L=H&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},Y=function(t,e,r){return t===q&&Y(T,e,r),y(t),e=g(e,!0),y(r),a(J,e)?(r.enumerable?(a(t,B)&&t[B][e]&&(t[B][e]=!1),r=O(r,{enumerable:x(0,!1)})):(a(t,B)||E(t,B,x(1,{})),t[B][e]=!0),W(t,e,r)):E(t,e,r)},z=function(t,e){y(t);var r,n=m(e=_(e)),a=0,i=n.length;while(i>a)Y(t,r=n[a++],e[r]);return t},Q=function(t,e){return void 0===e?O(t):z(O(t),e)},V=function(t){var e=R.call(this,t=g(t,!0));return!(this===q&&a(J,t)&&!a(T,t))&&(!(e||!a(this,t)||!a(J,t)||a(this,B)&&this[B][t])||e)},X=function(t,e){if(t=_(t),e=g(e,!0),t!==q||!a(J,e)||a(T,e)){var r=k(t,e);return!r||!a(J,e)||a(t,B)&&t[B][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=$(_(t)),n=[],i=0;while(r.length>i)a(J,e=r[i++])||e==B||e==o||n.push(e);return n},tt=function(t){var e,r=t===q,n=$(r?T:_(t)),i=[],c=0;while(n.length>c)!a(J,e=n[c++])||r&&!a(q,e)||i.push(J[e]);return i};H||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===q&&e.call(T,r),a(this,B)&&a(this[B],t)&&(this[B][t]=!1),W(this,t,x(1,r))};return i&&U&&W(q,t,{configurable:!0,set:e}),G(t)},s(D[F],"toString",function(){return this._k}),P.f=X,S.f=Y,r("6abf").f=w.f=Z,r("355d").f=V,r("9aa9").f=tt,i&&!r("b8e3")&&s(q,"propertyIsEnumerable",V,!0),b.f=function(t){return G(p(t))}),c(c.G+c.W+c.F*!H,{Symbol:D});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)p(et[rt++]);for(var nt=j(p.store),at=0;nt.length>at;)v(nt[at++]);c(c.S+c.F*!H,"Symbol",{for:function(t){return a(M,t+="")?M[t]:M[t]=D(t)},keyFor:function(t){if(!L(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),c(c.S+c.F*!H,"Object",{create:Q,defineProperty:Y,defineProperties:z,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),A&&c(c.S+c.F*(!H||l(function(){var t=D();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(r=e=n[1],(C(e)||void 0!==t)&&!L(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!L(e))return e}),n[1]=e,N.apply(A,n)}}),D[F][I]||r("35e8")(D[F],I,D[F].valueOf),f(D,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},"0395":function(t,e,r){var n=r("36c3"),a=r("6abf").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?s(t):a(n(t))}},1369:function(t,e,r){},"268f":function(t,e,r){t.exports=r("fde4")},"2f21":function(t,e,r){"use strict";var n=r("79e5");t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},"32a6":function(t,e,r){var n=r("241e"),a=r("c3a1");r("ce7e")("keys",function(){return function(t){return a(n(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"3add":function(t,e,r){"use strict";var n=r("986d"),a=r.n(n);a.a},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"47ee":function(t,e,r){var n=r("c3a1"),a=r("9aa9"),i=r("355d");t.exports=function(t){var e=n(t),r=a.f;if(r){var c,s=r(t),o=i.f,l=0;while(s.length>l)o.call(t,c=s[l++])&&e.push(c)}return e}},"55dd":function(t,e,r){"use strict";var n=r("5ca1"),a=r("d8e8"),i=r("4bf8"),c=r("79e5"),s=[].sort,o=[1,2,3];n(n.P+n.F*(c(function(){o.sort(void 0)})||!c(function(){o.sort(null)})||!r("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),a(t))}})},"5da9":function(t,e,r){"use strict";var n=r("1369"),a=r.n(n);a.a},6718:function(t,e,r){var n=r("e53d"),a=r("584a"),i=r("b8e3"),c=r("ccb9"),s=r("d9f6").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:c.f(t)})}},"6abf":function(t,e,r){var n=r("e6f3"),a=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},"85f2":function(t,e,r){t.exports=r("454f")},"8aae":function(t,e,r){r("32a6"),t.exports=r("584a").Object.keys},"986d":function(t,e,r){},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},"9bac":function(t,e,r){},a4bb:function(t,e,r){t.exports=r("8aae")},b3da:function(t,e,r){"use strict";var n=r("dc63"),a=r.n(n);a.a},b99b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("carouselProduct"),r("div",{staticClass:"container mt-5"},[r("cellphoneSidebar",{staticClass:"my-4"}),r("div",{staticClass:"container side"},[r("desktopSidebar"),r("div",{staticClass:"row"},t._l(t.filterSort,function(e){return r("div",{key:e.id,staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"card shadow-lg bg-light rounded mb-4"},[r("div",{staticClass:"primaryProduct"},[r("img",{staticClass:"img-fluid mx-auto d-block primaryProduct-pic",attrs:{src:e.imageUrl,alt:""},on:{click:function(r){return r.preventDefault(),t.toDetail(e.id)}}})]),r("div",{staticClass:"card-body p-2"},[r("h5",{staticClass:"card-title text-center"},[t._v(t._s(e.title))]),r("div",{staticClass:"d-flex justify-content-center"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.content))])]),r("div",{staticClass:"d-flex flex-column align-items-center"},[r("div",{staticClass:"d-flex flex-column align-items-center"},[e.price?t._e():r("div",{staticClass:"h5"},[t._v(t._s(e.origin_price))]),e.price?r("del",{staticClass:"h6 text-secondary"},[t._v("原價"+t._s(e.origin_price))]):t._e(),e.price?r("div",{staticClass:"h5"},[t._v("特價"+t._s(t._f("currency")(e.price)))]):t._e()])]),r("div",{staticClass:"card-body-cart",on:{click:function(r){return r.preventDefault(),t.addtoCart(e.id)}}},[r("i",{staticClass:"fas fa-shopping-cart"}),r("button",{staticClass:"card-body-cart-word",attrs:{type:"button"}},[t._v("加入購物車")])])]),r("div",{staticClass:"card-footer bg-white"},[r("button",{staticClass:"card-footer-buy",attrs:{type:"button"},on:{click:function(r){return t.getProduct(e.id)}}},[r("i",{staticClass:"fa fa-caret-right",staticStyle:{"padding-left":"3px"}}),t._v("\n                立即搶購\n              ")])])])])}),0),r("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-lg modal-my",attrs:{role:"document"}},[r("div",{staticClass:"modal-content border-0"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._m(0)]),r("div",{staticClass:"modal-body d-flex flex-column flex-lg-row justify-content-between"},[r("img",{staticClass:"mx-auto img-fluid",attrs:{src:t.product.imageUrl}}),r("div",{staticClass:"d-flex flex-column p-3"},[r("blockquote",{staticClass:"blockquote"},[r("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),r("footer",{staticClass:"blockquote-footer"},[t._v(t._s(t.product.description))])]),r("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():r("div",{staticClass:"h5"},[t._v(t._s(t.product.origin_price))]),t.product.price?r("del",{staticClass:"h6"},[t._v("原價"+t._s(t.product.origin_price))]):t._e(),t.product.price?r("div",{staticClass:"h5"},[t._v("現在只要"+t._s(t.product.price))]):t._e()]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.product,"num",e.target.multiple?r:r[0])}}},t._l(10,function(e){return r("option",{key:e,domProps:{value:e}},[t._v("選購"+t._s(e)+t._s(t.product.unit))])}),0)])]),r("div",{staticClass:"modal-footer"},[r("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n                小計\n                "),r("strong",[t._v(t._s(t.product.price*t.product.num))])]),r("button",{staticClass:"modal-footer-cart",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(t.product.id,t.product.num)}}},[r("i",{staticClass:"fas fa-shopping-cart"}),t._v("\n                加到購物車\n              ")])])])])])],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=(r("55dd"),r("cebc")),c=r("1157"),s=r.n(c),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"carousel slide carousel-fade all",attrs:{id:"carouselExampleFade","data-ride":"carousel"}},[r("div",{staticClass:"carousel-inner"},[r("div",{staticClass:"carousel-item active",attrs:{"data-interval":"2000"}},[r("div",{staticClass:"carousel-product carousel-product-1"})]),r("div",{staticClass:"carousel-item",attrs:{"data-interval":"2000"}},[r("div",{staticClass:"carousel-product carousel-product-2"},[r("p",[t._v("輕易 不說完美")])])]),r("div",{staticClass:"carousel-item",attrs:{"data-interval":"2000"}},[r("div",{staticClass:"carousel-product carousel-product-3"},[r("p",[t._v("\n          大 不 凡 你的掌上巨屏\n        ")])])])]),r("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"prev"}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Previous")])]),r("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"next"}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Next")])])])}],u=(r("b3da"),r("2877")),f={},d=Object(u["a"])(f,o,l,!1,null,"5ddbff9e",null),p=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-column align-items-center desk"},[r("span",[t._v("品牌")]),r("ul",{staticClass:"brand"},t._l(t.categories,function(e,n){return r("li",{key:e+n,staticClass:"brand-item",class:{focus:e===t.brand},on:{click:function(r){return t.filterBrand(r,e)}}},[r("a",{class:{focus:e===t.brand},attrs:{href:"#"}},[t._v(t._s(e))])])}),0),r("span",[t._v("價格")]),r("ul",{staticClass:"price"},t._l(t.priceArr,function(e,n){return r("li",{key:e+n,staticClass:"price-item",class:{focus:e===t.price},on:{click:function(r){return t.priceSort(r,e)}}},[r("a",{class:{focus:e===t.price},attrs:{href:"#"}},[t._v(t._s(e))])])}),0),r("div",{staticClass:"reset",on:{click:function(e){return t.resetHandler()}}},[r("i",{staticClass:"fa fa-caret-right"}),r("button",{staticClass:"reset-word",attrs:{type:"button"}},[t._v("重新篩選")])])])},v=[],m=r("2f62"),h={data:function(){return{priceArr:["由高~低","由低~高"]}},methods:{filterBrand:function(t,e){t.preventDefault(),this.$store.commit("BRAND",e)},priceSort:function(t,e){t.preventDefault(),this.$store.commit("PRICE",e)},resetHandler:function(){this.$store.commit("BRAND","全部"),this.$store.commit("PRICE","")}},computed:Object(i["a"])({},Object(m["c"])(["brand","categories"]),{price:function(){return this.$store.getters.price}})},y=h,C=(r("5da9"),Object(u["a"])(y,b,v,!1,null,null,null)),_=C.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cellphone"},[r("div",{staticClass:"cellphone-flex"},[r("div",{staticClass:"cellphone-flex-item"},[r("span",[t._v("品牌")]),r("ul",{staticClass:"brand"},t._l(t.categories,function(e,n){return r("li",{key:e+n,staticClass:"brand-item",class:{focus:e===t.brand},on:{click:function(r){return t.filterBrand(r,e)}}},[r("a",{class:{focus:e===t.brand},attrs:{href:"#"}},[t._v(t._s(e))])])}),0)]),r("div",{staticClass:"cellphone-flex-item"},[r("span",[t._v("價格")]),r("ul",{staticClass:"price"},t._l(t.priceArr,function(e,n){return r("li",{key:e+n,staticClass:"price-item",class:{focus:e===t.price},on:{click:function(r){return t.priceSort(r,e)}}},[r("a",{class:{focus:e===t.price},attrs:{href:"#"}},[t._v(t._s(e))])])}),0)])]),r("div",{staticClass:"reset"},[r("i",{staticClass:"fa fa-caret-right"}),r("button",{staticClass:"reset-word",attrs:{type:"button"},on:{click:function(e){return t.resetHandler()}}},[t._v("重新篩選")])])])},x=[],O={data:function(){return{priceArr:["由高~低","由低~高"]}},methods:{filterBrand:function(t,e){t.preventDefault(),this.$store.commit("BRAND",e)},priceSort:function(t,e){t.preventDefault(),this.$store.commit("PRICE",e)},resetHandler:function(){this.$store.commit("BRAND","全部"),this.$store.commit("PRICE","")}},computed:Object(i["a"])({},Object(m["c"])(["brand","categories","price"]))},w=O,P=(r("3add"),Object(u["a"])(w,g,x,!1,null,null,null)),S=P.exports,j={methods:Object(i["a"])({},Object(m["b"])(["getAllProducts"]),{getProduct:function(t){this.$store.commit("GETPRODUCT",{}),this.$store.dispatch("getProduct",t),s()("#productModal").modal("show")},addtoCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue-course-api.hexschool.io","/api/adam/cart"),a={product_id:t,qty:r};this.$http.post(n,{data:a}).then(function(t){console.log(t),t.data.success&&(e.$bus.$emit("show"),e.$bus.$emit("dark")),s()("#productModal").modal("hide")})},toDetail:function(t){var e=this;e.$router.push("/detail/".concat(t))}}),computed:Object(i["a"])({},Object(m["c"])(["AllProducts","product","brand","price"]),{filterBrand:function(){var t=this;return"全部"===this.brand?this.AllProducts:this.AllProducts.filter(function(e){return e.category===t.brand})},filterSort:function(){return"由高~低"===this.price?this.filterBrand.sort(function(t,e){return parseInt(t.price)<parseInt(e.price)?1:-1}):"由低~高"===this.price?this.filterBrand.sort(function(t,e){return parseInt(t.price)>parseInt(e.price)?1:-1}):this.filterBrand}}),created:function(){this.getAllProducts()},components:{desktopSidebar:_,cellphoneSidebar:S,carouselProduct:p}},k=j,E=(r("bb19"),Object(u["a"])(k,n,a,!1,null,null,null));e["default"]=E.exports},bb19:function(t,e,r){"use strict";var n=r("9bac"),a=r.n(n);a.a},bd86:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("85f2"),a=r.n(n);function i(t,e,r){return e in t?a()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},bf0b:function(t,e,r){var n=r("355d"),a=r("aebd"),i=r("36c3"),c=r("1bc3"),s=r("07e3"),o=r("794b"),l=Object.getOwnPropertyDescriptor;e.f=r("8e60")?l:function(t,e){if(t=i(t),e=c(e,!0),o)try{return l(t,e)}catch(r){}if(s(t,e))return a(!n.f.call(t,e),t[e])}},bf90:function(t,e,r){var n=r("36c3"),a=r("bf0b").f;r("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return a(n(t),e)}})},ccb9:function(t,e,r){e.f=r("5168")},ce7e:function(t,e,r){var n=r("63b6"),a=r("584a"),i=r("294c");t.exports=function(t,e){var r=(a.Object||{})[t]||Object[t],c={};c[t]=e(r),n(n.S+n.F*i(function(){r(1)}),"Object",c)}},cebc:function(t,e,r){"use strict";r.d(e,"a",function(){return u});var n=r("268f"),a=r.n(n),i=r("e265"),c=r.n(i),s=r("a4bb"),o=r.n(s),l=r("bd86");function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=o()(r);"function"===typeof c.a&&(n=n.concat(c()(r).filter(function(t){return a()(r,t).enumerable}))),n.forEach(function(e){Object(l["a"])(t,e,r[e])})}return t}},dc63:function(t,e,r){},e265:function(t,e,r){t.exports=r("ed33")},ebfd:function(t,e,r){var n=r("62a0")("meta"),a=r("f772"),i=r("07e3"),c=r("d9f6").f,s=0,o=Object.isExtensible||function(){return!0},l=!r("294c")(function(){return o(Object.preventExtensions({}))}),u=function(t){c(t,n,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!o(t))return"F";if(!e)return"E";u(t)}return t[n].i},d=function(t,e){if(!i(t,n)){if(!o(t))return!0;if(!e)return!1;u(t)}return t[n].w},p=function(t){return l&&b.NEED&&o(t)&&!i(t,n)&&u(t),t},b=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},ed33:function(t,e,r){r("014b"),t.exports=r("584a").Object.getOwnPropertySymbols},fde4:function(t,e,r){r("bf90");var n=r("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=primaryProduct.28f76b6f.js.map