(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "00f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "136a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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
      return "api.bake-free.com" + "\/" + file;
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

/***/ "4c51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c548244e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("136a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c548244e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c548244e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c548244e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Holidays_vue_vue_type_style_index_0_id_6ea5a111_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("00f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Holidays_vue_vue_type_style_index_0_id_6ea5a111_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Holidays_vue_vue_type_style_index_0_id_6ea5a111_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Holidays_vue_vue_type_style_index_0_id_6ea5a111_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "ad07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/holidays/Index.vue?vue&type=template&id=c548244e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Business Holidays")]),_c('br'),_c('p',[_vm._v("\n                The following business holidays are unselectable delivery or\n                pickup dates when ordering.\n            ")])]),_c('div',{staticClass:"heading-stat-1 text-caption"},[_vm._v("\n            Today\n            "),_c('br'),_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                "+_vm._s(_vm.today.human)+"\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"calendar_today"}}),_vm._v("Business Holidays\n                "),_c('q-btn',{staticClass:"ml-auto q-mx-md",attrs:{"flat":"","dense":"","rounded":"","icon":"add","to":"/holidays/add"}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Add new\n                    ")])],1)],1),_c('div',{staticClass:"bg-gray-alpha relative-position"},[_c('q-date',{staticClass:"date",attrs:{"no-unset":"","mask":"YYYY-MM-DD","events":_vm.holidayList,"options":_vm.holidayList,"event-color":"orange","emit-immediately":"","flat":"","minimal":""},on:{"input":_vm.getHolidaysList},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}}),_c('q-inner-loading',{attrs:{"showing":_vm.loading}},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1)],1)]),_c('div',{staticClass:"content-2"},[_c('Holidays',_vm._b({scopedSlots:_vm._u([{key:"actions",fn:function(ref){
var item = ref.item;
return [_c('q-btn',{attrs:{"dense":"","flat":"","rounded":"","icon":"edit","to":'/holidays/edit/' + item.id}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Edit\n                        ")])],1),_c('q-btn',{attrs:{"dense":"","flat":"","rounded":"","icon":"delete"},on:{"click":function($event){return _vm.confirmDel(item.id)}}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Delete\n                        ")])],1)]}}])},'Holidays',{ date: _vm.date, data: _vm.data },false)),_c('ConfirmDialog',{attrs:{"showDlg":_vm.showDlg},on:{"update:showDlg":function($event){_vm.showDlg=$event},"update:show-dlg":function($event){_vm.showDlg=$event}},scopedSlots:_vm._u([{key:"avatar",fn:function(){return [_c('q-avatar',{attrs:{"icon":"delete_forever","color":"red-5","text-color":"white"}})]},proxy:true},{key:"message",fn:function(){return [_vm._v("\n                    Continue on removing this holiday entry?"),_c('br'),_vm._v("\n                    Warning: This action is permanent.\n                ")]},proxy:true},{key:"actions",fn:function(){return [_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Cancel"}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Remove","color":"red-5"},on:{"click":_vm.onRemove}})]},proxy:true}])})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/holidays/Index.vue?vue&type=template&id=c548244e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/components/ConfirmDialog.vue + 4 modules
var ConfirmDialog = __webpack_require__("96ec");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Holidays.vue?vue&type=template&id=6ea5a111&scoped=true&
var Holidaysvue_type_template_id_6ea5a111_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-list',{staticClass:"bg-none relative-position"},[_c('transition-group',{attrs:{"name":"slide","tag":"div"}},_vm._l((_vm.data),function(item){return _c('div',{key:item.id,staticClass:"holiday-item-container bg-gray-alpha-2 no-scroll q-pa-md q-mb-xs"},[_c('div',{staticClass:"text-subtitle2 q-mb-md holiday-item"},[_c('div',{staticClass:"reason"},[_vm._v("\n                    "+_vm._s(item.reason)+"\n                ")]),_c('div',[_vm._t("actions",null,{"item":item})],2)]),_c('q-item',{staticClass:"detail-field",attrs:{"dense":""}},[_c('span',{staticClass:"field-label"},[_vm._v(" Start")]),_c('span',{staticClass:"text-primary field-value"},[_vm._v("\n                    "+_vm._s(_vm.humanReadableDt(item.start))+"\n                ")])]),_c('q-item',{staticClass:"detail-field",attrs:{"dense":""}},[_c('span',{staticClass:"field-label"},[_vm._v(" End")]),_c('span',{staticClass:"text-primary field-value"},[_vm._v("\n                    "+_vm._s(_vm.humanReadableDt(item.end))+"\n                ")])])],1)}),0)],1)}
var Holidaysvue_type_template_id_6ea5a111_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Holidays.vue?vue&type=template&id=6ea5a111&scoped=true&

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Holidays.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Holidaysvue_type_script_lang_js_ = ({
  name: "Holidays",
  mixins: [helpers["a" /* default */]],
  props: {
    date: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true,

      default() {}

    }
  },
  methods: {
    humanReadableDt(val) {
      return this.toHumanReadableDt(val);
    }

  }
});
// CONCATENATED MODULE: ./src/components/Holidays.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Holidaysvue_type_script_lang_js_ = (Holidaysvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Holidays.vue?vue&type=style&index=0&id=6ea5a111&lang=scss&scoped=true&
var Holidaysvue_type_style_index_0_id_6ea5a111_lang_scss_scoped_true_ = __webpack_require__("9013");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/Holidays.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Holidaysvue_type_script_lang_js_,
  Holidaysvue_type_template_id_6ea5a111_scoped_true_render,
  Holidaysvue_type_template_id_6ea5a111_scoped_true_staticRenderFns,
  false,
  null,
  "6ea5a111",
  null
  
)

