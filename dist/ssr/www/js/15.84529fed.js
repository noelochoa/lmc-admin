(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"272a":function(t,e,n){},"392b":function(t,e,n){"use strict";n("4d90"),n("5319");var a,o,s={data(){return{prevRoute:null}},beforeRouteEnter(t,e,n){n((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,n){return t.replace(new RegExp(e,"g"),n)},resolveAssetsUrl:function(t){return"https://api.bake-free.co/"+t},showNotif:function(t,e){this.$q.notify({color:t?"green-4":"negative",textColor:"white",icon:t?"check_circle_outline":"error_outline",timeout:"2500",position:"top",message:e})},returnToPageIndex:function(t){this.prevRoute&&"/"!==this.prevRoute.path?this.$router.go(-1):this.$router.push(t).catch((t=>{}))},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},toHumanReadableDt:function(t){const e=new Date(t);return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+" "+e.getHours().toString().padStart(2,0)+":"+e.getMinutes().toString().padStart(2,0):t}}},i=s,r=n("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=c.exports},4976:function(t,e,n){"use strict";var a=n("b366"),o=n.n(a);o.a},"6f16":function(t,e,n){"use strict";var a=n("272a"),o=n.n(a);o.a},7858:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"q-px-md q-pt-lg"},[n("div",{staticClass:"page-heading text-white q-pa-md"},[n("div",{staticClass:"heading-caption"},[n("h6",[t._v("Add Announcement")]),n("br"),n("p",[t._v("\n                Fill out the form to post an announcement in the webstore.\n            ")])])]),n("div",{staticClass:"page-contents text-white q-pa-md"},[n("div",{staticClass:"content-1"},[n("div",{staticClass:"text-subtitle2 flex flex-center"},[n("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"account_circle"}}),t._v("Announcement Info\n            ")],1),n("div",[n("q-form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)}}},[n("q-list",{staticClass:"detail-list",attrs:{separator:""}},[n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Starts from")]),n("q-input",{staticClass:"field-value",attrs:{dense:"",outlined:"","hide-bottom-space":"",dark:"",rules:[function(t){return null!==t&&""!==t.trim()},t._isValidDatetime]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{dark:"","no-unset":"",mask:"YYYY-MM-DD HH:mm"},on:{input:function(){return t.$refs.qDateProxyS.hide()}},model:{value:t.announcement.start,callback:function(e){t.$set(t.announcement,"start",e)},expression:"announcement.start"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[n("q-popup-proxy",{ref:"qTimeProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-time",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:function(){return t.$refs.qTimeProxyS.hide()}},model:{value:t.announcement.start,callback:function(e){t.$set(t.announcement,"start",e)},expression:"announcement.start"}})],1)],1)]},proxy:!0}]),model:{value:t.announcement.start,callback:function(e){t.$set(t.announcement,"start",e)},expression:"announcement.start"}})],1),n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Ends at")]),n("q-input",{staticClass:"field-value",attrs:{dense:"",outlined:"","hide-bottom-space":"",dark:"","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()},t._isValidDatetime,t._isValidEndDt]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxyE",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{dark:"","no-unset":"",mask:"YYYY-MM-DD HH:mm"},on:{input:function(){return t.$refs.qDateProxyE.hide()}},model:{value:t.announcement.end,callback:function(e){t.$set(t.announcement,"end",e)},expression:"announcement.end"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[n("q-popup-proxy",{ref:"qTimeProxyE",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-time",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:function(){return t.$refs.qTimeProxyE.hide()}},model:{value:t.announcement.end,callback:function(e){t.$set(t.announcement,"end",e)},expression:"announcement.end"}})],1)],1)]},proxy:!0}]),model:{value:t.announcement.end,callback:function(e){t.$set(t.announcement,"end",e)},expression:"announcement.end"}})],1),n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Text")]),n("q-editor",{ref:"qTxtEditor",staticClass:"field-value qtext-editor",class:{"has-error":t.contentEmpty},attrs:{placeholder:"Announcement text",flat:"","content-class":"text-black bg-grey-3","toolbar-text-color":"black","toolbar-toggle-color":"yellow-8",toolbar:[["bold","italic","underline"],["undo","redo"]]},on:{input:function(e){t.hasTyped=!0}},model:{value:t.announcement.message,callback:function(e){t.$set(t.announcement,"message",e)},expression:"announcement.message"}})],1),n("q-item",{staticClass:"detail-field"},[n("span",{staticClass:"field-label"},[t._v("Link")]),n("q-input",{staticClass:"field-value",attrs:{dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Optional URL","lazy-rules":"",rules:[t._isValidLink]},model:{value:t.announcement.targetLink,callback:function(e){t.$set(t.announcement,"targetLink",e)},expression:"announcement.targetLink"}})],1)],1),n("q-separator"),n("div",{staticClass:"q-pa-md"},[n("q-btn",{attrs:{label:"Create",type:"submit",color:"primary",loading:t.loading,disable:t.loading||!t.hasTyped},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-gears")]},proxy:!0}])})],1)],1)],1)]),n("div",{staticClass:"content-2"})])])},o=[],s=(n("5319"),n("498a"),n("c973")),i=n.n(s),r=n("392b");let c=null;var l={name:"AnnouncementAdd",mixins:[r["a"]],meta(){return{title:"Add Announcement"}},beforeCreate(){c=this.$RepositoryFactory.get("announcements")},created(){this.announcement.start=this.today.yyyymmdd+" 00:00",this.announcement.end=this.today.yyyymmdd+" 23:59"},mounted(){this.$refs.qTxtEditor.focus()},computed:{contentEmpty(){return this.hasTyped&&this._isContentEmpty(this.announcement.message)}},data(){return{loading:!1,hasTyped:!1,announcement:{message:"",targetLink:"",start:"",end:""}}},methods:{_isValidDatetime(t){const e=/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;return e.test(t)||"Invalid date & time format"},_isValidEndDt(t){const e=new Date(t),n=new Date(this.announcement.start);return e.getTime()>n.getTime()||"End date needs to be greater"},_isValidLink(t){if(!t||""==t)return!0;const e=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;return e.test(t)||"Invalid URL format"},_isContentEmpty(t){return t=this.replaceAll(t,"&nbsp;",""),t=this.replaceAll(t," ",""),t=t.replace(/(<([^>]+)>)/gi,"").trim(),0==t.length},onSubmit:function(){var t=i()((function*(t){if(this.loading=!0,this._isContentEmpty(this.announcement.message))this.$refs.qTxtEditor.focus(),this.loading=!1;else try{yield c.addAnnouncement(this.announcement),this.showNotif(!0,"Successfully added new announcement. "),this.returnToPageIndex("/announcements")}catch(e){this.showNotif(!1,"Could not create the announcement. ")}finally{this.loading=!1}}));return function(e){return t.apply(this,arguments)}}()}},u=l,d=(n("4976"),n("6f16"),n("2877")),m=n("9989"),p=n("0016"),f=n("0378"),h=n("1c1c"),g=n("66e5"),y=n("27f9"),b=n("7cbe"),x=n("52ee"),q=n("ca78"),D=n("d66b"),v=n("eb85"),k=n("9c40"),w=n("cf57"),C=n("8572"),S=n("eebe"),_=n.n(S),Y=Object(d["a"])(u,a,o,!1,null,"1a78c447",null);e["default"]=Y.exports;_()(Y,"components",{QPage:m["a"],QIcon:p["a"],QForm:f["a"],QList:h["a"],QItem:g["a"],QInput:y["a"],QPopupProxy:b["a"],QDate:x["a"],QTime:q["a"],QEditor:D["a"],QSeparator:v["a"],QBtn:k["a"],QSpinnerGears:w["a"],QField:C["a"]})},b366:function(t,e,n){}}]);