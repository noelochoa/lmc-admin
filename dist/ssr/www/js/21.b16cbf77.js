(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "130f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/discounts/Edit.vue?vue&type=template&id=0210cc06&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Edit Discount Rule")]),_c('br'),_c('p',[_vm._v("You may edit the following product discount entry.")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"account_circle"}}),_vm._v("Discount Details\n            ")],1),_c('div',[_c('q-form',{attrs:{"disabled":_vm.discount.hasError || _vm.discount.loading},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onSubmit($event)}}},[(_vm.discount.loading)?_c('q-item',{staticClass:"q-mt-sm"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Starts from")]),_c('q-input',{staticClass:"field-value",attrs:{"dense":"","outlined":"","hide-bottom-space":"","dark":"","rules":[
                                    function (val) { return val !== null && val.trim() !== ''; },
                                    _vm._isValidDatetime
                                ]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"event"}},[_c('q-popup-proxy',{ref:"qDateProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"dark":"","no-unset":"","mask":"YYYY-MM-DD HH:mm"},on:{"input":function () { return _vm.$refs.qDateProxyS.hide(); }},model:{value:(
                                                    _vm.discount.data.start
                                                ),callback:function ($$v) {_vm.$set(_vm.discount.data, "start", $$v)},expression:"\n                                                    discount.data.start\n                                                "}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{ref:"qTimeProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"dark":"","mask":"YYYY-MM-DD HH:mm","format24h":""},on:{"input":function () { return _vm.$refs.qTimeProxyS.hide(); }},model:{value:(
                                                    _vm.discount.data.start
                                                ),callback:function ($$v) {_vm.$set(_vm.discount.data, "start", $$v)},expression:"\n                                                    discount.data.start\n                                                "}})],1)],1)]},proxy:true}]),model:{value:(_vm.discount.data.start),callback:function ($$v) {_vm.$set(_vm.discount.data, "start", $$v)},expression:"discount.data.start"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Ends at")]),_c('q-input',{staticClass:"field-value",attrs:{"dense":"","outlined":"","hide-bottom-space":"","dark":"","lazy-rules":"","rules":[
                                    function (val) { return val !== null && val.trim() !== ''; },
                                    _vm._isValidDatetime,
                                    _vm._isValidEndDt
                                ]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"event"}},[_c('q-popup-proxy',{ref:"qDateProxyE",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"dark":"","no-unset":"","mask":"YYYY-MM-DD HH:mm"},on:{"input":function () { return _vm.$refs.qDateProxyE.hide(); }},model:{value:(_vm.discount.data.end),callback:function ($$v) {_vm.$set(_vm.discount.data, "end", $$v)},expression:"discount.data.end"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{ref:"qTimeProxyE",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"dark":"","mask":"YYYY-MM-DD HH:mm","format24h":""},on:{"input":function () { return _vm.$refs.qTimeProxyE.hide(); }},model:{value:(_vm.discount.data.end),callback:function ($$v) {_vm.$set(_vm.discount.data, "end", $$v)},expression:"discount.data.end"}})],1)],1)]},proxy:true}]),model:{value:(_vm.discount.data.end),callback:function ($$v) {_vm.$set(_vm.discount.data, "end", $$v)},expression:"discount.data.end"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Target Customer")]),_c('q-select',{staticClass:"field-value",attrs:{"options":_vm.targets,"dark":"","dense":"","outlined":"","hide-bottom-space":"","options-dense":"","lazy-rules":"","rules":[
                                    function (val) { return val !== null && val.trim() !== ''; },
                                    function (val) { return _vm.targets.includes(val); }
                                ]},on:{"input":function($event){_vm.hasSelect = true}},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"person_outline"}})]},proxy:true}]),model:{value:(_vm.discount.data.target),callback:function ($$v) {_vm.$set(_vm.discount.data, "target", $$v)},expression:"discount.data.target"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Discount (%)")]),_c('q-slider',{staticClass:"field-value q-mx-xs",attrs:{"min":1,"max":99,"label":"","color":"green-4"},model:{value:(_vm.discount.data.value),callback:function ($$v) {_vm.$set(_vm.discount.data, "value", $$v)},expression:"discount.data.value"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Apply to")]),_c('q-select',{staticClass:"products-select field-value",attrs:{"options":_vm.options,"label":"Products","hide-dropdown-icon":"","hide-bottom-space":"","dark":"","dense":"","outlined":"","multiple":"","use-chips":"","use-input":"","emit-value":"","map-options":"","lazy-rules":"","rules":[
                                    function (val) { return val !== null && val.length > 0; }
                                ]},on:{"filter":_vm.filterFn},scopedSlots:_vm._u([{key:"no-option",fn:function(){return [_c('q-item',[_c('q-item-section',{staticClass:"text-italic text-grey"},[_vm._v("\n                                            No products found.\n                                        ")])],1)]},proxy:true}]),model:{value:(_vm.discount.data.products),callback:function ($$v) {_vm.$set(_vm.discount.data, "products", $$v)},expression:"discount.data.products"}})],1)],1),_c('q-separator'),_c('div',{staticClass:"q-pa-md"},[_c('q-btn',{attrs:{"label":"Save","type":"submit","color":"primary","loading":_vm.loading,"disable":_vm.loading || !_vm.hasSelect},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true}])}),_vm._v("\n                        "+_vm._s(_vm.discount.products)+"\n                    ")],1)],1)],1)]),_c('div',{staticClass:"content-2"})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/discounts/Edit.vue?vue&type=template&id=0210cc06&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/discounts/Edit.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let Discount = null,
    Product = null;
