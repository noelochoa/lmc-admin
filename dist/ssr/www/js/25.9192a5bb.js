(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"002c":function(t,e,i){},"0a25":function(t,e,i){"use strict";var o=i("002c"),n=i.n(o);n.a},"256e":function(t,e,i){"use strict";var o=i("f776"),n=i.n(o);n.a},"277a":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"q-px-md q-pt-lg"},[i("div",{staticClass:"page-heading text-white q-pa-md"},[i("div",{staticClass:"heading-caption"},[i("h6",[t._v("Add Product")]),i("br"),i("p",[t._v("\n                Fill out the form to create a new product in the webstore.\n            ")])])]),i("div",{staticClass:"page-contents text-white q-pa-md"},[i("div",{staticClass:"content-1"},[i("div",{staticClass:"text-subtitle2 flex flex-center"},[i("q-icon",{staticClass:"caption-icon q-mx-md",attrs:{name:"cake"}}),t._v("Product\n                Info\n            ")],1),i("div",[i("q-stepper",{staticClass:"bg-none",attrs:{vertical:"",animated:"","done-color":"primary","inactive-color":"grey-5"},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[i("q-step",{attrs:{name:1,title:"Basic Information",icon:"assignment",done:t.step>1}},[i("p",[t._v("Select category and fill out basic info.")]),i("q-form",{ref:"step1Form",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.saveStep1(e)}}},[i("q-list",{staticClass:"detail-list",attrs:{separator:""}},[i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Category\n                                    ")]),i("q-select",{staticClass:"field-value",attrs:{options:t.categories,dark:"",dense:"",outlined:"","options-dense":"","hide-bottom-space":"","emit-value":"","map-options":"","lazy-rules":"",rules:[t._isValidCategory]},model:{value:t.newProduct.category,callback:function(e){t.$set(t.newProduct,"category",e)},expression:"newProduct.category"}})],1),i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Product Name\n                                    ")]),i("q-input",{staticClass:"field-value",attrs:{type:"text",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Field required. ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()}]},model:{value:t.newProduct.name,callback:function(e){t.$set(t.newProduct,"name",e)},expression:"newProduct.name"}})],1),i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Description\n                                    ")]),i("q-input",{staticClass:"field-value",attrs:{type:"textarea",textarea:"",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Field required. ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()}]},model:{value:t.newProduct.description,callback:function(e){t.$set(t.newProduct,"description",e)},expression:"newProduct.description"}})],1),i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Base price\n                                    ")]),i("q-input",{staticClass:"field-value",attrs:{type:"number",min:"1",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Field required. ","lazy-rules":"",rules:[function(t){return!isNaN(t)}]},model:{value:t.newProduct.basePrice,callback:function(e){t.$set(t.newProduct,"basePrice",e)},expression:"newProduct.basePrice"}})],1),i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Minimum Order Quantity\n                                    ")]),i("q-input",{staticClass:"field-value",attrs:{type:"number",min:"1",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Field required. ","lazy-rules":"",rules:[function(t){return!isNaN(t)&&t>0}]},model:{value:t.newProduct.minOrderQuantity,callback:function(e){t.$set(t.newProduct,"minOrderQuantity",e)},expression:"\n                                            newProduct.minOrderQuantity\n                                        "}})],1),i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Colors\n                                    ")]),i("q-select",{staticClass:"field-value",attrs:{"hide-dropdown-icon":"","hide-bottom-space":"",dark:"",outlined:"",multiple:"","use-chips":"","lazy-rules":"",rules:[t._isValidColor]},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[i("q-tooltip",{attrs:{delay:550,anchor:"bottom right",self:"top middle",offset:[10,10]}},[t._v("\n                                                    Select color\n                                                ")]),i("q-popup-proxy",[i("q-color",{attrs:{flat:"",square:"","no-header":"","no-footer":"","default-view":"palette","format-model":"hex"},on:{input:function(e){return t.newProduct.colors.push(t.selcolor)}},model:{value:t.selcolor,callback:function(e){t.selcolor=e},expression:"selcolor"}})],1)],1)]},proxy:!0}]),model:{value:t.newProduct.colors,callback:function(e){t.$set(t.newProduct,"colors",e)},expression:"newProduct.colors"}})],1),i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Details\n                                    ")]),i("div",{staticClass:"field-value"},[i("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(t.details,(function(e,o){return i("q-list",{key:"grp-"+o,staticClass:"group-list"},[i("q-item",[i("q-item-section",{on:{click:function(t){e.edit=!0}}},[e.edit?i("q-item-label",[i("q-input",{attrs:{type:"text",dense:"",dark:"","hide-bottom-space":"",placeholder:"Group title required ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()},t._isUniqueDetailGrp]},on:{keydown:function(i){if(!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;i.preventDefault(),e.edit=!1}},model:{value:e.group,callback:function(i){t.$set(e,"group",i)},expression:"\n                                                                    detail.group\n                                                                "}})],1):i("q-item-label",[t._v("\n                                                            "+t._s(e.group)+"\n                                                        ")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"add",color:"white"},on:{click:function(e){return t.appendDetailItem(o)}}},[i("q-tooltip",{attrs:{delay:550,anchor:"bottom right",self:"top middle"}},[t._v("\n                                                                Add new\n                                                                field\n                                                            ")])],1)],1)],1),i("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(e.items,(function(e,n){return i("q-item",{key:"item-"+n},[i("div",{staticClass:"detail-field-keyval"},[i("q-input",{staticClass:"detail-list-key",attrs:{type:"text",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Label required ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()}]},model:{value:e.label,callback:function(i){t.$set(e,"label",i)},expression:"\n                                                                    item.label\n                                                                "}}),i("q-input",{staticClass:"detail-list-value",attrs:{type:"text",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Value required ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()}]},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"\n                                                                    item.value\n                                                                "}})],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{staticClass:"cursor-pointer remove-icon",attrs:{name:"remove",color:"white"},on:{click:function(e){return t.removeDetailItem(o,n)}}},[i("q-tooltip",{attrs:{delay:550,anchor:"bottom right",self:"top middle"}},[t._v("\n                                                                    Remove\n                                                                    this\n                                                                    field\n                                                                ")])],1)],1)],1)})),1),i("br"),i("q-separator")],1)})),1),i("q-btn",{staticClass:"q-mt-sm",attrs:{dense:"",flat:"","no-caps":"",icon:"add",label:"Add Detail Group"},on:{click:t.appendGroup}})],1)])],1),i("q-stepper-navigation",[i("q-btn",{attrs:{color:"primary",type:"submit",label:"Continue",loading:t.loadingStep1,disable:t.loadingStep1}})],1)],1)],1),i("q-step",{attrs:{name:2,title:"Product Images",icon:"add_photo_alternate",done:t.step>2}},[i("p",[t._v("\n                            Click the + icon or drag the product images\n                            (.jpg/.png and Max 2MB) for upload.\n                        ")]),i("q-form",{ref:"step2Form"},[i("q-list",{staticClass:"detail-list",attrs:{separator:""}},[i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Gallery\n                                    ")]),i("div",{staticClass:"field-value"},[i("q-uploader",{ref:"pimgUploader",staticClass:"img-uploader",attrs:{multiple:"",square:"","hide-upload-btn":"",accept:"image/jpeg,image/png",label:"Image Upload",filter:t._validImage},on:{added:t.imgsAdded,removed:t.imgsRemoved,failed:t.onImgUploadFailed}})],1)])],1),i("q-stepper-navigation",[i("q-btn",{attrs:{type:"button",color:"primary",label:t.hasImgs?"Continue":"Skip",loading:t.loadingStep2,disable:t.loadingStep2},on:{click:t.startUpload},scopedSlots:t._u([{key:"loading",fn:function(){return[i("q-spinner-gears")]},proxy:!0}])})],1)],1)],1),i("q-step",{attrs:{name:3,title:"Order Customization Options",icon:"assignment",done:t.step>3}},[i("p",[t._v("Configure selectable options for orders.")]),i("p",[t._v("\n                            You may toggle between fixed choices and\n                            customer customizable list.\n                        ")]),i("q-form",{ref:"step3Form",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.saveStep3(e)}}},[i("q-list",{staticClass:"detail-list",attrs:{separator:""}},[i("q-item",{staticClass:"detail-field"},[i("span",{staticClass:"field-label"},[t._v("\n                                        Options\n                                    ")]),i("div",{staticClass:"field-value"},[i("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(t.options,(function(e,o){return i("q-list",{key:"optgrp-"+o,staticClass:"group-list"},[i("q-item",[i("q-item-section",{on:{click:function(t){e.edit=!0}}},[e.edit?i("q-item-label",[i("q-input",{attrs:{type:"text",dense:"",dark:"","hide-bottom-space":"",placeholder:"Attribute required ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()},t._isUniqueOptionGrp]},on:{keydown:function(i){if(!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;i.preventDefault(),e.edit=!1}},model:{value:e.attribute,callback:function(i){t.$set(e,"attribute",i)},expression:"\n                                                                    option.attribute\n                                                                "}})],1):i("q-item-label",[t._v("\n                                                            "+t._s(e.attribute)+"\n                                                        ")])],1),i("q-item-section",[i("q-toggle",{attrs:{"unchecked-icon":"lock",color:"green-4",label:e.userCustomizable?"User editable":"Fixed options"},on:{input:function(e){return t.toggleCustomChoice(e,o)}},model:{value:e.userCustomizable,callback:function(i){t.$set(e,"userCustomizable",i)},expression:"\n                                                                option.userCustomizable\n                                                            "}})],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"add",color:"white"},on:{click:function(e){return t.appendOptionItem(o)}}},[i("q-tooltip",{attrs:{delay:550,anchor:"bottom right",self:"top middle"}},[t._v("\n                                                                Add option\n                                                            ")])],1)],1)],1),i("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(t.filteredOptions(e.choices,e.userCustomizable),(function(e,n){return i("q-item",{key:"selitem-"+n},[i("div",{staticClass:"detail-field-keyval"},[i("q-input",{staticClass:"option-list-key",attrs:{readonly:"Other"==e.value,type:"text",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Option required ","lazy-rules":"",rules:[function(t){return null!==t&&""!==t.trim()}]},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"\n                                                                    choice.value\n                                                                "}}),i("q-input",{staticClass:"option-list-price",attrs:{type:"number",dense:"",outlined:"",dark:"","hide-bottom-space":"",placeholder:"Price ","lazy-rules":"",rules:[function(t){return""!==t&&!isNaN(t)}]},model:{value:e.price,callback:function(i){t.$set(e,"price",i)},expression:"\n                                                                    choice.price\n                                                                "}})],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{staticClass:"cursor-pointer remove-icon",attrs:{name:"remove",color:"white"},on:{click:function(i){return t.removeOptionItem(o,n,e.value)}}},[i("q-tooltip",{attrs:{delay:550,anchor:"bottom right",self:"top middle"}},[t._v("\n                                                                    Remove\n                                                                    this\n                                                                    option\n                                                                ")])],1)],1)],1)})),1),i("br"),i("q-separator")],1)})),1),i("q-btn",{staticClass:"q-mt-sm",attrs:{dense:"",flat:"","no-caps":"",icon:"add",label:"Add Customizable Option"},on:{click:t.appendOptions}})],1)])],1),i("q-stepper-navigation",[i("q-btn",{attrs:{type:"submit",color:"primary",label:"Continue",loading:t.loadingStep3,disable:t.loadingStep3}})],1)],1)],1),i("q-step",{attrs:{name:4,title:"Publish new product",icon:"add_comment"}},[i("q-form",{ref:"step4Form",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.saveStep4(e)}}},[i("p",[t._v("\n                                Great! Your new product is almost ready.\n                            ")]),i("p",[t._v("\n                                Click Publish to finalize and enable this\n                                product in the webstore.\n                            ")]),i("q-stepper-navigation",[i("q-btn",{attrs:{color:"primary",label:"Publish",type:"submit",loading:t.loadingStep4,disable:t.loadingStep4}})],1)],1)],1)],1)],1)]),i("div",{staticClass:"content-2"})])])},n=[],a=(i("fb6a"),i("5319"),i("ddb0"),i("c973")),s=i.n(a),r=i("392b"),l=i("ded3"),c=i.n(l),u=i("2f62");const d="addProduct";var p,m,h={computed:c()({},Object(u["d"])(d,["product"])),methods:c()(c()({},Object(u["b"])(d,["setProductInfo","setProductImages","setProductOptions","clearState"])),Object(u["c"])(d,["getProduct","isOngoing"]))},f=h,g=i("2877"),v=Object(g["a"])(f,p,m,!1,null,null,null),b=v.exports;let y=null,C=null;var q={name:"ProductAdd",mixins:[r["a"],b],meta(){return{title:"Add Product"}},beforeCreate(){C=this.$RepositoryFactory.get("categories"),y=this.$RepositoryFactory.get("products")},created(){this.$route.params.step&&(this.step=isNaN(this.$route.params.step)?1:parseInt(this.$route.params.step)),this.fetchCategories()},destroyed(){this.clearState()},mounted(){this.fetchNewProdSess()},computed:{hasImgs(){return this.selimgs&&this.selimgs.length>0}},data(){return{loadingStep1:!1,loadingStep2:!1,loadingStep3:!1,loadingStep4:!1,step:1,selimgs:[],selcolor:"",categories:[],colors:[],details:[],options:[],newProduct:{id:0,name:"",category:null,basePrice:100,minOrderQuantity:1,description:"",colors:[],options:[],details:[],images:[]}}},methods:{_isValidCategory(t){if(!(this.newProduct.category&&this.categories&&this.categories.length>0))return"Invalid category selected";const e=this.categories.find((t=>t.value===this.newProduct.category));return!!e||"Invalid category selected"},_isUniqueDetailGrp(t){if(this.details&&this.details.length>0){const e=this.details.filter((e=>e.group==t));if(e.length>1)return"Duplicate detail group title."}return!0},_isUniqueOptionGrp(t){if(this.options&&this.options.length>0){const e=this.options.filter((e=>e.attribute==t));if(e.length>1)return"Duplicate option group title."}return!0},_isValidColor(t){if(t&&t.length>0){const e=/^#([0-9A-F]{3}){1,2}$/i;for(let i in t)if(!e.test(t[i]))return"Invalid hex color selected"}return!0},_validImage(t){const e=t.filter((t=>t.size<2097152&&["image/png","image/jpeg"].includes(t.type)));return(!e||e.length<1||e.length<t.length)&&this.showNotif(!1,"Limit image size to 2MB (PNG/JPG)."),e},fetchCategories(){var t=this;return s()((function*(){try{const e=yield C.getProductCategorySelection();t.categories=e.slice()}catch(e){t.showNotif(!1,"Could not retrieve product categories.")}}))()},fetchNewProdSess(){var t=this;return s()((function*(){try{t.isOngoing()&&(t.newProduct=JSON.parse(JSON.stringify(t.getProduct())),t.newProduct.details&&(t.details=[...t.toReactiveDataFormat(t.newProduct.details)]),t.newProduct.options&&(t.options=[...t.toReactiveOptionsDataFormat(t.newProduct.options)]))}catch(e){t.showNotif(!1,"Could not retrieve product details.")}}))()},toJSONFormatOptions:function(t){const e=[];return t&&t.length>0&&t.map((t=>{let i=[];for(let e in t.choices)i.push({value:t.choices[e].value,price:t.choices[e].price});t.userCustomizable&&!this.hasCustomChoice(t.choices)?i.unshift({value:"Other",price:0}):!t.userCustomizable&&this.hasCustomChoice(t.choices)&&(i=this.filteredOptions(i,!1)),e.push({attribute:t.attribute,choices:i,userCustomizable:t.userCustomizable})})),e},toReactiveOptionsDataFormat:function(t){const e=[];return t&&t.length>0&&t.map((t=>{e.push({attribute:t.attribute,userCustomizable:t.userCustomizable,choices:t.choices,edit:!0})})),e},toJSONFormatDetails:function(t){const e=[];return t&&t.length>0&&t.map((t=>{const i={};t.items&&t.items.length>0&&t.items.map((t=>{i[t.label]=t.value})),t.group&&Object.keys(i).length>0&&e.push({group:t.group,items:i})})),e},toReactiveDataFormat:function(t){const e=[];return t&&t.length>0&&t.map((t=>{const i=[];if(t.items&&Object.keys(t.items).length>0)for(let e in t.items)i.push({label:e,value:t.items[e].toString()});t.group&&i.length>0&&e.push({group:t.group,items:i,edit:!0})})),e},filteredOptions(t,e){return t&&t.length>0&&!e?t.filter((t=>"Other"!==t.value)):t},saveStep1:function(t){var e=this;this.loadingStep1=!0,this.$refs.step1Form.validate().then(function(){var t=s()((function*(t){if(t){let t={};e.newProduct.details=[...e.toJSONFormatDetails(e.details)],e.isOngoing()?t=yield y.updateProduct(e.newProduct.id,e.newProduct):(t=yield y.createProduct(e.newProduct),e.newProduct.id=t.id),e.setProductInfo(JSON.parse(JSON.stringify(e.newProduct))),e.loadingStep1=!1,e.step=2,e.$router.replace("/products/add/2").catch((t=>{}))}}));return function(e){return t.apply(this,arguments)}}()).catch((t=>{this.showNotif(!1,"Could not create product."),this.loadingStep1=!1}))},saveStep2:function(t){var e=this;this.loadingStep2=!0,this.$refs.step2Form.validate().then(function(){var i=s()((function*(i){i&&(t&&(e.newProduct.images=t.slice(),e.setProductImages(t)),e.loadingStep2=!1,e.step=3,e.$router.replace("/products/add/3").catch((t=>{})))}));return function(t){return i.apply(this,arguments)}}()).catch((t=>{this.showNotif(!1,"Error has occurred."),this.loadingStep2=!1}))},saveStep3:function(t){var e=this;this.loadingStep3=!0,this.$refs.step3Form.validate().then(function(){var t=s()((function*(t){if(t){if(!e.isOngoing())throw"Start from step 1.";const t=[...e.toJSONFormatOptions(e.options)];e.newProduct.options=t.slice();yield y.updateProduct(e.newProduct.id,{options:e.newProduct.options});e.setProductOptions(t),e.loadingStep3=!1,e.step=4,e.$router.replace("/products/add/4").catch((t=>{}))}}));return function(e){return t.apply(this,arguments)}}()).catch((t=>{this.showNotif(!1,"Error adding customization options."),this.loadingStep3=!1}))},saveStep4:function(t){var e=this;this.loadingStep4=!0,this.$refs.step4Form.validate().then(function(){var t=s()((function*(t){if(t){if(!e.isOngoing())throw"Start from step 1.";yield y.updateProduct(e.newProduct.id,{isActive:!0});e.loadingStep4=!1,e.returnToPageIndex("/products")}}));return function(e){return t.apply(this,arguments)}}()).catch((t=>{this.showNotif(!1,"Could not activate product."),this.loadingStep4=!1}))},removeGroup:function(t){this.$delete(this.details,t)},removeDetailItem:function(t,e){this.$delete(this.details[t].items,e),0===this.details[t].items.length&&this.removeGroup(t)},appendGroup:function(t){this.details.push({group:"New Group",edit:!0,items:[{label:"",value:""}]})},appendDetailItem:function(t){!isNaN(t)&&this.details[t]&&this.details[t].items.push({label:"",value:""})},removeOptions:function(t){this.$delete(this.options,t)},removeOptionItem:function(t,e,i){this.$delete(this.options[t].choices,e),0===this.options[t].choices.length?this.removeOptions(t):"Other"==i&&(this.options[t].userCustomizable=!1)},appendOptions:function(t){this.options.push({attribute:"New Option",userCustomizable:!1,edit:!0,choices:[{value:"",price:""}]})},appendOptionItem:function(t){!isNaN(t)&&this.options[t]&&this.options[t].choices.push({value:"",price:""})},hasCustomChoice(t){return!!(t&&t.length>0)&&t.find((t=>"Other"==t.value))},toggleCustomChoice:function(t,e){t?this.options[e]&&!this.hasCustomChoice(this.options[e].choices)&&this.options[e].choices.unshift({value:"Other",price:""}):this.options[e]&&this.hasCustomChoice(this.options[e].choices)&&this.options[e].choices.shift()},startUpload(){var t=this;return s()((function*(){try{if(t.loadingStep2=!0,!t.isOngoing())throw"Start from step 1.";if(t.hasImgs){let e=new FormData;t.selimgs.forEach((t=>{e.append("image",t)})),e.append("imageType","gallery");const i=yield y.uploadImgs(t.newProduct.id,e);t.selimgs=[],t.saveStep2(i)}else t.saveStep2(!1)}catch(e){t.showNotif(!1,"Could not upload images."),t.loadingStep2=!1}}))()},imgsRemoved(t){this.selimgs=this.selimgs.filter((e=>e!==t[0]))},imgsAdded(t){this.selimgs.push(...t)},onImgUploadFailed:function(t){this.showNotif(!1,"Failed to add your selected image. ")}}},w=q,S=(i("0a25"),i("256e"),i("9989")),P=i("0016"),k=i("f531"),O=i("87fe"),_=i("0378"),x=i("1c1c"),D=i("66e5"),F=i("ddd8"),N=i("27f9"),I=i("05c0"),$=i("7cbe"),z=i("b498"),Q=i("4074"),R=i("0170"),G=i("eb85"),M=i("9c40"),U=i("b19c"),A=i("ee89"),j=i("cf57"),J=i("9564"),E=i("8572"),L=i("eebe"),Y=i.n(L),B=Object(g["a"])(w,o,n,!1,null,"fffba1d2",null);e["default"]=B.exports;Y()(B,"components",{QPage:S["a"],QIcon:P["a"],QStepper:k["a"],QStep:O["a"],QForm:_["a"],QList:x["a"],QItem:D["a"],QSelect:F["a"],QInput:N["a"],QTooltip:I["a"],QPopupProxy:$["a"],QColor:z["a"],QItemSection:Q["a"],QItemLabel:R["a"],QSeparator:G["a"],QBtn:M["a"],QStepperNavigation:U["a"],QUploader:A["a"],QSpinnerGears:j["a"],QToggle:J["a"],QField:E["a"]})},"392b":function(t,e,i){"use strict";i("4d90"),i("5319");var o,n,a={data(){return{prevRoute:null}},beforeRouteEnter(t,e,i){i((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,i){return t.replace(new RegExp(e,"g"),i)},resolveAssetsUrl:function(t){return"https://api.bake-free.co/"+t},showNotif:function(t,e){this.$q.notify({color:t?"green-4":"negative",textColor:"white",icon:t?"check_circle_outline":"error_outline",timeout:"2500",position:"top",message:e})},returnToPageIndex:function(t){this.prevRoute&&"/"!==this.prevRoute.path?this.$router.go(-1):this.$router.push(t).catch((t=>{}))},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},toHumanReadableDt:function(t){const e=new Date(t);return e?e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+" "+e.getHours().toString().padStart(2,0)+":"+e.getMinutes().toString().padStart(2,0):t}}},s=a,r=i("2877"),l=Object(r["a"])(s,o,n,!1,null,null,null);e["a"]=l.exports},f776:function(t,e,i){}}]);