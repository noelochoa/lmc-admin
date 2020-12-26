(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"392b":function(t,e,a){"use strict";a("4d90"),a("5319");var s,r,n={data(){return{prevRoute:null}},beforeRouteEnter(t,e,a){a((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,a){return t.replace(new RegExp(e,"g"),a)},resolveAssetsUrl:function(t){return"https://api.bake-free.co/"+t},showNotif:function(t,e){this.$q.notify({color:t?"green-4":"negative",textColor:"white",icon:t?"check_circle_outline":"error_outline",timeout:"2500",position:"top",message:e})},returnToPageIndex:function(t){this.prevRoute&&"/"!==this.prevRoute.path?this.$router.go(-1):this.$router.push(t).catch((t=>{}))},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},toHumanReadableDt:function(t){const e=new Date(t);return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+" "+e.getHours().toString().padStart(2,0)+":"+e.getMinutes().toString().padStart(2,0):t}}},i=n,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,null,null);e["a"]=l.exports},"3d6f":function(t,e,a){"use strict";var s=a("404e"),r=a.n(s);r.a},"404e":function(t,e,a){},"85a1":function(t,e,a){},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-px-md q-pt-lg"},[a("div",{staticClass:"page-heading text-white q-pa-md"},[a("div",{staticClass:"heading-caption"},[a("h6",[t._v("Dashboard")]),a("br"),a("p",[t._v("Here are some of the recent activities in your shop.")])]),a("div",{staticClass:"heading-stat-1 text-caption"},[t._v("\n            Accounts\n            "),a("br"),t.customers.loading?a("p",{staticClass:"text-subtitle2"},[a("q-spinner",{attrs:{color:"white",size:"2em"}})],1):t.customers.hasError?a("p",{staticClass:"text-subtitle2"},[t._v("\n                Error retrieving data.\n            ")]):a("p",{staticClass:"text-subtitle2"},[t._v("\n                "+t._s(t.customers.data.regular)+" Customers "),a("br"),t._v("\n                "+t._s(t.customers.data.reseller)+" Resellers\n            ")])]),a("div",{staticClass:"heading-stat-2 text-caption"},[t._v("\n            Products\n            "),t.products.loading?a("p",{staticClass:"text-subtitle2"},[a("q-spinner",{attrs:{color:"white",size:"2em"}})],1):t.products.hasError?a("p",{staticClass:"text-subtitle2"},[t._v("\n                Error retrieving data.\n            ")]):a("p",{staticClass:"text-subtitle2"},[t._v("\n                "+t._s(t.products.data.active)+" Active /\n                "+t._s(t.products.data.total)+" Total\n            ")])]),a("div",{staticClass:"heading-stat-3 text-caption"},[t._v("\n            Orders for this Month\n            "),t.orders.loading?a("p",{staticClass:"text-subtitle2"},[a("q-spinner",{attrs:{color:"white",size:"2em"}})],1):t.orders.hasError?a("p",{staticClass:"text-subtitle2"},[t._v("\n                Error retrieving data.\n            ")]):a("p",{staticClass:"text-subtitle2"},[t._v("\n                "+t._s(t.orders.data.accepted)+" Accepted "),a("br"),t._v("\n                "+t._s(t.orders.data.placed)+" Placed\n            ")])])]),a("div",{staticClass:"page-contents text-white q-pa-md"},[a("div",{staticClass:"content-1"},[a("div",{staticClass:"text-subtitle2 flex flex-center"},[a("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"account_circle"}}),t._v("Resellers for Approval\n            ")],1),a("div",[t.pending.loading?a("p",{staticClass:"flex flex-center"},[a("q-spinner",{staticClass:"q-mt-sm",attrs:{color:"white",size:"2em"}})],1):t.pending.hasError?a("p",{staticClass:"flex flex-center q-mt-md"},[t._v("\n                    Error retrieving data.\n                ")]):t.pending.data.length<1?a("p",{staticClass:"text-center q-mt-md"},[t._v("\n                    No pending accounts\n                ")]):a("q-list",{attrs:{separator:""}},t._l(t.pending.data,(function(e){return a("Accounts",t._b({key:e.id},"Accounts",e,!1))})),1)],1),!t.pending.loading&&t.pending.data.length>0?a("div",[a("q-item",{staticClass:"text-center flex flex-center",attrs:{to:"/accounts",dense:""}},[t._v("\n                    see all\n                ")])],1):t._e()]),a("div",{staticClass:"content-2"},[a("div",{staticClass:"text-subtitle2 flex flex-center"},[a("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"cake"}}),t._v("\n                Products Statistics\n            ")],1),a("div",[t.products.loading?a("p",{staticClass:"flex flex-center"},[a("q-spinner",{staticClass:"q-mt-sm",attrs:{color:"white",size:"2em"}})],1):t.products.hasError?a("p",{staticClass:"flex flex-center q-mt-md"},[t._v("\n                    Error retrieving data.\n                ")]):a("q-list",{attrs:{separator:""}},t._l(t.productStats,(function(e){return a("Statistic",t._b({key:e.label},"Statistic",e,!1))})),1)],1),t.products.loading||t.products.hasError?t._e():a("div",[a("q-item",{staticClass:"text-center flex flex-center",attrs:{to:"/products",dense:""}},[t._v("\n                    see all\n                ")])],1)]),a("div",{staticClass:"content-3"},[a("div",{staticClass:"text-subtitle2 flex flex-center"},[a("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"fireplace"}}),t._v("Orders Statistics\n            ")],1),a("div",[t.orders.loading?a("p",{staticClass:"flex flex-center"},[a("q-spinner",{staticClass:"q-mt-sm",attrs:{color:"white",size:"2em"}})],1):t.orders.hasError?a("p",{staticClass:"flex flex-center q-mt-md"},[t._v("\n                    Error retrieving data.\n                ")]):a("q-list",{attrs:{separator:""}},t._l(t.orderStats,(function(e){return a("Statistic",t._b({key:e.label},"Statistic",e,!1))})),1)],1),t.orders.loading||t.orders.hasError?t._e():a("div",[a("q-item",{staticClass:"text-center flex flex-center",attrs:{to:"/orders",dense:""}},[t._v("\n                    see all\n                ")])],1)]),a("div",{staticClass:"content-4"},[a("div",{staticClass:"text-subtitle2 flex flex-center"},[a("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"comment"}}),t._v("Recent\n                Comments\n            ")],1),a("div",[t.recent.loading?a("p",{staticClass:"flex flex-center"},[a("q-spinner",{staticClass:"q-mt-sm",attrs:{color:"white",size:"2em"}})],1):t.recent.hasError?a("p",{staticClass:"flex flex-center q-mt-md"},[t._v("\n                    Error retrieving data.\n                ")]):t.recent.data.length<1?a("p",{staticClass:"text-center q-mt-md"},[t._v("\n                    No recent comments\n                ")]):a("q-list",{attrs:{separator:""}},t._l(t.recent.data,(function(e){return a("Comments",t._b({key:e.id},"Comments",e,!1))})),1)],1),!t.recent.loading&&t.recent.data.length>0?a("div",[a("q-item",{staticClass:"text-center flex flex-center",attrs:{to:"/comments",dense:""}},[t._v("\n                    see all\n                ")])],1):t._e()]),a("div",{staticClass:"content-5"},[a("div",{staticClass:"text-subtitle2 flex flex-center"},[a("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"calendar_today"}}),t._v("Business Holidays\n            ")],1),a("div",{staticClass:"bg-gray-alpha"},[a("q-item",{staticClass:"q-px-lg q-pt-lg no-select",attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.today.month))])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",{staticClass:"text-primary"},[t._v(t._s(t.today.year))])],1)],1),a("q-date",{staticClass:"date",attrs:{value:t.today.yyyymmdd,events:t.holidaysEvt,mask:"YYYY-MM-DD","event-color":"orange",flat:"",minimal:"",readonly:""}})],1),a("div",[a("q-item",{staticClass:"text-center flex flex-center",attrs:{to:"/holidays",dense:""}},[t._v("\n                    see all\n                ")])],1)])])])},r=[],n=(a("e6cf"),a("a79d"),a("ddb0"),a("c973")),i=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/accounts/edit/"+t.id}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{size:"32px",color:"primary"}},[t._v("\n            "+t._s(t.name_avatar)+"\n            ")])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.name))]),t.joined_format.length>0?a("q-item-label",{staticClass:"text-primary font-small",attrs:{caption:""}},[t._v(t._s(t.joined_format))]):t._e()],1),a("q-item-section",{staticClass:"text-white",attrs:{side:"",caption:""}},[t._v("Review")])],1)},l=[],c=(a("fb6a"),{name:"Accounts",props:{id:{type:String,required:!0},name:{type:String,required:!0},joined:{type:String,default:new Date}},computed:{name_avatar(){return this.name?this.name.slice(0,1).toUpperCase():""},joined_format(){if(!this.joined)return"";const t={weekday:"short",month:"short",day:"numeric"},e=new Date(this.joined);return"joined "+e.toLocaleDateString("en-US",t)}}}),d=c,m=(a("bb48"),a("2877")),u=a("66e5"),p=a("4074"),h=a("cb32"),v=a("58a81"),g=a("0170"),f=a("714f"),_=a("eebe"),x=a.n(_),y=Object(m["a"])(d,o,l,!1,null,"3066268f",null),b=y.exports;x()(y,"components",{QItem:u["a"],QItemSection:p["a"],QAvatar:h["a"],QBadge:v["a"],QItemLabel:g["a"]}),x()(y,"directives",{Ripple:f["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{to:t.link,clickable:!!t.link}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.label))])],1),a("q-item-section",{attrs:{side:""}},[a("h6",{staticClass:"text-primary"},[t._v(t._s(t.value))])])],1)},C=[],S={name:"Statistic",props:{label:{type:String,required:!0},value:{type:Number,required:!0},link:{type:String,default:""}}},w=S,D=Object(m["a"])(w,q,C,!1,null,"09fe70df",null),k=D.exports;x()(D,"components",{QItem:u["a"],QItemSection:p["a"],QItemLabel:g["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/comments/reply/"+t.id}},[a("q-item-section",[a("q-item-label",{staticClass:"comment"},[t._v("\n            "+t._s(t.author_name)+" posted:\n        ")]),a("q-item-label",{staticClass:"comment text-primary",attrs:{caption:""}},[t._v("\n            "+t._s(t.comment)+"\n        ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{staticClass:"text-white",attrs:{caption:""}},[t._v("\n            "+t._s(t.posted_format)+"\n        ")])],1)],1)},O=[],Q={name:"Comments",props:{id:{type:String,required:!0},author:{type:Object,required:!0},comment:{type:String,required:!0},created:{type:String,default:new Date}},computed:{author_name(){return this.author.name||"Unknown Author"},posted_format(){if(!this.created)return"";const t={weekday:"short",month:"short",day:"numeric"},e=new Date(this.created);return e.toLocaleDateString("en-US",t)}}},M=Q,I=(a("3d6f"),Object(m["a"])(M,E,O,!1,null,"fc102acc",null)),R=I.exports;x()(I,"components",{QItem:u["a"],QItemSection:p["a"],QItemLabel:g["a"]}),x()(I,"directives",{Ripple:f["a"]});var A=a("392b");let P=null;var j={name:"DashboardIndex",components:{Accounts:b,Statistic:k,Comments:R},mixins:[A["a"]],beforeCreate(){P=this.$RepositoryFactory.get("statistics")},created(){this.getStats()},computed:{holidaysEvt(){const t=new Set;return this.holidays.data.map((e=>{const a=this.findMaxDt(e.start,this.startDayOfMonth),s=this.findMinDt(e.end,this.lastDayOfMonth);for(let r=a;r.getTime()<=s.getTime();r.setDate(r.getDate()+1))t.add(this.toQDateFormat(r))})),[...t]}},data(){return{customers:{loading:!0,hasError:!1,data:{}},products:{loading:!0,hasError:!1,data:{}},orders:{loading:!0,hasError:!1,data:{}},pending:{loading:!0,hasError:!1,data:[]},recent:{loading:!0,hasError:!1,data:[]},holidays:{loading:!0,hasError:!1,data:[]},productStats:[{label:"Featured Products",value:0,key:"featured"},{label:"Active Products",value:0,key:"active"},{label:"Total Products",value:0,key:"total"}],orderStats:[{label:"Orders Placed",value:0,link:"/orders?s=placed",key:"placed"},{label:"Orders Accepted",value:0,link:"/orders?s=accepted",key:"accepted"},{label:"Orders being Prepared",value:0,link:"/orders?s=preparing",key:"preparing"},{label:"Orders Fulfilled",value:0,link:"/orders?s=fulfilled",key:"fulfilled"}]}},methods:{getStats(){var t=this;return i()((function*(){P.getCustomerStats().then((e=>{t.customers.data=e})).catch((e=>{t.customers.hasError=!0})).finally((()=>{t.customers.loading=!1})),P.getProductStats().then((e=>{t.products.data=e,t.productStats.map((e=>(t.products.data.hasOwnProperty(e.key)&&(e.value=t.products.data[e.key]),e)))})).catch((e=>{t.products.hasError=!0})).finally((()=>{t.products.loading=!1})),P.getOrderStats().then((e=>{t.orders.data=e,t.orderStats.map((e=>(t.orders.data.hasOwnProperty(e.key)&&(e.value=t.orders.data[e.key]),e)))})).catch((e=>{t.orders.hasError=!0})).finally((()=>{t.orders.loading=!1})),P.getPendingResellers().then((e=>{t.pending.data=e})).catch((e=>{t.pending.hasError=!0})).finally((()=>{t.pending.loading=!1})),P.getRecentComments().then((e=>{t.recent.data=e})).catch((e=>{t.recent.hasError=!0})).finally((()=>{t.recent.loading=!1})),P.getBusinessHolidays().then((e=>{t.holidays.data=e})).catch((e=>{t.holidays.hasError=!0})).finally((()=>{t.holidays.loading=!1}))}))()}}},F=j,L=(a("c7bf"),a("9989")),Y=a("0d59"),z=a("0016"),U=a("1c1c"),$=a("52ee"),N=Object(m["a"])(F,s,r,!1,null,"7ea7c09a",null);e["default"]=N.exports;x()(N,"components",{QPage:L["a"],QSpinner:Y["a"],QIcon:z["a"],QList:U["a"],QItem:u["a"],QItemSection:p["a"],QItemLabel:g["a"],QDate:$["a"]})},bb48:function(t,e,a){"use strict";var s=a("85a1"),r=a.n(s);r.a},c6b5:function(t,e,a){},c7bf:function(t,e,a){"use strict";var s=a("c6b5"),r=a.n(s);r.a}}]);