/* harmony default export */ var Holidays = (component.exports);



runtime_auto_import_default()(component, 'components', {QList: QList["a" /* default */],QItem: QItem["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/holidays/Index.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



let Holiday = null;
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "HolidayIndex",
  components: {
    ConfirmDialog: ConfirmDialog["a" /* default */],
    Holidays: Holidays
  },
  mixins: [helpers["a" /* default */]],

  meta() {
    return {
      title: "Business Holidays"
    };
  },

  beforeCreate() {
    Holiday = this.$RepositoryFactory.get("holidays");
  },

  created() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      _this.date = _this.today.yyyymmdd;
      _this.startOfMonth = _this.startDayOfMonth;
      _this.endOfMonth = _this.lastDayOfMonth;

      if (true) {
        yield _this.getHolidays();

        _this.data.splice(0, _this.data.length, ..._this.selectInclusive(_this.date));
      }
    })();
  },

  computed: {
    holidayList() {
      const dayList = new Set();
      this.holidayItems.map(item => {
        const start = this.findMaxDt(item.start, this.startOfMonth);
        const end = this.findMinDt(item.end, this.endOfMonth);

        for (let dt = start; dt.getTime() <= end.getTime(); dt.setDate(dt.getDate() + 1)) {
          dayList.add(this.toQDateFormat(dt));
        }
      }); // console.log(dayList);

      return [...dayList];
    }

  },

  data() {
    return {
      date: "",
      startOfMonth: "",
      endOfMonth: "",
      data: [],
      holidayItems: [],
      loading: true,
      showDlg: false,
      toDelID: -1
    };
  },

  methods: {
    selectInclusive(val) {
      const dt = new Date(val).setHours(0, 0, 0, 0);
      return this.holidayItems.filter(function (item) {
        const start = new Date(item.start).setHours(0, 0, 0, 0),
              end = new Date(item.end).setHours(0, 0, 0, 0);
        return !(dt < start || dt > end);
      });
    },

    getHolidaysList(value, reason, details) {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        if (reason == "month" || reason == "year") {
          // Has changed month/year, refresh
          const d = new Date(value);
          _this2.startOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
          _this2.endOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0); // Retrieve new list

          yield _this2.getHolidays(details);
        }

        _this2.data.splice(0, _this2.data.length, ..._this2.selectInclusive(value));
      })();
    },

    getHolidays(details) {
      var _this3 = this;

      return asyncToGenerator_default()(function* () {
        _this3.loading = true;

        try {
          const resp = yield Holiday.getBusinessHolidays(details);
          _this3.holidayItems = resp.slice();
        } catch (err) {
          _this3.showNotif(false, "Could not retrieve holiday entries for selected month. ");
        } finally {
          _this3.loading = false;
        }
      })();
    },

    onRemove() {
      var _this4 = this;

      return asyncToGenerator_default()(function* () {
        if (_this4.toDelID !== -1) {
          try {
            const resp = yield Holiday.deleteHoliday(_this4.toDelID);

            _this4.showNotif(true, "Successfully removed holiday entry."); // Remove from list and Reset


            _this4.$delete(_this4.data, _this4.data.findIndex(el => el.id == _this4.toDelID));

            _this4.$delete(_this4.holidayItems, _this4.holidayItems.findIndex(el => el.id == _this4.toDelID));

            _this4.toDelID = -1;
          } catch (err) {
            _this4.showNotif(false, "Could not delete item. ");
          }
        }
      })();
    },

    confirmDel(holidayID) {
      this.toDelID = holidayID;
      this.showDlg = true;
    }

  }
});
// CONCATENATED MODULE: ./src/pages/holidays/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var holidays_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/holidays/Index.vue?vue&type=style&index=0&id=c548244e&lang=scss&scoped=true&
var Indexvue_type_style_index_0_id_c548244e_lang_scss_scoped_true_ = __webpack_require__("4c51");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// CONCATENATED MODULE: ./src/pages/holidays/Index.vue






/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  holidays_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c548244e",
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);









runtime_auto_import_default()(Index_component, 'components', {QPage: QPage["a" /* default */],QIcon: QIcon["a" /* default */],QBtn: QBtn["a" /* default */],QTooltip: QTooltip["a" /* default */],QDate: QDate["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinner: QSpinner["a" /* default */],QAvatar: QAvatar["a" /* default */]});runtime_auto_import_default()(Index_component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=11.eadb7a71.js.map