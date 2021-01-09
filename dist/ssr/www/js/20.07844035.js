(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"33e4":function(t,e,n){},"392b":function(t,e,n){"use strict";n("4d90"),n("5319");var a,s,i={data(){return{prevRoute:null}},beforeRouteEnter(t,e,n){n((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,n){return t.replace(new RegExp(e,"g"),n)},resolveAssetsUrl:function(t){return"https://api.bake-free.co/"+t},showNotif:function(t,e){this.$q.notify({color:t?"green-4":"negative",textColor:"white",icon:t?"check_circle_outline":"error_outline",timeout:"2500",position:"top",message:e})},returnToPageIndex:function(t){this.prevRoute&&"/"!==this.prevRoute.path?this.$router.go(-1):this.$router.push(t).catch((t=>{}))},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},toHumanReadableDt:function(t){const e=new Date(t);return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+" "+e.getHours().toString().padStart(2,0)+":"+e.getMinutes().toString().padStart(2,0):t}}},o=i,r=n("2877"),c=Object(r["a"])(o,a,s,!1,null,null,null);e["a"]=c.exports},"791f":function(t,e,n){"use strict";var a=n("33e4"),s=n.n(a);s.a},b49c:function(t,e,n){"use strict";var a=n("b94d"),s=n.n(a);s.a},b94d:function(t,e,n){},bda4:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"q-px-md q-pt-lg"},[n("div",{staticClass:"page-heading text-white q-pa-md"},[n("div",{staticClass:"heading-caption"},[n("h6",[t._v("Add Discount Rule")]),n("br"),n("p",[t._v("Fill the form to add a new product discount entry.")])])]),n("div",{staticClass:"page-contents text-white q-pa-md"},[n("div",{staticClass:"content-1"},[n("div",{staticClass:"text-subtitle2 flex flex-center"},[n("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"account_circle"}}),t._v("Discount Details\n            ")],1),n("div",[n("q-form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)}}},[n("q-list",{staticClass:"detail-list",attrs:{separator:""}},[n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Starts from")]),n("q-input",{staticClass:"field-value",attrs:{dense:"",outlined:"","hide-bottom-space":"",dark:"",rules:[function(t){return null!==t&&""!==t.trim()},t._isValidDatetime]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{dark:"","no-unset":"",mask:"YYYY-MM-DD HH:mm"},on:{input:function(){return t.$refs.qDateProxyS.hide()}},model:{value:t.discount.start,callback:function(e){t.$set(t.discount,"start",e)},expression:"discount.start"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[n("q-popup-proxy",{ref:"qTimeProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-time",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:function(){return t.$refs.qTimeProxyS.hide()}},model:{value:t.discount.start,callback:function(e){t.$set(t.discount,"start",e)},expression:"discount.start"}})],1)],1)]},proxy:!0}]),model:{value:t.discount.start,callback:function(e){t.$set(t.discount,"start",e)},expression:"discount.start"}})],1),n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Ends at")]),n("q-input",{staticClass:"field-value",attrs:{dense:"",outlined:"","hide-bottom-space":"",dark:"","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()},t._isValidDatetime,t._isValidEndDt]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxyE",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{dark:"","no-unset":"",mask:"YYYY-MM-DD HH:mm"},on:{input:function(){return t.$refs.qDateProxyE.hide()}},model:{value:t.discount.end,callback:function(e){t.$set(t.discount,"end",e)},expression:"discount.end"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[n("q-popup-proxy",{ref:"qTimeProxyE",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-time",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:function(){return t.$refs.qTimeProxyE.hide()}},model:{value:t.discount.end,callback:function(e){t.$set(t.discount,"end",e)},expression:"discount.end"}})],1)],1)]},proxy:!0}]),model:{value:t.discount.end,callback:function(e){t.$set(t.discount,"end",e)},expression:"discount.end"}})],1),n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Target Customer")]),n("q-select",{staticClass:"field-value",attrs:{options:t.targets,dark:"",dense:"",outlined:"","hide-bottom-space":"","options-dense":"","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()},function(e){return t.targets.includes(e)}]},on:{input:function(e){t.hasSelect=!0}},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"person_outline"}})]},proxy:!0}]),model:{value:t.discount.target,callback:function(e){t.$set(t.discount,"target",e)},expression:"discount.target"}})],1),n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Discount (%)")]),n("q-slider",{staticClass:"field-value q-mx-xs",attrs:{min:1,max:99,label:"",color:"green-4"},model:{value:t.discount.value,callback:function(e){t.$set(t.discount,"value",e)},expression:"discount.value"}})],1),n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Apply to")]),n("q-select",{staticClass:"field-value products-select",attrs:{options:t.options,label:"Products","hide-dropdown-icon":"","hide-bottom-space":"",dark:"",outlined:"",multiple:"","use-chips":"","use-input":"","emit-value":"","map-options":"","lazy-rules":"",rules:[function(t){return null!==t&&t.length>0}]},on:{filter:t.filterFn},scopedSlots:t._u([{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-italic text-grey"},[t._v("\n                                            No products found.\n                                        ")])],1)]},proxy:!0}]),model:{value:t.discount.products,callback:function(e){t.$set(t.discount,"products",e)},expression:"discount.products"}})],1)],1),n("q-separator"),n("div",{staticClass:"q-pa-md"},[n("q-btn",{attrs:{label:"Create",type:"submit",color:"primary",loading:t.loading,disable:t.loading||!t.hasSelect},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-gears")]},proxy:!0}])})],1)],1)],1)]),n("div",{staticClass:"content-2"})])])},s=[],i=(n("c975"),n("498a"),n("c973")),o=n.n(i),r=n("392b");let c=null,l=null;var u={name:"DiscountAdd",mixins:[r["a"]],meta(){return{title:"Add Discount Rule"}},beforeCreate(){c=this.$RepositoryFactory.get("discounts"),l=this.$RepositoryFactory.get("products")},created(){this.discount.start=this.today.yyyymmdd+" 00:00",this.discount.end=this.today.yyyymmdd+" 23:59",this.getProducts()},data(){return{loading:!1,hasSelect:!0,targets:["All","Regular","Reseller","Partner"],options:null,productsList:[],discount:{value:10,target:"All",products:null,start:"",end:""}}},methods:{_isValidDatetime(t){const e=/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;return e.test(t)||"Invalid date & time format"},_isValidEndDt(t){const e=new Date(t),n=new Date(this.discount.start);return e.getTime()>n.getTime()||"End date needs to be greater"},filterFn(t,e,n){t&&""!=t.trim()?e((()=>{const e=t.toLowerCase();this.options=this.productsList.filter((t=>t.label.toLowerCase().indexOf(e)>-1))})):n()},getProducts(){var t=this;return o()((function*(){l.getProductSelection().then((e=>{t.productsList=e})).catch((e=>{t.productsList=[]}))}))()},onSubmit:function(){var t=o()((function*(t){this.loading=!0;try{yield c.addDiscount(this.discount),this.showNotif(!0,"Added new discount entry."),this.returnToPageIndex("/discounts")}catch(e){this.showNotif(!1,"Could not create discount entry. ")}finally{this.loading=!1}}));return function(e){return t.apply(this,arguments)}}()}},d=u,p=(n("791f"),n("b49c"),n("2877")),f=n("9989"),m=n("0016"),h=n("0378"),g=n("1c1c"),y=n("66e5"),v=n("27f9"),D=n("7cbe"),b=n("52ee"),x=n("ca78"),q=n("ddd8"),S=n("c1d0"),C=n("4074"),w=n("eb85"),k=n("9c40"),_=n("cf57"),Y=n("8572"),M=n("b047"),$=n("eebe"),P=n.n($),Q=Object(p["a"])(d,a,s,!1,null,"1597f7bf",null);e["default"]=Q.exports;P()(Q,"components",{QPage:f["a"],QIcon:m["a"],QForm:h["a"],QList:g["a"],QItem:y["a"],QInput:v["a"],QPopupProxy:D["a"],QDate:b["a"],QTime:x["a"],QSelect:q["a"],QSlider:S["a"],QItemSection:C["a"],QSeparator:w["a"],QBtn:k["a"],QSpinnerGears:_["a"],QField:Y["a"],QChip:M["a"]})}}]);