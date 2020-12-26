(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "392b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__("4d90");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/mixins/helpers.vue?vue&type=script&lang=js&


/* harmony default export */ var helpersvue_type_script_lang_js_ = ({
  data() {
    return {
      prevRoute: null
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },

  computed: {
    today() {
      const d = new Date();
      const today = {
        month: d.toLocaleDateString("en-US", {
          month: "long"
        }),
        year: d.getFullYear(),
        dayOfMonth: d.getDate(),
        dayOfWeek: d.getDay(),
        human: d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric"
        }),
        iso: d.toISOString(),
        yyyymmdd: d.getFullYear() + "-" + (d.getMonth() + 1).toString().padStart(2, 0) + "-" + d.getDate().toString().padStart(2, "0")
      };
      return today;
    },

    startDayOfMonth() {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth(), 1);
    },

    lastDayOfMonth() {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth() + 1, 0);
    }

  },
  methods: {
    // Shared methods
    replaceAll: function (txt, search, replace) {
      return txt.replace(new RegExp(search, "g"), replace);
    },
    // Uploaded Assets URL
    resolveAssetsUrl: function (file) {
      return "https://api.bake-free.co" + "\/" + file;
    },
    showNotif: function (isSuccess, msg) {
      this.$q.notify({
        color: isSuccess ? "green-4" : "negative",
        textColor: "white",
        icon: isSuccess ? "check_circle_outline" : "error_outline",
        timeout: "2500",
        position: "top",
        message: msg
      });
    },
    returnToPageIndex: function (path) {
      if (this.prevRoute && this.prevRoute.path !== "/") {
        this.$router.go(-1);
      } else {
        this.$router.push(path).catch(err => {});
      }
    },
    findMaxDt: function (dt1, dt2) {
      return new Date(Math.max(new Date(dt1), new Date(dt2)));
    },
    findMinDt: function (dt1, dt2) {
      return new Date(Math.min(new Date(dt1), new Date(dt2)));
    },
    toQDateFormat: function (d) {
      // YYYY/MM/DD format
      if (d) {
        return d.getFullYear() + "/" + (d.getMonth() + 1).toString().padStart(2, 0) + "/" + d.getDate().toString().padStart(2, 0);
      }

      return d;
    },
    toHumanReadableDt: function (str_date) {
      const d = new Date(str_date);
      if (!d) return str_date;
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }) + " " + d.getHours().toString().padStart(2, 0) + ":" + d.getMinutes().toString().padStart(2, 0);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/helpers.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_helpersvue_type_script_lang_js_ = (helpersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/mixins/helpers.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_helpersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var helpers = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "403e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4b37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4a52583a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("403e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4a52583a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4a52583a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4a52583a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4ba7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "85f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/products/Edit.vue?vue&type=template&id=4a52583a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Edit Product Information")]),_c('br'),_c('p',[_vm._v("\n                You may edit the selected product details through this form.\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"cake"}}),_vm._v("\n                Product Info\n            ")],1),(_vm.loading)?_c('div',[_c('q-item',{staticClass:"q-my-sm"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1)],1):_c('div',[_c('q-stepper',{staticClass:"bg-none",attrs:{"vertical":"","animated":"","done-color":"primary","inactive-color":"grey-5"},model:{value:(_vm.step),callback:function ($$v) {_vm.step=$$v},expression:"step"}},[_c('q-step',{attrs:{"name":1,"title":"Basic Information","icon":"assignment","done":_vm.step > 1}},[_c('p',[_vm._v("Select category and fill out basic info.")]),_c('q-form',{ref:"step1Form",attrs:{"disabled":_vm.hasError || _vm.loading},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.saveStep1($event)}}},[_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Category\n                                    ")]),_c('q-select',{staticClass:"field-value",attrs:{"options":_vm.categories,"dark":"","dense":"","outlined":"","options-dense":"","hide-bottom-space":"","emit-value":"","map-options":"","lazy-rules":"","rules":[_vm._isValidCategory]},model:{value:(_vm.editProduct.category),callback:function ($$v) {_vm.$set(_vm.editProduct, "category", $$v)},expression:"editProduct.category"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Product Name\n                                    ")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"text","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Field required. ","lazy-rules":"","rules":[
                                            function (val) { return val !== null &&
                                                val.trim() !== ''; }
                                        ]},model:{value:(_vm.editProduct.name),callback:function ($$v) {_vm.$set(_vm.editProduct, "name", $$v)},expression:"editProduct.name"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Description\n                                    ")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"textarea","textarea":"","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Field required. ","lazy-rules":"","rules":[
                                            function (val) { return val !== null &&
                                                val.trim() !== ''; }
                                        ]},model:{value:(_vm.editProduct.description),callback:function ($$v) {_vm.$set(_vm.editProduct, "description", $$v)},expression:"editProduct.description"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Base price\n                                    ")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"number","min":"1","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Field required. ","lazy-rules":"","rules":[function (val) { return !isNaN(val); }]},model:{value:(_vm.editProduct.basePrice),callback:function ($$v) {_vm.$set(_vm.editProduct, "basePrice", $$v)},expression:"editProduct.basePrice"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Minimum Order Quantity\n                                    ")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"number","min":"1","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Field required. ","lazy-rules":"","rules":[
                                            function (val) { return !isNaN(val) && val > 0; }
                                        ]},model:{value:(
                                            _vm.editProduct.minOrderQuantity
                                        ),callback:function ($$v) {_vm.$set(_vm.editProduct, "minOrderQuantity", $$v)},expression:"\n                                            editProduct.minOrderQuantity\n                                        "}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Colors\n                                    ")]),_c('q-select',{staticClass:"field-value",attrs:{"hide-dropdown-icon":"","hide-bottom-space":"","dark":"","outlined":"","multiple":"","use-chips":"","lazy-rules":"","rules":[_vm._isValidColor]},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"colorize"}},[_c('q-tooltip',{attrs:{"delay":550,"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("\n                                                    Select color\n                                                ")]),_c('q-popup-proxy',[_c('q-color',{attrs:{"flat":"","square":"","no-header":"","no-footer":"","default-view":"palette","format-model":"hex"},on:{"input":function($event){return _vm.editProduct.colors.push(
                                                                _vm.selcolor
                                                            )}},model:{value:(_vm.selcolor),callback:function ($$v) {_vm.selcolor=$$v},expression:"selcolor"}})],1)],1)]},proxy:true}]),model:{value:(_vm.editProduct.colors),callback:function ($$v) {_vm.$set(_vm.editProduct, "colors", $$v)},expression:"editProduct.colors"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Details\n                                    ")]),_c('div',{staticClass:"field-value"},[_c('transition-group',{attrs:{"name":"fade","tag":"div"}},_vm._l((_vm.details),function(detail,grpkey){return _c('q-list',{key:'grp-' + grpkey,staticClass:"group-list"},[_c('q-item',[_c('q-item-section',{on:{"click":function($event){detail.edit = true}}},[(
                                                                detail.edit
                                                            )?_c('q-item-label',[_c('q-input',{attrs:{"type":"text","dense":"","dark":"","hide-bottom-space":"","placeholder":"Group title required ","lazy-rules":"","rules":[
                                                                    function (val) { return val !==
                                                                            null &&
                                                                        val.trim() !==
                                                                            ''; },
                                                                    _vm._isUniqueDetailGrp
                                                                ]},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();detail.edit = false}},model:{value:(
                                                                    detail.group
                                                                ),callback:function ($$v) {_vm.$set(detail, "group", $$v)},expression:"\n                                                                    detail.group\n                                                                "}})],1):_c('q-item-label',[_vm._v("\n                                                            "+_vm._s(detail.group)+"\n                                                        ")])],1),_c('q-item-section',{attrs:{"side":""}},[_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"add","color":"white"},on:{"click":function($event){return _vm.appendDetailItem(
                                                                    grpkey
                                                                )}}},[_c('q-tooltip',{attrs:{"delay":550,"anchor":"bottom right","self":"top middle"}},[_vm._v("\n                                                                Add new\n                                                                field\n                                                            ")])],1)],1)],1),_c('transition-group',{attrs:{"name":"fade","tag":"div"}},_vm._l((detail.items),function(item,key){return _c('q-item',{key:'item-' + key},[_c('div',{staticClass:"detail-field-keyval"},[_c('q-input',{staticClass:"detail-list-key",attrs:{"type":"text","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Label required ","lazy-rules":"","rules":[
                                                                    function (val) { return val !==
                                                                            null &&
                                                                        val.trim() !==
                                                                            ''; }
                                                                ]},model:{value:(
                                                                    item.label
                                                                ),callback:function ($$v) {_vm.$set(item, "label", $$v)},expression:"\n                                                                    item.label\n                                                                "}}),_c('q-input',{staticClass:"detail-list-value",attrs:{"type":"text","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Value required ","lazy-rules":"","rules":[
                                                                    function (val) { return val !==
                                                                            null &&
                                                                        val.trim() !==
                                                                            ''; }
                                                                ]},model:{value:(
                                                                    item.value
                                                                ),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"\n                                                                    item.value\n                                                                "}})],1),_c('q-item-section',{attrs:{"side":""}},[_c('q-icon',{staticClass:"cursor-pointer remove-icon",attrs:{"name":"remove","color":"white"},on:{"click":function($event){return _vm.removeDetailItem(
                                                                        grpkey,
                                                                        key
                                                                    )}}},[_c('q-tooltip',{attrs:{"delay":550,"anchor":"bottom right","self":"top middle"}},[_vm._v("\n                                                                    Remove\n                                                                    this\n                                                                    field\n                                                                ")])],1)],1)],1)}),1),_c('br'),_c('q-separator')],1)}),1),_c('q-btn',{staticClass:"q-mt-sm",attrs:{"dense":"","flat":"","no-caps":"","icon":"add","label":"Add Detail Group"},on:{"click":_vm.appendGroup}})],1)])],1),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","type":"submit","label":"Continue","loading":_vm.loadingStep1,"disable":_vm.loadingStep1}})],1)],1)],1),_c('q-step',{attrs:{"name":2,"title":"Product Images","icon":"add_photo_alternate","done":_vm.step > 2}},[_c('p',[_vm._v("\n                            Click the + icon or drag the product images\n                            (.jpg/.png and Max 2MB) for upload.\n                        ")]),_c('q-form',{ref:"step2Form",attrs:{"disabled":_vm.hasError || _vm.loading}},[_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Gallery\n                                    ")]),_c('div',{staticClass:"field-value full-width"},[_c('q-uploader',{ref:"pimgUploader",staticClass:"img-uploader",attrs:{"multiple":"","square":"","hide-upload-btn":"","accept":"image/jpeg,image/png","label":"Image Upload","filter":_vm._validImage},on:{"added":_vm.imgsAdded,"removed":_vm.imgsRemoved,"failed":_vm.onImgUploadFailed}}),_c('br'),_c('div',{staticClass:"flex"},_vm._l((_vm.editProduct.images),function(pimg){return _c('q-card',{key:pimg._id,staticClass:"q-mr-sm q-mb-sm"},[(
                                                        pimg.imageType ==
                                                            'gallery'
                                                    )?_c('div',[_c('div',{staticClass:"pimg-card",style:('background-image:url(\'' +
                                                                _vm.resolveAssetsUrl(
                                                                    ("" + (pimg.image))
                                                                ) +
                                                                '\')')}),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{attrs:{"dense":"","flat":"","round":"","color":"red","icon":"delete"},on:{"click":function($event){return _vm.delImage(
                                                                    pimg._id
                                                                )}}})],1)],1):_vm._e()])}),1)],1)])],1),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"type":"button","color":"primary","label":_vm.hasImgs ? 'Continue' : 'Skip',"loading":_vm.loadingStep2,"disable":_vm.loadingStep2},on:{"click":_vm.startUpload},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true}])}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){return _vm.goBack(1)}}})],1)],1)],1),_c('q-step',{attrs:{"name":3,"title":"Order Customization Options","icon":"assignment","done":_vm.step > 3}},[_c('p',[_vm._v("Configure selectable options for orders.")]),_c('p',[_vm._v("\n                            You may toggle between fixed choices and\n                            customer customizable list.\n                        ")]),_c('q-form',{ref:"step3Form",attrs:{"disabled":_vm.hasError || _vm.loading},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.saveStep3($event)}}},[_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                        Options\n                                    ")]),_c('div',{staticClass:"field-value"},[_c('transition-group',{attrs:{"name":"fade","tag":"div"}},_vm._l((_vm.options),function(option,grpkey){return _c('q-list',{key:'optgrp-' + grpkey,staticClass:"group-list"},[_c('q-item',[_c('q-item-section',{on:{"click":function($event){option.edit = true}}},[(
                                                                option.edit
                                                            )?_c('q-item-label',[_c('q-input',{attrs:{"type":"text","dense":"","dark":"","hide-bottom-space":"","placeholder":"Attribute required ","lazy-rules":"","rules":[
                                                                    function (val) { return val !==
                                                                            null &&
                                                                        val.trim() !==
                                                                            ''; },
                                                                    _vm._isUniqueOptionGrp
                                                                ]},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();option.edit = false}},model:{value:(
                                                                    option.attribute
                                                                ),callback:function ($$v) {_vm.$set(option, "attribute", $$v)},expression:"\n                                                                    option.attribute\n                                                                "}})],1):_c('q-item-label',[_vm._v("\n                                                            "+_vm._s(option.attribute)+"\n                                                        ")])],1),_c('q-item-section',[_c('q-toggle',{attrs:{"unchecked-icon":"lock","color":"green-4","label":option.userCustomizable
                                                                    ? 'User editable'
                                                                    : 'Fixed options'},on:{"input":function($event){return _vm.toggleCustomChoice(
                                                                    $event,
                                                                    grpkey
                                                                )}},model:{value:(
                                                                option.userCustomizable
                                                            ),callback:function ($$v) {_vm.$set(option, "userCustomizable", $$v)},expression:"\n                                                                option.userCustomizable\n                                                            "}})],1),_c('q-item-section',{attrs:{"side":""}},[_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"add","color":"white"},on:{"click":function($event){return _vm.appendOptionItem(
                                                                    grpkey
                                                                )}}},[_c('q-tooltip',{attrs:{"delay":550,"anchor":"bottom right","self":"top middle"}},[_vm._v("\n                                                                Add option\n                                                            ")])],1)],1)],1),_c('transition-group',{attrs:{"name":"fade","tag":"div"}},_vm._l((_vm.filteredOptions(
                                                            option.choices,
                                                            option.userCustomizable
                                                        )),function(choice,key){return _c('q-item',{key:'selitem-' + key},[_c('div',{staticClass:"detail-field-keyval"},[_c('q-input',{staticClass:"option-list-key",attrs:{"readonly":choice.value ==
                                                                        'Other',"type":"text","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Option required ","lazy-rules":"","rules":[
                                                                    function (val) { return val !==
                                                                            null &&
                                                                        val.trim() !==
                                                                            ''; }
                                                                ]},model:{value:(
                                                                    choice.value
                                                                ),callback:function ($$v) {_vm.$set(choice, "value", $$v)},expression:"\n                                                                    choice.value\n                                                                "}}),_c('q-input',{staticClass:"option-list-price",attrs:{"type":"number","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Price ","lazy-rules":"","rules":[
                                                                    function (val) { return val !==
                                                                            '' &&
                                                                        !isNaN(
                                                                            val
                                                                        ); }
                                                                ]},model:{value:(
                                                                    choice.price
                                                                ),callback:function ($$v) {_vm.$set(choice, "price", $$v)},expression:"\n                                                                    choice.price\n                                                                "}})],1),_c('q-item-section',{attrs:{"side":""}},[_c('q-icon',{staticClass:"cursor-pointer remove-icon",attrs:{"name":"remove","color":"white"},on:{"click":function($event){return _vm.removeOptionItem(
                                                                        grpkey,
                                                                        key,
                                                                        choice.value
                                                                    )}}},[_c('q-tooltip',{attrs:{"delay":550,"anchor":"bottom right","self":"top middle"}},[_vm._v("\n                                                                    Remove\n                                                                    this\n                                                                    option\n                                                                ")])],1)],1)],1)}),1),_c('br'),_c('q-separator')],1)}),1),_c('q-btn',{staticClass:"q-mt-sm",attrs:{"dense":"","flat":"","no-caps":"","icon":"add","label":"Add Customizable Option"},on:{"click":_vm.appendOptions}})],1)])],1),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"type":"submit","color":"primary","label":"Continue","loading":_vm.loadingStep3,"disable":_vm.loadingStep3}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){return _vm.goBack(2)}}})],1)],1)],1),_c('q-step',{attrs:{"name":4,"title":"Done!","icon":"add_comment"}},[_c('q-form',{ref:"step4Form",attrs:{"disabled":_vm.hasError || _vm.loading},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.saveStep4($event)}}},[_c('p',[_vm._v("\n                                You have successfully updated the product\n                                details.\n                            ")]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Finish","type":"submit","loading":_vm.loadingStep4,"disable":_vm.loadingStep4}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){return _vm.goBack(3)}}})],1)],1)],1)],1)],1)]),_c('div',{staticClass:"content-2"})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/products/Edit.vue?vue&type=template&id=4a52583a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/products/Edit.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let Product = null,
    Category = null;
/* harmony default export */ var Editvue_type_script_lang_js_ = ({
  name: "ProductEdit",
  mixins: [helpers["a" /* default */]],
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.fetchProductDetails();
      }
    }

  },

  meta() {
    return {
      title: "Edit Product"
    };
  },

  beforeCreate() {
    Category = this.$RepositoryFactory.get("categories");
    Product = this.$RepositoryFactory.get("products");
  },

  created() {
    if (true) {
      this.fetchCategories();
    }
  },

  mounted() {
    this.fetchProductDetails();
  },

  computed: {
    hasImgs() {
      return this.selimgs && this.selimgs.length > 0;
    }

  },

  data() {
    return {
      loadingStep1: false,
      loadingStep2: false,
      loadingStep3: false,
      loadingStep4: false,
      step: 1,
      selimgs: [],
      selcolor: "",
      categories: [],
      colors: [],
      details: [],
      options: [],
      loading: true,
      hasError: false,
      editProduct: {
        name: "",
        category: null,
        basePrice: 100,
        minOrderQuantity: 1,
        description: "",
        colors: [],
        options: [],
        details: [],
        images: []
      }
    };
  },

  methods: {
    _isValidCategory(val) {
      if (!(this.editProduct.category && this.categories && this.categories.length > 0)) {
        return "Invalid category selected";
      }

      const categoryItem = this.categories.find(option => {
        return option.value === this.editProduct.category;
      });
      if (!categoryItem) return "Invalid category selected";
      return true;
    },

    _isUniqueDetailGrp(val) {
      if (this.details && this.details.length > 0) {
        const res = this.details.filter(item => {
          return item.group == val;
        });

        if (res.length > 1) {
          return "Duplicate detail group title.";
        }
      }

      return true;
    },

    _isUniqueOptionGrp(val) {
      if (this.options && this.options.length > 0) {
        const res = this.options.filter(item => {
          return item.attribute == val;
        });

        if (res.length > 1) {
          return "Duplicate option group title.";
        }
      }

      return true;
    },

    _isValidColor(val) {
      if (val && val.length > 0) {
        const hexpattern = /^#([0-9A-F]{3}){1,2}$/i;

        for (let i in val) {
          if (!hexpattern.test(val[i])) return "Invalid hex color selected";
        }
      }

      return true;
    },

    _validImage(files) {
      const filtered = files.filter(file => file.size < 1024 * 1024 * 2 && // 2MB
      ["image/png", "image/jpeg"].includes(file.type));

      if (!filtered || filtered.length < 1 || filtered.length < files.length) {
        this.showNotif(false, "Selected image is not valid.");
      }

      return filtered;
    },

    fetchCategories() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        try {
          const resp = yield Category.getProductCategorySelection();
          _this.categories = resp.slice();
        } catch (err) {
          _this.showNotif(false, "Could not retrieve product categories.");

          _this.hasError = true;
        } finally {
          _this.loading = false;
        }
      })();
    },

    fetchProductDetails() {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        try {
          // Fetch product details
          const res = yield Product.getProduct(_this2.$route.params.id);
          _this2.editProduct = res;

          if (_this2.editProduct.details) {
            _this2.details = [..._this2.toReactiveDataFormat(_this2.editProduct.details)];
          }

          if (_this2.editProduct.options) {
            _this2.options = [..._this2.toReactiveOptionsDataFormat(_this2.editProduct.options)];
          }
        } catch (err) {
          _this2.showNotif(false, "Could not retrieve product details.");
        }
      })();
    },

    toJSONFormatOptions: function (options) {
      const retArr = [];

      if (options && options.length > 0) {
        options.map(option => {
          let choices = []; // copy choices list

          for (let i in option.choices) {
            choices.push({
              value: option.choices[i].value,
              price: option.choices[i].price
            });
          } // check settings


          if (option.userCustomizable && !this.hasCustomChoice(option.choices)) {
            // add 'Other'
            choices.unshift({
              value: "Other",
              price: 0
            });
          } else if (!option.userCustomizable && this.hasCustomChoice(option.choices)) {
            // remove 'Other'
            choices = this.filteredOptions(choices, false);
          }

          retArr.push({
            attribute: option.attribute,
            choices: choices,
            userCustomizable: option.userCustomizable
          });
        });
      }

      return retArr;
    },
    toReactiveOptionsDataFormat: function (options) {
      const retArr = [];

      if (options && options.length > 0) {
        options.map(option => {
          retArr.push({
            attribute: option.attribute,
            userCustomizable: option.userCustomizable,
            choices: option.choices,
            edit: true
          });
        });
      }

      return retArr;
    },
    toJSONFormatDetails: function (details) {
      const retArr = [];

      if (details && details.length > 0) {
        details.map(detail => {
          const groupItems = {};

          if (detail.items && detail.items.length > 0) {
            detail.items.map(item => {
              groupItems[item.label] = item.value;
            });
          }

          if (detail.group && Object.keys(groupItems).length > 0) {
            retArr.push({
              group: detail.group,
              items: groupItems
            });
          }
        });
      }

      return retArr;
    },
    toReactiveDataFormat: function (details) {
      const retArr = [];

      if (details && details.length > 0) {
        details.map(detail => {
          const groupItemsArr = [];

          if (detail.items && Object.keys(detail.items).length > 0) {
            for (let key in detail.items) {
              groupItemsArr.push({
                label: key,
                value: detail.items[key].toString()
              });
            }
          }

          if (detail.group && groupItemsArr.length > 0) {
            retArr.push({
              group: detail.group,
              items: groupItemsArr,
              edit: true
            });
          }
        });
      } // console.log(retArr);


      return retArr;
    },

    filteredOptions(list, showOther) {
      if (list && list.length > 0 && !showOther) {
        return list.filter(item => {
          return item.value !== "Other";
        });
      }

      return list;
    },

    saveStep1: function (evt) {
      var _this3 = this;

      this.loadingStep1 = true;
      this.$refs.step1Form.validate().then( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()(function* (success) {
          if (success) {
            let res = {};
            _this3.editProduct.details = [..._this3.toJSONFormatDetails(_this3.details)]; // Update product and return id (inactive)

            res = yield Product.updateProduct(_this3.$route.params.id, _this3.editProduct);
            _this3.loadingStep1 = false;
            _this3.step = 2;
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch(err => {
        this.showNotif(false, "Could not edit product info.");
        this.loadingStep1 = false;
      });
    },
    saveStep2: function (imgs) {
      var _this4 = this;

      this.loadingStep2 = true;
      this.$refs.step2Form.validate().then( /*#__PURE__*/function () {
        var _ref2 = asyncToGenerator_default()(function* (success) {
          if (success) {
            if (imgs) {
              _this4.editProduct.images = imgs.slice();
            }

            _this4.loadingStep2 = false;
            _this4.step = 3;
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(err => {
        this.showNotif(false, "Error has occurred.");
        this.loadingStep2 = false;
      });
    },
    saveStep3: function (evt) {
      var _this5 = this;

      this.loadingStep3 = true;
      this.$refs.step3Form.validate().then( /*#__PURE__*/function () {
        var _ref3 = asyncToGenerator_default()(function* (success) {
          if (success) {
            const opts = [..._this5.toJSONFormatOptions(_this5.options)];
            _this5.editProduct.options = opts.slice();
            const res = yield Product.updateProduct(_this5.$route.params.id, {
              options: _this5.editProduct.options
            });
            _this5.loadingStep3 = false;
            _this5.step = 4;
          }
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()).catch(err => {
        this.showNotif(false, "Error updating customization options.");
        this.loadingStep3 = false;
      });
    },
    saveStep4: function (evt) {
      var _this6 = this;

      this.loadingStep4 = true;
      this.$refs.step4Form.validate().then( /*#__PURE__*/function () {
        var _ref4 = asyncToGenerator_default()(function* (success) {
          _this6.loadingStep4 = false;

          _this6.returnToPageIndex("/products");
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }()).catch(err => {
        this.showNotif(false, "Error has occurred product.");
        this.loadingStep4 = false;
      });
    },
    goBack: function (step) {
      if ([1, 2, 3].includes(step)) {
        this.step = step;
      }
    },
    removeGroup: function (key) {
      this.$delete(this.details, key);
    },
    removeDetailItem: function (grp, key) {
      this.$delete(this.details[grp].items, key);

      if (this.details[grp].items.length === 0) {
        this.removeGroup(grp);
      }
    },
    appendGroup: function (evt) {
      this.details.push({
        group: "New Group",
        edit: true,
        items: [{
          label: "",
          value: ""
        }]
      });
    },
    appendDetailItem: function (grp) {
      if (!isNaN(grp) && this.details[grp]) {
        this.details[grp].items.push({
          label: "",
          value: ""
        });
      }
    },
    removeOptions: function (key) {
      this.$delete(this.options, key);
    },
    removeOptionItem: function (grp, key, value) {
      this.$delete(this.options[grp].choices, key);

      if (this.options[grp].choices.length === 0) {
        this.removeOptions(grp);
      } else if (value == "Other") {
        this.options[grp].userCustomizable = false;
      }
    },
    appendOptions: function (evt) {
      this.options.push({
        attribute: "New Option",
        userCustomizable: false,
        edit: true,
        choices: [{
          value: "",
          price: ""
        }]
      });
    },
    appendOptionItem: function (grp) {
      if (!isNaN(grp) && this.options[grp]) {
        this.options[grp].choices.push({
          value: "",
          price: ""
        });
      }
    },

    hasCustomChoice(list) {
      if (list && list.length > 0) {
        return list.find(item => {
          return item.value == "Other";
        });
      }

      return false;
    },

    toggleCustomChoice: function (toggle, grp) {
      if (toggle) {
        if (this.options[grp] && !this.hasCustomChoice(this.options[grp].choices)) {
          this.options[grp].choices.unshift({
            value: "Other",
            price: ""
          });
        }
      } else {
        if (this.options[grp] && this.hasCustomChoice(this.options[grp].choices)) {
          this.options[grp].choices.shift();
        }
      }
    },

    delImage(pImgID) {
      var _this7 = this;

      return asyncToGenerator_default()(function* () {
        try {
          const res = yield Product.deleteImage(_this7.$route.params.id, pImgID); // Remove from local list

          _this7.editProduct.images = _this7.editProduct.images.filter(item => {
            return item._id !== pImgID;
          });
        } catch (err) {
          _this7.showNotif(false, "Could not remove image." + err);
        }
      })();
    },

    startUpload() {
      var _this8 = this;

      return asyncToGenerator_default()(function* () {
        try {
          _this8.loadingStep2 = true;

          if (_this8.hasImgs) {
            let fd = new FormData();

            _this8.selimgs.forEach(file => {
              fd.append("image", file);
            });

            fd.append("imageType", "gallery");
            const res = yield Product.uploadImgs(_this8.$route.params.id, fd); // clear

            _this8.selimgs = [];

            _this8.saveStep2(res);
          } else {
            _this8.saveStep2(false);
          }
        } catch (err) {
          _this8.showNotif(false, "Could not upload images.");

          _this8.loadingStep2 = false;
        }
      })();
    },

    imgsRemoved(file) {
      // Remove from list
      this.selimgs = this.selimgs.filter(item => item !== file[0]);
    },

    imgsAdded(file) {
      // Append to list
      this.selimgs.push(...file);
    },

    onImgUploadFailed: function (info) {
      this.showNotif(false, "Failed to add your selected image. ");
    }
  }
});
// CONCATENATED MODULE: ./src/pages/products/Edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_Editvue_type_script_lang_js_ = (Editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/products/Edit.vue?vue&type=style&index=0&id=4a52583a&lang=scss&scoped=true&
var Editvue_type_style_index_0_id_4a52583a_lang_scss_scoped_true_ = __webpack_require__("4b37");

// EXTERNAL MODULE: ./src/pages/products/Edit.vue?vue&type=style&index=1&lang=scss&
var Editvue_type_style_index_1_lang_scss_ = __webpack_require__("f58c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__("f531");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js + 1 modules
var QStep = __webpack_require__("87fe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/color/QColor.js + 4 modules
var QColor = __webpack_require__("b498");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepperNavigation.js
var QStepperNavigation = __webpack_require__("b19c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 2 modules
var QField = __webpack_require__("8572");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/products/Edit.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_Editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4a52583a",
  null
  
)

/* harmony default export */ var Edit = __webpack_exports__["default"] = (component.exports);

























runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QIcon: QIcon["a" /* default */],QItem: QItem["a" /* default */],QSpinner: QSpinner["a" /* default */],QStepper: QStepper["a" /* default */],QStep: QStep["a" /* default */],QForm: QForm["a" /* default */],QList: QList["a" /* default */],QSelect: QSelect["a" /* default */],QInput: QInput["a" /* default */],QTooltip: QTooltip["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QColor: QColor["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QSeparator: QSeparator["a" /* default */],QBtn: QBtn["a" /* default */],QStepperNavigation: QStepperNavigation["a" /* default */],QUploader: QUploader["a" /* default */],QCard: QCard["a" /* default */],QCardActions: QCardActions["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */],QToggle: QToggle["a" /* default */],QField: QField["a" /* default */]});


/***/ }),

/***/ "f58c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ba7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=25.efeaedaa.js.map