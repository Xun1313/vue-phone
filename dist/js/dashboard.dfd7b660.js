(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"09ec":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("navbar"),a("Alert"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("sidebar"),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[a("router-view")],1)],1)])],1)},n=[],i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("router-link",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0 text-center",attrs:{to:"/"}},[t._v("\n    首頁\n    "),a("i",{staticClass:"fas fa-home"})]),a("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.signout}},[t._v("Sign out")])])])],1)},l=[],r={methods:{signout:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/logout");this.$http.post(s).then(function(s){console.log(s.data),s.data.success&&t.$router.push("/login")})}}},c=r,o=a("2877"),u=Object(o["a"])(c,i,l,!1,null,null,null),m=u.exports,d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[a("i",{staticClass:"fas fa-box-open"}),t._v("\n          產品列表\n        ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[a("i",{staticClass:"far fa-list-alt"}),t._v("\n          訂單列表\n        ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon"}},[a("i",{staticClass:"far fa-money-bill-alt"}),t._v("\n          優惠券\n        ")])],1)])])])},v=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("管理員")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])}],f={},h=Object(o["a"])(f,d,v,!1,null,null,null),p=h.exports,b=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-alert"},t._l(t.messages,function(s,e){return a("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[t._v("\n    "+t._s(s.message)+"\n    "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeMessage(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},g=[],C=(a("ac6a"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,s){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:s,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var s=this;setTimeout(function(){s.messages.forEach(function(a,e){a.timestamp===t&&s.messages.splice(e,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("push",function(s){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(s,a)})}}),_=C,x=(a("5d80"),Object(o["a"])(_,b,g,!1,null,"6366d674",null)),k=x.exports,w={components:{navbar:m,sidebar:p,Alert:k}},$=w,M=Object(o["a"])($,e,n,!1,null,null,null);s["default"]=M.exports},"5d80":function(t,s,a){"use strict";var e=a("7232"),n=a.n(e);n.a},7232:function(t,s,a){}}]);
//# sourceMappingURL=dashboard.dfd7b660.js.map