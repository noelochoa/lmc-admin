(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"1b67":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{value:t.showDlg,seamless:"",persistent:"",square:"",position:"right"},on:{hide:t.emitClose}},[s("q-card",{staticClass:"product-dialog-content",attrs:{dark:""}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Select Product")])]),t.productReady?s("q-card-section",[t._t("product")],2):t._e(),s("q-inner-loading",{attrs:{dark:"",showing:t.dialogLoading}},[s("q-spinner-tail",{attrs:{size:"50px",color:"white"}})],1),t.productReady?s("q-card-actions",{attrs:{align:"right"}},[t._t("actions")],2):t._e()],1)],1)},r=[],a={name:"ProductPicker",props:{showDlg:{type:Boolean,required:!0,default:!1},dialogLoading:{type:Boolean,default:!1},productReady:{type:Boolean,default:!0}},methods:{emitClose(){this.$emit("update:showDlg",!1)}}},o=a,n=(s("f204"),s("2877")),c=s("24e8"),d=s("f09f"),l=s("a370"),u=s("74f7"),p=s("007d"),m=s("4b7e"),h=s("eebe"),f=s.n(h),g=Object(n["a"])(o,i,r,!1,null,"91e94df2",null);e["a"]=g.exports;f()(g,"components",{QDialog:c["a"],QCard:d["a"],QCardSection:l["a"],QInnerLoading:u["a"],QSpinnerTail:p["a"],QCardActions:m["a"]})},"1cd3":function(t,e,s){},"392b":function(t,e,s){"use strict";s("4d90"),s("5319");var i,r,a={data(){return{prevRoute:null}},beforeRouteEnter(t,e,s){s((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,s){return t.replace(new RegExp(e,"g"),s)},resolveAssetsUrl:function(t){return"https://api.bake-free.co/"+t},showNotif:function(t,e){this.$q.notify({color:t?"green-4":"negative",textColor:"white",icon:t?"check_circle_outline":"error_outline",timeout:"2500",position:"top",message:e})},returnToPageIndex:function(t){this.prevRoute&&"/"!==this.prevRoute.path?this.$router.go(-1):this.$router.push(t).catch((t=>{}))},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},toHumanReadableDt:function(t){const e=new Date(t);return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+" "+e.getHours().toString().padStart(2,0)+":"+e.getMinutes().toString().padStart(2,0):t}}},o=a,n=s("2877"),c=Object(n["a"])(o,i,r,!1,null,null,null);e["a"]=c.exports},"739d":function(t,e,s){"use strict";var i=s("b44d"),r=s.n(i);r.a},ad4c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"q-px-md q-pt-lg"},[s("q-drawer",{attrs:{"content-class":"similar-orders",side:"right",overlay:"",elevated:""},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}},[s("div",{staticClass:"flex q-mx-md q-mt-sm"},[s("q-btn",{staticClass:"q-ml-auto",attrs:{flat:"",dense:"",label:"Hide","no-ripple":""},on:{click:function(e){t.right=!t.right}}})],1),t.findingSimilar?s("div",{staticClass:"q-my-sm text-h6 text-grey-5 flex flex-center"},[s("q-spinner",{attrs:{color:"white",size:"2em"}})],1):t.similarOrderList&&t.similarOrderList.length>0?s("div",{staticClass:"q-my-sm text-h6 text-grey-5 flex flex-center"},[t._v("\n            Similar Orders\n        ")]):s("div",{staticClass:"q-my-sm text-h6 text-grey-5 flex flex-center"},[t._v("\n            No similar orders found.\n        ")]),t._l(t.similarOrderList,(function(e,i){return s("q-card",{key:"similar-"+i,staticClass:"q-ma-md bg-grey-8"},[s("q-card-section",[s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.ordernum))]),s("div",{staticClass:"text-subtitle2 capitalize",class:"ctext-"+e.class,attrs:{square:""}},[t._v("\n                    "+t._s(e.status)+"\n                ")]),s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.customer))]),s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.target))]),s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.price))]),s("div",{staticClass:"text-grey-5"},[t._v(t._s(e.similarity))])]),s("q-separator"),s("q-card-actions",{attrs:{dense:"",vertical:""}},[s("q-btn",{attrs:{dense:"",flat:"",to:"/orders/process/"+e.id}},[t._v("\n                    Configure\n                ")])],1)],1)}))],2),s("div",{staticClass:"page-heading text-white q-pa-md"},[s("div",{staticClass:"heading-caption"},[s("h6",[t._v("Process Order")]),s("br"),s("p",[t._v("\n                You may view, edit, and change the order status and\n                details."),s("br"),t._v("\n                CAUTION: Editing Customer and/or Products fields will place\n                a NEW order with the updated price.\n            ")])])]),s("div",{staticClass:"page-contents text-white q-pa-md"},[s("div",{staticClass:"content-1"},[s("div",{staticClass:"text-subtitle2 flex flex-center"},[s("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"info"}}),t._v("Order\n                Info ("+t._s(t.order.data.ordernum)+")\n\n                "),s("q-btn",{staticClass:"q-ml-auto q-mr-sm",attrs:{"no-ripple":"",flat:"",align:"right",label:(t.right?"Hide":"Find")+" Similar"},on:{click:t.findSimilar}})],1),s("div",[s("q-form",{attrs:{disabled:t.order.hasError||t.order.loading||t.isReplacedStatus},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)}}},[t.order.loading?s("q-item",{staticClass:"q-mt-sm"},[s("q-spinner",{attrs:{color:"white",size:"2em"}})],1):s("q-list",{staticClass:"detail-list",attrs:{separator:""}},[s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("Status")]),s("q-select",{staticClass:"field-value",attrs:{options:t.orderStatusList,dark:"",dense:"",outlined:"","hide-bottom-space":"","options-dense":"","emit-value":"","map-options":"","lazy-rules":"",rules:[t._isValidStatus]},model:{value:t.order.data.status,callback:function(e){t.$set(t.order.data,"status",e)},expression:"order.data.status"}})],1),t.isReplacedStatus?s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("Replaced by:")]),t._v("\n                            "+t._s(t.order.data.replacedBy.ordernum)+"\n                        ")]):t._e(),s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("Target Date")]),s("q-input",{staticClass:"field-value",attrs:{dense:"",outlined:"","hide-bottom-space":"",dark:"",rules:[function(t){return null!==t&&""!==t.trim()},t._isValidDatetime]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{ref:"qDateProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{attrs:{dark:"","no-unset":"",mask:"YYYY-MM-DD HH:mm"},on:{input:function(){return t.$refs.qDateProxyS.hide()}},model:{value:t.order.data.target,callback:function(e){t.$set(t.order.data,"target",e)},expression:"order.data.target"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[s("q-popup-proxy",{ref:"qTimeProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-time",{attrs:{dark:"",mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:function(){return t.$refs.qTimeProxyS.hide()}},model:{value:t.order.data.target,callback:function(e){t.$set(t.order.data,"target",e)},expression:"order.data.target"}})],1)],1)]},proxy:!0}]),model:{value:t.order.data.target,callback:function(e){t.$set(t.order.data,"target",e)},expression:"order.data.target"}})],1),s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("Delivery Type")]),s("q-select",{staticClass:"field-value",attrs:{options:t.deliveryTypes,dark:"",dense:"",outlined:"","hide-bottom-space":"","options-dense":"","emit-value":"","map-options":"","lazy-rules":"",rules:[t._isValidType]},model:{value:t.order.data.type,callback:function(e){t.$set(t.order.data,"type",e)},expression:"order.data.type"}})],1),s("transition",{attrs:{name:"fade"}},["delivery"==t.order.data.type?s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("Address")]),s("q-input",{staticClass:"field-value",attrs:{dense:"",type:"textarea",rows:3,outlined:"",dark:"","hide-bottom-space":"","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()}]},model:{value:t.order.data.address,callback:function(e){t.$set(t.order.data,"address",e)},expression:"order.data.address"}})],1):t._e()],1),s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("\n                                Memo\n                            ")]),s("q-input",{staticClass:"field-value",attrs:{type:"textarea",rows:3,textarea:"",dense:"",outlined:"",dark:"","hide-bottom-space":""},model:{value:t.order.data.memo,callback:function(e){t.$set(t.order.data,"memo",e)},expression:"order.data.memo"}})],1),t.isReplacedStatus?t._e():s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("Replace Items")]),s("q-toggle",{attrs:{"checked-icon":"check",color:"green-4","unchecked-icon":"clear",label:t.confirmEditProduct?"Yes":"No"},on:{input:t.onToggleReplace},model:{value:t.confirmEditProduct,callback:function(e){t.confirmEditProduct=e},expression:"confirmEditProduct"}})],1),s("q-item",{staticClass:"detail-field",class:{"cursor-not-allowed bg-grey-8":!t.confirmEditProduct}},[s("span",{staticClass:"field-label"},[t._v("Customer")]),s("q-select",{staticClass:"field-value customer-select",class:{"no-pointer-events":!t.confirmEditProduct},attrs:{disabled:!t.confirmEditProduct,options:t.options,"hide-dropdown-icon":"","hide-bottom-space":"",dark:"",dense:"","options-dense":"",outlined:"","use-input":"","emit-value":"","map-options":"","lazy-rules":"",rules:[function(t){return null!==t}]},on:{filter:t.filterFn,input:t.onSelCustomer},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return e.stopPropagation(),t.clearSelCustomer(e)}}})]},proxy:!0},{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-italic text-grey"},[t._v("\n                                            No customer account found.\n                                        ")])],1)]},proxy:!0}]),model:{value:t.order.data.customer,callback:function(e){t.$set(t.order.data,"customer",e)},expression:"order.data.customer"}})],1),s("q-item",{staticClass:"detail-field product-field",class:{"cursor-not-allowed bg-grey-8":!t.confirmEditProduct}},[s("span",{staticClass:"field-label"},[t._v("\n                                Products\n                            ")]),s("div",{staticClass:"product-details q-py-sm"},[t._l(t.order.data.products,(function(e,i){return s("q-item",{key:"product-"+i,staticClass:"product-item"},[s("q-item-section",{attrs:{side:""}},[s("q-avatar",{attrs:{rounded:"",size:"64px"}},[s("img",{attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/64x64/363636/ffffff.png&text=No+Img"}}),s("q-badge",{staticClass:"q-pt-xs",attrs:{floating:"",color:"teal"}},[t._v("\n                                                "+t._s(e.quantity)+"\n                                            ")])],1)],1),s("q-item-section",[s("q-item-label",{staticClass:"product-name"},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")]),s("q-item-label",{staticClass:"text-grey-4 product-name",attrs:{caption:""}},t._l(e.options,(function(e){return s("span",{key:"key-"+e._option},[t._v("\n                                                "+t._s(e._option+": "+e._selected)+"\n                                                "),null!=e.otherValue?s("span",[t._v("("+t._s(e.otherValue)+") ")]):t._e(),s("br")])})),0)],1),s("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.discount>0?s("span",[s("span",{staticClass:"text-strike"},[t._v("\n                                                "+t._s(e.price)+"\n                                            ")]),t._v("\n                                            (-"+t._s(e.discount)+"%)"),s("br"),t._v("\n                                            "+t._s(e.finalPrice)+" PHP\n                                        ")]):s("span",[t._v(t._s(e.price)+" PHP\n                                        ")])]),s("q-item-section",{staticClass:"action-buttons text-white",attrs:{side:""}},[s("q-btn",{attrs:{flat:"",dense:"",rounded:"",icon:"clear",disabled:!t.confirmEditProduct||t.showPicker},on:{click:function(e){return t.removeProduct(i)}}},[s("q-tooltip",[t._v("\n                                                Remove\n                                            ")])],1)],1)],1)})),s("q-btn",{attrs:{dense:"",flat:"","no-caps":"",icon:"add",label:"Add Product",disabled:!t.confirmEditProduct||t.showPicker},on:{click:function(e){return t.openProductPicker()}}})],2)]),s("q-item",{staticClass:"detail-field"},[s("span",{staticClass:"field-label"},[t._v("Total Price")]),t._v("\n                            "+t._s(t.orderTotalPrice)+" PHP\n                        ")])],1),s("q-separator"),s("div",{staticClass:"q-pa-md"},[s("q-btn",{attrs:{label:"Save",type:"submit",color:"primary",loading:t.loading,disable:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[s("q-spinner-gears")]},proxy:!0}])})],1)],1)],1)]),s("div",{staticClass:"content-2"}),s("ProductPicker",{attrs:{showDlg:t.showPicker},on:{"update:showDlg":function(e){t.showPicker=e},"update:show-dlg":function(e){t.showPicker=e},hide:function(e){return t.onCloseDialog(t.val)}},scopedSlots:t._u([{key:"product",fn:function(){return[s("q-form",{ref:"selProductForm"},[s("q-item",{staticClass:"productdlg-item"},[s("q-select",{staticClass:"search-field",attrs:{"popup-content-class":"options-light",options:t.productOptions,label:"Search Product","hide-dropdown-icon":"","hide-bottom-space":"",dark:"","options-dark":"",outlined:"","use-input":"","emit-value":"","map-options":"",debounce:"250",loading:t.pfilterLoading},on:{filter:t.pfilterFn,input:t.onSelectProduct},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0},{key:"append",fn:function(){return[t.pfilterLoading?t._e():s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){e.stopPropagation(),t.searchProduct=null,t.selectProduct=null}}})]},proxy:!0},{key:"no-option",fn:function(){return[s("q-item",{staticClass:"options-light"},[s("q-item-section",{staticClass:"text-italic text-grey"},[t._v("\n                                        No products found.\n                                    ")])],1)]},proxy:!0}]),model:{value:t.searchProduct,callback:function(e){t.searchProduct=e},expression:"searchProduct"}})],1),t.selectProduct?s("q-list",{staticClass:"productdlg-list"},[s("q-item",{staticClass:"productdlg-item"},[s("div",{staticClass:"attr-label text-grey-6"},[t._v("\n                                Name\n                            ")]),s("div",{staticClass:"attr-value"},[t._v("\n                                "+t._s(t.selectProduct.name)+"\n                            ")])]),s("q-item",{staticClass:"productdlg-item"},[s("div",{staticClass:"attr-label text-grey-6"},[t._v("\n                                Qty. (MIN:\n                                "+t._s(t.selectProduct.minOrderQuantity)+")\n                            ")]),s("q-input",{staticClass:"attr-value",attrs:{dense:"",outlined:"","hide-bottom-space":"",dark:"",type:"number",min:t.selectProduct.minOrderQuantity},on:{input:t.onChgQty},model:{value:t.customizedProduct.quantity,callback:function(e){t.$set(t.customizedProduct,"quantity",e)},expression:"customizedProduct.quantity"}})],1),s("q-item",{staticClass:"productdlg-item"},[s("div",{staticClass:"attr-label text-grey-6"},[t._v("\n                                Options\n                            ")]),t._l(t.selectProduct.options,(function(e,i){return s("div",{key:"optKey-"+i,staticClass:"attr-value q-my-sm"},[s("span",{staticClass:"capitalize option-label"},[t._v("\n                                    "+t._s(e.attribute)+"\n                                ")]),s("q-select",{attrs:{"popup-content-class":"options-light",dense:"",dark:"",outlined:"",options:t.toSelOptions(e.attribute,e.choices),"lazy-rules":"",rules:[function(t){return!!t}]},on:{input:function(e){return t.onSelOption(i)}},model:{value:t.customizedProduct.options[i],callback:function(e){t.$set(t.customizedProduct.options,i,e)},expression:"customizedProduct.options[key]"}}),t.isOtherSelected(t.customizedProduct.options[i])?s("q-input",{attrs:{dense:"",dark:"",outlined:"",placeholder:"Please specify","lazy-rules":"",rules:[function(t){return!!t}]},model:{value:t.customizedProduct.otherVal[i],callback:function(e){t.$set(t.customizedProduct.otherVal,i,e)},expression:"\n                                        customizedProduct.otherVal[key]\n                                    "}}):t._e()],1)}))],2),s("q-item",{staticClass:"productdlg-item"},[s("div",{staticClass:"attr-label text-grey-6"},[t._v("\n                                Price (PHP)\n                            ")]),s("div",{staticClass:"attr-value"},[t._v("\n                                "+t._s(t.customizedProduct.price)+"\n                            ")])])],1):t._e()],1)]},proxy:!0},{key:"actions",fn:function(){return[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"},on:{click:t.onCloseDialog}}),s("q-btn",{attrs:{flat:"",label:"Add",color:"primary"},on:{click:t.onSetProduct}})]},proxy:!0}])})],1)],1)},r=[],a=(s("c975"),s("fb6a"),s("5319"),s("498a"),s("ded3")),o=s.n(a),n=s("c973"),c=s.n(n),d=s("1b67"),l=s("392b");let u=null,p=null,m=null;var h={name:"OrderProcess",components:{ProductPicker:d["a"]},mixins:[l["a"]],watch:{$route(t,e){t.path!==e.path&&this.getOrderDetails()}},meta(){return{title:"Process Order"}},beforeCreate(){u=this.$RepositoryFactory.get("accounts"),p=this.$RepositoryFactory.get("products"),m=this.$RepositoryFactory.get("orders")},created(){this.getOrderStatuses(),this.getAccounts()},mounted(){this.getOrderDetails()},computed:{isReplacedStatus(){return!(!this.orderStatuses||this.orderStatuses.length<1)&&this.orderStatuses.some((t=>t.value==this.order.data.status&&"replaced"==t.label.toLowerCase()))},orderStatusList(){return this.isReplacedStatus?this.orderStatuses:this.orderStatuses.filter((t=>"replaced"!==t.label.toLowerCase()))},orderTotalPrice(){return this.order.data.products.length>0?this.order.data.products.reduce(((t,e)=>t+Number.parseInt(e.finalPrice?e.finalPrice:e.price)),0):0},similarOrderList(){return this.findingSimilar||this.similarOrders&&this.similarOrders.length<1?[]:this.similarOrders}},data(){return{right:!1,loading:!1,pfilterLoading:!1,findingSimilar:!1,showPicker:!1,confirmEditProduct:!1,order:{loading:!0,hasError:!1,data:{ordernum:"",products:[],total:0,customer:null,target:null,address:"",type:"delivery",status:null}},orderBackup:{},orderStatuses:[],deliveryTypes:[{label:"For Delivery",value:"delivery"},{label:"For Pickup",value:"pickup"}],customerList:[],options:null,productOptions:null,searchProduct:null,selectProduct:null,customizedProduct:{id:-1,name:"",image:"",quantity:0,price:0,discounts:[],options:[],otherVal:[]},similarOrders:[]}},methods:{_isValidStatus(t){if(!(this.order.data.status&&this.orderStatuses&&this.orderStatuses.length>0))return"Invalid status selected";const e=this.orderStatuses.find((t=>t.value===this.order.data.status));return!!e||"Invalid status selected"},_isValidType(t){if(!(this.order.data.type&&this.deliveryTypes&&this.deliveryTypes.length>0))return"Invalid type selected";const e=this.deliveryTypes.find((t=>t.value===this.order.data.type));return!!e||"Invalid type selected"},_isValidDatetime(t){const e=/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;return e.test(t)||"Invalid date & time format"},filterFn(t,e,s){t&&""!=t.trim()?e((()=>{const e=t.toLowerCase();this.options=this.customerList.filter((t=>t.label.toLowerCase().indexOf(e)>-1))})):s()},pfilterFn(t,e,s){var i=this;return c()((function*(){if(t&&""!=t.trim())try{i.pfilterLoading=!0;const s=yield p.searchProducts(t);i.productList=s.products.slice(),e((()=>{i.productOptions=i.productList.map((t=>({label:t.name,value:t.id})))}))}catch(r){i.showNotif(!1,"Error searching product/s."+r)}finally{i.pfilterLoading=!1}else s()}))()},onCloseDialog(){},finalizePrice(){const t=this.customerList.find((t=>t.value==this.order.data.customer));t&&this.order.data.products.forEach((e=>{const s=e.discounts.filter((e=>e.target==t.type||"all"==e.target));if(s&&s.length>0){const t=Math.max.apply(Math,s.map((function(t){return t.percent}))),i=(e.price-e.price*t/100).toFixed(0);e.discount=t,e.finalPrice=i}}))},onSelCustomer(t){this.finalizePrice()},onSelectProduct(t){this.selectProduct=this.productList.find((e=>e.id==t)),this.clearSelection(),this.customizedProduct.id=this.selectProduct.id,this.customizedProduct.name=this.selectProduct.name,this.customizedProduct.image=this.selectProduct.images&&this.selectProduct.images.length>0?this.selectProduct.images[0].image:null,this.customizedProduct.quantity=this.selectProduct.minOrderQuantity,this.customizedProduct.discounts=this.selectProduct.discount,this.calcCustomizationPrice()},removeProduct(t){this.$delete(this.order.data.products,t)},openProductPicker(t){this.selectProduct=null,this.searchProduct=null,this.showPicker=!0},clearSelection(){this.customizedProduct.id=-1,this.customizedProduct.name="",this.customizedProduct.image="",this.customizedProduct.options=[],this.customizedProduct.discounts=[],this.customizedProduct.otherVal=[],this.customizedProduct.quantity=0,this.customizedProduct.price=0},clearSelCustomer(){this.order.data.customer=null,this.order.data.products.forEach((t=>{t.discount=0,t.finalPrice=t.price}))},onSetProduct(t){this.$refs.selProductForm.validate().then((t=>{t&&this.selectProduct&&(this.order.data.products.push({product:this.customizedProduct.id,name:this.customizedProduct.name,image:this.customizedProduct.image,price:this.customizedProduct.price,quantity:this.customizedProduct.quantity,discount:0,finalPrice:this.customizedProduct.price,discounts:this.customizedProduct.discounts,options:this.customizedProduct.options.map(((t,e)=>({_option:t.key,_selected:t.value.value,otherValue:"Other"==t.value.value?this.customizedProduct.otherVal[e]:null})))}),this.finalizePrice(),this.showPicker=!1,this.clearSelection())}))},onChgQty(t){this.calcCustomizationPrice()},onSelOption(t){this.calcCustomizationPrice()},calcCustomizationPrice(){const t=(t,e)=>t+e.value.price;this.customizedProduct.price=this.customizedProduct.quantity*this.customizedProduct.options.reduce(t,this.selectProduct.basePrice)},toSelOptions(t,e){return e?e.map((e=>({label:e.value+(e.price>=0?`(+${e.price}  PHP)`:`(${e.price} PHP)`),value:e,key:t}))):e},isOtherSelected(t){return!!t&&"Other"==t.value.value},onToggleReplace(t,e){t?this.showNotif(!0,"CAUTION: Saving changes will place a NEW Order."):(this.options=this.customerList.slice(),this.order.data.customer=this.orderBackup.customer,this.order.data.products=this.orderBackup.products.slice())},getOrderDetails(){var t=this;return c()((function*(){try{t.order.loading=!0;const e=yield m.getOrder(t.$route.params.id);t.order.data=o()({},e),t.orderBackup.customer=e.customer,t.orderBackup.products=e.products.slice()}catch(e){t.showNotif(!1,"Could not retrieve order details. "),t.order.hasError=!0}finally{t.order.loading=!1}}))()},getAccounts(){var t=this;return c()((function*(){u.getAccountSelection().then((e=>{t.customerList=e.slice(),t.options=e.slice()})).catch((e=>{t.customerList=[]}))}))()},getOrderStatuses(){var t=this;return c()((function*(){m.getStatusSelection().then((e=>{t.orderStatuses=e})).catch((e=>{t.orderStatuses=[]}))}))()},findSimilar(){var t=this;return c()((function*(){t.right=!t.right,t.right&&(t.findingSimilar=!0,m.findSimilarOrders(t.$route.params.id,o()({},t.order.data)).then((e=>{t.similarOrders=e.slice(),t.findingSimilar=!1})).catch((e=>{t.findingSimilar=!1})))}))()},onSubmit:function(){var t=c()((function*(t){this.loading=!0;try{if(this.order.data.products.length<1)throw"No products selected";this.confirmEditProduct?(yield m.replaceOrder(this.$route.params.id,o()({},this.order.data)),this.showNotif(!0,"Successfully placed a new order.")):(yield m.updateOrder(this.$route.params.id,o()({},this.order.data)),this.showNotif(!0,"Updated Order details.")),this.returnToPageIndex("/orders")}catch(e){this.showNotif(!1,"Could not process the order. ")}finally{this.loading=!1}}));return function(e){return t.apply(this,arguments)}}(),goTo(t){this.$router.replace(t).catch((t=>{})),this.getOrderDetails()}}},f=h,g=(s("739d"),s("ed9a"),s("2877")),v=s("9989"),y=s("9404"),P=s("9c40"),b=s("0d59"),C=s("f09f"),q=s("a370"),_=s("eb85"),S=s("4b7e"),x=s("0016"),k=s("0378"),w=s("66e5"),z=s("1c1c"),D=s("ddd8"),O=s("27f9"),Q=s("7cbe"),$=s("52ee"),L=s("ca78"),E=s("9564"),T=s("4074"),R=s("cb32"),F=s("58a81"),I=s("0170"),N=s("05c0"),M=s("cf57"),V=s("8572"),Y=s("7f67"),A=s("eebe"),H=s.n(A),B=Object(g["a"])(f,i,r,!1,null,"2f83041c",null);e["default"]=B.exports;H()(B,"components",{QPage:v["a"],QDrawer:y["a"],QBtn:P["a"],QSpinner:b["a"],QCard:C["a"],QCardSection:q["a"],QSeparator:_["a"],QCardActions:S["a"],QIcon:x["a"],QForm:k["a"],QItem:w["a"],QList:z["a"],QSelect:D["a"],QInput:O["a"],QPopupProxy:Q["a"],QDate:$["a"],QTime:L["a"],QToggle:E["a"],QItemSection:T["a"],QAvatar:R["a"],QBadge:F["a"],QItemLabel:I["a"],QTooltip:N["a"],QSpinnerGears:M["a"],QField:V["a"]}),H()(B,"directives",{ClosePopup:Y["a"]})},b44d:function(t,e,s){},d15b:function(t,e,s){},ed9a:function(t,e,s){"use strict";var i=s("1cd3"),r=s.n(i);r.a},f204:function(t,e,s){"use strict";var i=s("d15b"),r=s.n(i);r.a}}]);