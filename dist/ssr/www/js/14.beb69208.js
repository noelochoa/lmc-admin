(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"2e74":function(e,t,a){},"392b":function(e,t,a){"use strict";a("4d90"),a("5319");var n,r,o={data(){return{prevRoute:null}},beforeRouteEnter(e,t,a){a((e=>{e.prevRoute=t}))},computed:{today(){const e=new Date,t={month:e.toLocaleDateString("en-US",{month:"long"}),year:e.getFullYear(),dayOfMonth:e.getDate(),dayOfWeek:e.getDay(),human:e.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:e.toISOString(),yyyymmdd:e.getFullYear()+"-"+(e.getMonth()+1).toString().padStart(2,0)+"-"+e.getDate().toString().padStart(2,"0")};return t},startDayOfMonth(){const e=new Date;return new Date(e.getFullYear(),e.getMonth(),1)},lastDayOfMonth(){const e=new Date;return new Date(e.getFullYear(),e.getMonth()+1,0)}},methods:{replaceAll:function(e,t,a){return e.replace(new RegExp(t,"g"),a)},resolveAssetsUrl:function(e){return"https://api.bake-free.co/"+e},showNotif:function(e,t){this.$q.notify({color:e?"green-4":"negative",textColor:"white",icon:e?"check_circle_outline":"error_outline",timeout:"2500",position:"top",message:t})},returnToPageIndex:function(e){this.prevRoute&&"/"!==this.prevRoute.path?this.$router.go(-1):this.$router.push(e).catch((e=>{}))},findMaxDt:function(e,t){return new Date(Math.max(new Date(e),new Date(t)))},findMinDt:function(e,t){return new Date(Math.min(new Date(e),new Date(t)))},toQDateFormat:function(e){return e?e.getFullYear()+"/"+(e.getMonth()+1).toString().padStart(2,0)+"/"+e.getDate().toString().padStart(2,0):e},toHumanReadableDt:function(e){const t=new Date(e);return t?t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+" "+t.getHours().toString().padStart(2,0)+":"+t.getMinutes().toString().padStart(2,0):e}}},i=o,s=a("2877"),l=Object(s["a"])(i,n,r,!1,null,null,null);t["a"]=l.exports},"3ac1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-px-md q-pt-lg"},[a("div",{staticClass:"page-heading text-white q-pa-md"},[a("div",{staticClass:"heading-caption"},[a("h6",[e._v("Customer Accounts")]),a("br"),a("p",[e._v("Here are the registered members of your store.")])])]),a("div",{staticClass:"page-contents text-white q-pa-md"},[a("div",{staticClass:"content-1"},[a("q-select",{staticClass:"filter-select",attrs:{options:e.filter,dark:"",dense:"",outlined:"","options-dense":""},on:{input:e.filterChanged},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"person_outline"}})]},proxy:!0}]),model:{value:e.customerFilter,callback:function(t){e.customerFilter=t},expression:"customerFilter"}})],1),a("div",{staticClass:"content-2"},[a("q-input",{attrs:{type:"search",debounce:"500",placeholder:"Search Name",dark:"",dense:"",outlined:""},on:{input:e.searchInput},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[a("transition",{attrs:{name:"fade"}},[a("q-icon",{directives:[{name:"show",rawName:"v-show",value:""!=e.search,expression:"search != ''"}],staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:e.searchClear}})],1)]},proxy:!0}]),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("div",{staticClass:"content-3"},[a("q-table",{ref:"accntsTbl",staticClass:"customer-table",attrs:{square:"","row-key":"id",data:e.data,columns:e.columns,pagination:e.pagination,"rows-per-page-options":[0],loading:e.loading,filter:e.search},on:{"update:pagination":[function(t){e.pagination=t},e.onChgPage],request:e.onRequest},scopedSlots:e._u([{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"name",attrs:{props:t}},[e._v("\n                            "+e._s(t.row.name)+"\n                        ")]),a("q-td",{key:"type",staticClass:"capitalize",attrs:{props:t}},[e._v("\n                            "+e._s(t.row.type)+"\n                        ")]),a("q-td",{key:"joined",attrs:{props:t}},[e._v("\n                            "+e._s(t.row.joined)+"\n                        ")]),a("q-td",{key:"login",attrs:{props:t}},[e._v("\n                            "+e._s(t.row.login)+"\n                        ")]),a("q-td",{key:"active",attrs:{props:t}},[a("q-btn-toggle",{staticClass:"no-pointer-events",attrs:{size:"sm",readonly:"","toggle-color":t.row.active?"green-4":"red-4",options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]},model:{value:t.row.active,callback:function(a){e.$set(t.row,"active",a)},expression:"props.row.active"}})],1),a("q-td",[a("q-btn",{staticClass:"q-mr-sm",attrs:{dense:"",flat:"",round:"",icon:"build",to:"/accounts/edit/"+t.row.id}},[a("q-tooltip",{attrs:{anchor:"center right",self:"center left",offset:[10,10]}},[e._v("Configure")])],1)],1)],1)]}}])})],1)])])},r=[],o=(a("fb6a"),a("5319"),a("c973")),i=a.n(o),s=a("ded3"),l=a.n(s),c=a("392b");let u=null;var p={name:"AccountsIndex",mixins:[c["a"]],meta(){return{title:"Customer Accounts",meta:{robots:{name:"robots",content:"noindex"}}}},beforeCreate(){u=this.$RepositoryFactory.get("accounts")},created(){if(this.$route.query.type){const e=new RegExp(this.$route.query.type,"i");this.filter.forEach((t=>{t.match(e)&&(this.customerFilter=t)}))}this.$route.query.s&&(this.search=this.$route.query.s),this.$route.query.p&&!isNaN(this.$route.query.p)&&(this.pagination.page=Number.parseInt(this.$route.query.p))},mounted(){this.onRequest({pagination:this.pagination,filter:void 0})},data(){return{customerList:[],search:"",searchReq:null,customerFilter:"All",filter:["All","Regular","Reseller","Partner"],loading:!1,pagination:{sortBy:"joined",descending:!0,page:1,rowsPerPage:9},columns:[{name:"name",field:"name",label:"Name",align:"left",required:!0,sortable:!0},{name:"type",field:"type",align:"left",label:"Type",sortable:!0},{name:"joined",field:"joined",align:"left",label:"Joined",sortable:!0},{name:"login",field:"login",align:"left",label:"Last Login",sortable:!0},{name:"active",field:"active",align:"center",label:"Status",sortable:!0},{name:"action",align:"left",label:"Action"}],data:[],original:[]}},methods:{filterChanged(e){const t=this.$route.query.type;!this.filter.includes(e)&&t&&e.match(new RegExp(t,"i"))||(this.$router.replace({query:{type:e}}).catch((e=>{})),this.search=""),this.$refs["accntsTbl"].requestServerInteraction({pagination:l()(l()({},this.pagination),{},{page:1})})},searchClear(e){let t=Object.assign({},this.$route.query);delete t.s,this.$router.replace({query:t}).catch((e=>{})),this.search=""},searchInput(e){let t=Object.assign({},this.$route.query,{s:e});e||delete t.s,this.$router.replace({query:t}).catch((e=>{}))},onChgPage(e){let t=Object.assign({},this.$route.query,{p:e.page});e||delete t.p,this.$router.replace({query:t}).catch((e=>{}))},onRequest(e){var t=this;return i()((function*(){t.loading=!0;try{const a=yield u.getAllAccounts(t.customerFilter);t.original=a,t.data=t.original.slice(),t.pagination.page=e.pagination.page}catch(a){t.showNotif(!1,"Could not retrieve account details. ")}finally{t.loading=!1}}))()}}},d=p,g=(a("7bc5"),a("6250"),a("2877")),h=a("9989"),f=a("ddd8"),m=a("0016"),y=a("27f9"),b=a("eaac"),v=a("bd08"),q=a("db86"),w=a("6a67"),S=a("9c40"),C=a("05c0"),D=a("eebe"),k=a.n(D),x=Object(g["a"])(d,n,r,!1,null,"9d408dee",null);t["default"]=x.exports;k()(x,"components",{QPage:h["a"],QSelect:f["a"],QIcon:m["a"],QInput:y["a"],QTable:b["a"],QTr:v["a"],QTd:q["a"],QBtnToggle:w["a"],QBtn:S["a"],QTooltip:C["a"]})},6250:function(e,t,a){"use strict";var n=a("2e74"),r=a.n(n);r.a},"7bc5":function(e,t,a){"use strict";var n=a("c270"),r=a.n(n);r.a},c270:function(e,t,a){}}]);