/* harmony default export */ var Editvue_type_script_lang_js_ = ({
  name: "DiscountEdit",
  mixins: [helpers["a" /* default */]],

  meta() {
    return {
      title: "Edit Discount Rule"
    };
  },

  created() {
    // this.options = this.productsList;
    if (true) {
      this.getProducts();
      this.getDiscount();
    }
  },

  beforeCreate() {
    Discount = this.$RepositoryFactory.get("discounts");
    Product = this.$RepositoryFactory.get("products");
  },

  data() {
    return {
      loading: false,
      hasSelect: true,
      targets: ["All", "Regular", "Reseller", "Partner"],
      options: null,
      productsList: [],
      discount: {
        loading: true,
        hasError: false,
        data: {
          value: 0,
          name: "",
          products: [],
          start: "",
          end: ""
        }
      }
    };
  },

  methods: {
    _isValidDatetime(val) {
      const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
      return dtpattern.test(val) || "Invalid date & time format";
    },

    _isValidEndDt(val) {
      const end = new Date(val);
      const start = new Date(this.discount.data.start);
      return end.getTime() > start.getTime() || "End date needs to be greater";
    },

    filterFn(val, update, abort) {
      if (!val || val.trim() == "") {
        abort();
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.options = this.productsList.filter(v => v.label.toLowerCase().indexOf(needle) > -1);
      });
    },

    getProducts() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        Product.getProductSelection().then(dat => {
          _this.productsList = dat;
          _this.options = _this.productsList.slice();
        }).catch(err => {
          _this.productsList = [];
          _this.options = [];
        });
      })();
    },

    getDiscount() {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        try {
          const resp = yield Discount.getDiscount(_this2.$route.params.id);
          _this2.discount.data = resp;
        } catch (err) {
          _this2.showNotif(false, "Could not retrieve discount details. ");

          _this2.discount.hasError = true;
        } finally {
          _this2.discount.loading = false;
        }
      })();
    },

    onSubmit: function () {
      var _ref = asyncToGenerator_default()(function* (evt) {
        this.loading = true;

        try {
          yield Discount.editDiscount(this.$route.params.id, this.discount.data);
          this.showNotif(true, "Successfully updated discount info.");
          this.returnToPageIndex("/discounts");
        } catch (err) {
          this.showNotif(false, "Could not edit discount info. ");
        } finally {
          this.loading = false;
        }
      });

      return function onSubmit(_x) {
        return _ref.apply(this, arguments);
      };
    }()
  }
});
// CONCATENATED MODULE: ./src/pages/discounts/Edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var discounts_Editvue_type_script_lang_js_ = (Editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/discounts/Edit.vue?vue&type=style&index=0&id=0210cc06&lang=scss&scoped=true&
var Editvue_type_style_index_0_id_0210cc06_lang_scss_scoped_true_ = __webpack_require__("d64a");

// EXTERNAL MODULE: ./src/pages/discounts/Edit.vue?vue&type=style&index=1&lang=scss&
var Editvue_type_style_index_1_lang_scss_ = __webpack_require__("3809");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js + 1 modules
var QSlider = __webpack_require__("c1d0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 2 modules
var QField = __webpack_require__("8572");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/discounts/Edit.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  discounts_Editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0210cc06",
  null
  
)

/* harmony default export */ var Edit = __webpack_exports__["default"] = (component.exports);



















runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QIcon: QIcon["a" /* default */],QForm: QForm["a" /* default */],QItem: QItem["a" /* default */],QSpinner: QSpinner["a" /* default */],QList: QList["a" /* default */],QInput: QInput["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QSelect: QSelect["a" /* default */],QSlider: QSlider["a" /* default */],QItemSection: QItemSection["a" /* default */],QSeparator: QSeparator["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */],QChip: QChip["a" /* default */],QField: QField["a" /* default */]});


/***/ }),

/***/ "3809":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56c9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
      return "https://localhost:3000" + "\/" + file;
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

/***/ "56c9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d64a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0210cc06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e283");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0210cc06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0210cc06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_0210cc06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e283":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=21.b16cbf77.js.map