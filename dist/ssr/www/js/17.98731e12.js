(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{3076:function(t,e,a){"use strict";var n=a("5e89"),r=a.n(n);r.a},"392b":function(t,e,a){"use strict";a("4d90"),a("5319");var n,r,o={data(){return{prevRoute:null}},beforeRouteEnter(t,e,a){a((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,a){return t.replace(new RegExp(e,"g"),a)},resolveAssetsUrl:function(t){return"https://api.bake-free.co/"+t},showNotif:function(t,e){this.$q.notify({color:t?"green-4":"negative",textColor:"white",icon:t?"check_circle_outline":"error_outline",timeout:"2500",position:"top",message:e})},returnToPageIndex:function(t){this.prevRoute&&"/"!==this.prevRoute.path?this.$router.go(-1):this.$router.push(t).catch((t=>{}))},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},toHumanReadableDt:function(t){const e=new Date(t);return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+" "+e.getHours().toString().padStart(2,0)+":"+e.getMinutes().toString().padStart(2,0):t}}},i=o,s=a("2877"),l=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},"5e89":function(t,e,a){},"65a3":function(t,e,a){},"9b36":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-px-md q-pt-lg"},[a("div",{staticClass:"page-heading text-white q-pa-md"},[a("div",{staticClass:"heading-caption"},[a("h6",[t._v("Add Category")]),a("br"),a("p",[t._v("\n                Fill out the form to create a new category in the webstore.\n            ")])])]),a("div",{staticClass:"page-contents text-white q-pa-md"},[a("div",{staticClass:"content-1"},[a("div",{staticClass:"text-subtitle2 flex flex-center"},[a("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"account_circle"}}),t._v("New Category Info\n            ")],1),a("div",[a("q-form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)}}},[a("q-list",{staticClass:"detail-list",attrs:{separator:""}},[a("q-item",{staticClass:"detail-field"},[a("span",{staticClass:"field-label"},[t._v("Category Name")]),a("q-input",{staticClass:"field-value",attrs:{type:"text",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Field required. ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()}]},model:{value:t.category.name,callback:function(e){t.$set(t.category,"name",e)},expression:"category.name"}})],1),a("q-item",{staticClass:"detail-field"},[a("span",{staticClass:"field-label"},[t._v("Difficulty Scale")]),a("q-slider",{staticClass:"field-value q-mx-xs",attrs:{min:1,max:3,"label-value":["Easy","Medium","Hard"][t.category.difficulty-1],label:"",color:"green-4"},model:{value:t.category.difficulty,callback:function(e){t.$set(t.category,"difficulty",e)},expression:"category.difficulty"}})],1)],1),a("q-separator"),a("div",{staticClass:"q-pa-md"},[a("q-btn",{attrs:{label:"Create",type:"submit",color:"primary",loading:t.loading,disable:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[a("q-spinner-gears")]},proxy:!0}])})],1)],1)],1)]),a("div",{staticClass:"content-2"})])])},r=[],o=a("c973"),i=a.n(o),s=a("392b");let l=null;var c={name:"CategoryAdd",mixins:[s["a"]],meta(){return{title:"Add Category"}},beforeCreate(){l=this.$RepositoryFactory.get("categories")},data(){return{loading:!1,category:{name:"",difficulty:1}}},methods:{onSubmit:function(){var t=i()((function*(t){this.loading=!0;try{yield l.addCategory(this.category),this.showNotif(!0,"Created new product category."),this.returnToPageIndex("/categories")}catch(e){this.showNotif(!1,"Could not create product category. ")}finally{this.loading=!1}}));return function(e){return t.apply(this,arguments)}}()}},u=c,d=(a("e00e"),a("3076"),a("2877")),g=a("9989"),f=a("0016"),p=a("0378"),m=a("1c1c"),y=a("66e5"),h=a("27f9"),v=a("c1d0"),b=a("eb85"),w=a("9c40"),C=a("cf57"),D=a("8572"),S=a("eebe"),x=a.n(S),q=Object(d["a"])(u,n,r,!1,null,"8ce29020",null);e["default"]=q.exports;x()(q,"components",{QPage:g["a"],QIcon:f["a"],QForm:p["a"],QList:m["a"],QItem:y["a"],QInput:h["a"],QSlider:v["a"],QSeparator:b["a"],QBtn:w["a"],QSpinnerGears:C["a"],QField:D["a"]})},e00e:function(t,e,a){"use strict";var n=a("65a3"),r=a.n(n);r.a}}]);