(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
      return "https://api.bake-free.com" + "\/" + file;
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

/***/ "3c6b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5366":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("641f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "641f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9277":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c408557e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3c6b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c408557e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c408557e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c408557e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "96ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ConfirmDialog.vue?vue&type=template&id=0c990126&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-dialog',{attrs:{"value":_vm.showDlg,"square":""},on:{"hide":_vm.emitClose}},[_c('q-card',{attrs:{"dark":""}},[_c('q-card-section',{staticClass:"row items-center"},[_vm._t("avatar"),_c('span',{staticClass:"q-ml-sm"},[_vm._t("message")],2)],2),_c('q-card-actions',{attrs:{"align":"right"}},[_vm._t("actions")],2)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ConfirmDialog.vue?vue&type=template&id=0c990126&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ConfirmDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ConfirmDialogvue_type_script_lang_js_ = ({
  name: "ConfirmDialog",
  props: {
    showDlg: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    emitClose() {
      this.$emit("update:showDlg", false);
    }

  }
});
// CONCATENATED MODULE: ./src/components/ConfirmDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ConfirmDialogvue_type_script_lang_js_ = (ConfirmDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/ConfirmDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ConfirmDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ConfirmDialog = __webpack_exports__["a"] = (component.exports);





runtime_auto_import_default()(component, 'components', {QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QCardActions: QCardActions["a" /* default */]});


/***/ }),

/***/ "e981":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/products/Index.vue?vue&type=template&id=c408557e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Products")]),_c('br'),_c('p',[_vm._v("The following is a list of products in the webstore.")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('q-btn',{staticClass:"q-mr-sm",attrs:{"flat":"","round":"","icon":"post_add","to":"/products/add/1"}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Add Product")])],1),_c('q-select',{staticClass:"filter-select",attrs:{"options":_vm.filter,"disable":_vm.loading,"dark":"","dense":"","outlined":"","options-dense":""},on:{"input":_vm.filterChanged},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"category"}})]},proxy:true}]),model:{value:(_vm.category),callback:function ($$v) {_vm.category=$$v},expression:"category"}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","round":"","icon":"add","to":"/categories/add"}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Add Category")])],1)],1),_c('div',{staticClass:"content-2"},[_c('q-input',{staticClass:"filter-search-box",attrs:{"type":"search","placeholder":"Search product","debounce":"500","dark":"","dense":"","outlined":""},on:{"input":_vm.searchInput},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"search"}})]},proxy:true},{key:"append",fn:function(){return [_c('transition',{attrs:{"name":"fade"}},[_c('q-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.search != ''),expression:"search != ''"}],staticClass:"cursor-pointer",attrs:{"name":"close"},on:{"click":_vm.searchClear}})],1)]},proxy:true}]),model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}})],1),_c('div',{staticClass:"content-3"},[_c('q-table',{ref:"prodsTbl",staticClass:"products-table",attrs:{"grid":"","grid-header":"","title":"Store Products","row-key":"id","data":_vm.data,"columns":_vm.columns,"rows-per-page-options":[0],"pagination":_vm.pagination,"selected":_vm.selected,"selection":"multiple","filter":_vm.search,"loading":_vm.loading},on:{"update:pagination":[function($event){_vm.pagination=$event},_vm.onChgPage],"update:selected":function($event){_vm.selected=$event},"request":_vm.onRequest},scopedSlots:_vm._u([{key:"top-right",fn:function(){return [_c('q-btn',{staticClass:"q-px-xs",attrs:{"dense":"","flat":"","size":"sm","icon":"arrow_drop_down","label":"Bulk action"}},[_c('q-menu',{attrs:{"content-class":"bg-grey-10","auto-close":""}},[_c('q-list',{attrs:{"dark":""}},[_c('q-item',{staticClass:"text-caption",attrs:{"dense":"","clickable":""},on:{"click":function($event){return _vm.confirmBulkAction(true)}}},[_c('q-item-section',[_vm._v("\n                                        Reactivate selected\n                                    ")])],1),_c('q-item',{staticClass:"text-caption",attrs:{"dense":"","clickable":""},on:{"click":function($event){return _vm.confirmBulkAction(false)}}},[_c('q-item-section',[_vm._v("\n                                        Archive selected\n                                    ")])],1)],1)],1)],1)]},proxy:true},{key:"header-small",fn:function(){return [_c('q-btn',{staticClass:"q-px-xs",attrs:{"dense":"","flat":"","size":"sm","icon":"arrow_drop_down","label":"Bulk actions"}},[_c('q-menu',{attrs:{"content-class":"bg-grey-10","auto-close":""}},[_c('q-list',{attrs:{"dark":""}},[_c('q-item',{staticClass:"text-caption",attrs:{"dense":"","clickable":""}},[_c('q-item-section',[_vm._v("\n                                        Show selected\n                                    ")])],1),_c('q-item',{staticClass:"text-caption",attrs:{"dense":"","clickable":""}},[_c('q-item-section',[_vm._v("\n                                        Hide selected\n                                    ")])],1)],1)],1)],1)]},proxy:true},{key:"item",fn:function(props){return [_c('div',{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-4"},[_c('q-card',{staticClass:"bg-gray-alpha-2"},[_c('q-img',{staticClass:"product-img",attrs:{"src":props.row.images && props.row.images[0]
                                        ? _vm.resolveAssetsUrl(
                                              props.row.images[0].image
                                          )
                                        : 'https://dummyimage.com/640x480/454345/fafafa.png&text=No+Img',"basic":""}},[_c('div',{staticClass:"absolute-top"},[_c('q-checkbox',{staticClass:"q-mr-sm",attrs:{"dense":"","color":"grey-8"},model:{value:(props.selected),callback:function ($$v) {_vm.$set(props, "selected", $$v)},expression:"props.selected"}}),_vm._v(_vm._s(props.row.name)+"\n                                ")],1)]),_c('q-separator'),_c('q-list',{attrs:{"dense":""}},_vm._l((props.cols.filter(
                                        function (col) { return col.name !== 'name'; }
                                    )),function(col){return _c('q-item',{key:col.name},[_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(col.label))])],1),_c('q-item-section',{attrs:{"side":""}},[_c('q-item-label',{staticClass:"text-primary"},[_vm._v(_vm._s(col.value))])],1)],1)}),1),_c('q-separator'),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{attrs:{"dense":"","flat":"","round":"","icon":"build","to":'/products/edit/' + props.row.id}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Configure\n                                    ")])],1),_c('q-btn',{attrs:{"dense":"","flat":"","round":"","icon":props.row.isFeatured
                                            ? 'star'
                                            : 'star_outline',"to":'/products/feature/' + props.row.id}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Feature product config\n                                    ")])],1),_c('q-btn',{attrs:{"dense":"","flat":"","round":"","icon":props.row.toggleFlg
                                            ? 'visibility'
                                            : 'visibility_off'},on:{"mouseenter":function($event){props.row.toggleFlg = !props.row
                                            .toggleFlg},"mouseleave":function($event){props.row.toggleFlg = !props.row
                                            .toggleFlg},"click":function($event){return _vm.confirmAction(
                                            props.row.id,
                                            !props.row.isActive
                                        )}}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("\n                                        "+_vm._s(props.row.isActive
                                                ? "Archive this product"
                                                : "Reactivate product")+"\n                                    ")])],1)],1)],1)],1)]}}])}),_c('ConfirmDialog',{attrs:{"showDlg":_vm.showDlg},on:{"update:showDlg":function($event){_vm.showDlg=$event},"update:show-dlg":function($event){_vm.showDlg=$event}},scopedSlots:_vm._u([{key:"avatar",fn:function(){return [_c('q-avatar',{attrs:{"icon":"report_problem","color":"red-5","text-color":"white"}})]},proxy:true},(_vm.targetVal)?{key:"message",fn:function(){return [_vm._v("\n                    This action will "),_c('u',[_vm._v("REACTIVATE")]),_vm._v(" the product. "),_c('br'),_vm._v("\n                    Product will be visible again on the webstore.\n                ")]},proxy:true}:{key:"message",fn:function(){return [_vm._v("\n                    This action will "),_c('u',[_vm._v("ARCHIVE")]),_vm._v(" the product. "),_c('br'),_vm._v("\n                    Product will be hidden in the webstore.\n                ")]},proxy:true},{key:"actions",fn:function(){return [_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Cancel"}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Proceed","color":"red-5"},on:{"click":_vm.onProceed}})]},proxy:true}],null,true)}),_c('ConfirmDialog',{attrs:{"showDlg":_vm.showDlgBulk},on:{"update:showDlg":function($event){_vm.showDlgBulk=$event},"update:show-dlg":function($event){_vm.showDlgBulk=$event}},scopedSlots:_vm._u([{key:"avatar",fn:function(){return [_c('q-avatar',{attrs:{"icon":"report_problem","color":"red-5","text-color":"white"}})]},proxy:true},(_vm.targetValBulk)?{key:"message",fn:function(){return [_vm._v("\n                    This action will "),_c('u',[_vm._v("REACTIVATE")]),_vm._v(" the selected\n                    products. "),_c('br'),_vm._v("\n                    Products will be visible again on the webstore.\n                ")]},proxy:true}:{key:"message",fn:function(){return [_vm._v("\n                    This action will "),_c('u',[_vm._v("ARCHIVE")]),_vm._v(" the selected products.\n                    "),_c('br'),_vm._v("\n                    Products will be hidden in the webstore.\n                ")]},proxy:true},{key:"actions",fn:function(){return [_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Cancel"}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Proceed","color":"red-5"},on:{"click":_vm.onProceedAll}})]},proxy:true}],null,true)})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/products/Index.vue?vue&type=template&id=c408557e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/components/ConfirmDialog.vue + 4 modules
var ConfirmDialog = __webpack_require__("96ec");

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/products/Index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "ProductIndex",
  components: {
    ConfirmDialog: ConfirmDialog["a" /* default */]
  },
  mixins: [helpers["a" /* default */]],

  meta() {
    return {
      title: "Products"
    };
  },

  beforeCreate() {
    Category = this.$RepositoryFactory.get("categories");
    Product = this.$RepositoryFactory.get("products");
  },

  created() {
    if (this.$route.query.type) {
      this.category = this.$route.query.type;
    }

    if (this.$route.query.s) {
      this.search = this.$route.query.s;
    }

    if (this.$route.query.p && !isNaN(this.$route.query.p)) {
      this.pagination.page = Number.parseInt(this.$route.query.p);
    }

    if (true) {
      this.fetchCategories();
    }
  },

  mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    });
  },

  data() {
    return {
      productsList: [],
      selected: [],
      search: "",
      category: "All",
      filter: ["All"],
      loading: true,
      showDlg: false,
      showDlgBulk: false,
      toToggleID: -1,
      targetVal: false,
      targetValBulk: false,
      pagination: {
        sortBy: "created",
        descending: true,
        page: 1,
        rowsPerPage: 9
      },
      columns: [{
        name: "name",
        field: "name",
        label: "Name",
        align: "left",
        required: true,
        sortable: true
      }, {
        name: "created",
        field: "created",
        align: "left",
        label: "Created",
        sortable: true
      }, {
        name: "category",
        field: "category",
        align: "left",
        label: "Category",
        sortable: true
      }, {
        name: "basePrice",
        field: "basePrice",
        align: "left",
        label: "Base price",
        sortable: true
      }],
      data: [],
      original: []
    };
  },

  methods: {
    filterChanged(val) {
      const typeSel = this.$route.query.type;

      if (this.filter.includes(val) && (!typeSel || !val.match(new RegExp(typeSel, "i")))) {
        this.$router.replace({
          query: {
            type: val
          }
        }).catch(err => {});
        this.search = "";
      }

      this.$refs["prodsTbl"].requestServerInteraction({
        pagination: objectSpread2_default()(objectSpread2_default()({}, this.pagination), {}, {
          page: 1
        })
      });
    },

    searchClear(evt) {
      let query = Object.assign({}, this.$route.query);
      delete query.s;
      this.$router.replace({
        query
      }).catch(err => {});
      this.search = "";
    },

    searchInput(val) {
      let searchQry = Object.assign({}, this.$route.query, {
        s: val
      });
      if (!val) delete searchQry.s;
      this.$router.replace({
        query: searchQry
      }).catch(err => {});
    },

    onChgPage(newPg) {
      let pageQry = Object.assign({}, this.$route.query, {
        p: newPg.page
      });
      if (!newPg) delete pageQry.p;
      this.$router.replace({
        query: pageQry
      }).catch(err => {});
    },

    fetchCategories() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        try {
          const resp = yield Category.getCategoriesSelection();
          _this.filter = [..._this.filter, ...resp.slice()]; // Update select value

          const itype = new RegExp(_this.$route.query.type, "i");

          const found = _this.filter.find(item => {
            return item.match(itype);
          });

          _this.category = found ? found : "";
        } catch (err) {
          _this.showNotif(false, "Could not retrieve product categories.");
        }
      })();
    },

    onRequest(props) {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        _this2.loading = true;

        try {
          const prodResp = yield Product.getProducts(_this2.category);
          _this2.original = prodResp.products;
          _this2.data = _this2.original.slice();
          _this2.pagination.page = props.pagination.page;
        } catch (err) {
          _this2.showNotif(false, "Could not retrieve products.");
        } finally {
          _this2.loading = false;
        }
      })();
    },

    confirmAction(productID, bool) {
      this.targetVal = bool;
      this.showDlg = true;
      this.toToggleID = productID;
    },

    confirmBulkAction(bool) {
      this.targetValBulk = bool;
      this.showDlgBulk = true;
    },

    onProceed() {
      var _this3 = this;

      return asyncToGenerator_default()(function* () {
        if (_this3.toToggleID !== -1) {
          try {
            const resp = yield Product.toggleActiveProduct(_this3.toToggleID, _this3.targetVal);

            _this3.showNotif(true, _this3.targetVal ? "Product has been reactivated." : "Product has been archived."); // Update list


            _this3.data.forEach(el => {
              if (el.id === _this3.toToggleID) {
                el.isActive = _this3.targetVal;
                el.toggleFlg = _this3.targetVal;
              }
            }); // Reset


            _this3.toToggleID = -1;
            _this3.targetVal = false;
          } catch (err) {
            _this3.showNotif(false, "Could not update this item. ");
          }
        }
      })();
    },

    onProceedAll() {
      var _this4 = this;

      return asyncToGenerator_default()(function* () {
        if (_this4.selected && _this4.selected.length > 0) {
          try {
            // Extract ID
            const selectIDs = _this4.selected.map(item => {
              return item.id;
            });

            const resp = yield Product.toggleAll(selectIDs, _this4.targetValBulk);

            _this4.showNotif(true, _this4.targetValBulk ? "Products have been reactivated." : "Products have been archived."); // Update list


            _this4.data.forEach(el => {
              if (selectIDs.includes(el.id)) {
                el.isActive = _this4.targetValBulk;
                el.toggleFlg = _this4.targetValBulk;
              }
            }); // Clear selection & Reset


            _this4.selected.splice(0, _this4.selected.length);

            _this4.targetValBulk = false;
          } catch (err) {
            _this4.showNotif(false, "Could not update items. " + err);
          }
        }
      })();
    }

  }
});
// CONCATENATED MODULE: ./src/pages/products/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/products/Index.vue?vue&type=style&index=0&id=c408557e&lang=scss&scoped=true&
var Indexvue_type_style_index_0_id_c408557e_lang_scss_scoped_true_ = __webpack_require__("9277");

// EXTERNAL MODULE: ./src/pages/products/Index.vue?vue&type=style&index=1&lang=scss&
var Indexvue_type_style_index_1_lang_scss_ = __webpack_require__("5366");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 17 modules
var QTable = __webpack_require__("eaac");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 2 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__("8f8e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/products/Index.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c408557e",
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);



















runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */],QTooltip: QTooltip["a" /* default */],QSelect: QSelect["a" /* default */],QIcon: QIcon["a" /* default */],QItem: QItem["a" /* default */],QInput: QInput["a" /* default */],QTable: QTable["a" /* default */],QMenu: QMenu["a" /* default */],QList: QList["a" /* default */],QItemSection: QItemSection["a" /* default */],QCard: QCard["a" /* default */],QImg: QImg["a" /* default */],QCheckbox: QCheckbox["a" /* default */],QSeparator: QSeparator["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QCardActions: QCardActions["a" /* default */],QAvatar: QAvatar["a" /* default */]});runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=12.f18af4b6.js.map