(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "3d6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_fc102acc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("404e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_fc102acc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_fc102acc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_fc102acc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "404e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "85a1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8b24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=7ea7c09a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Dashboard")]),_c('br'),_c('p',[_vm._v("Here are some of the recent activities in your shop.")])]),_c('div',{staticClass:"heading-stat-1 text-caption"},[_vm._v("\n            Accounts\n            "),_c('br'),(_vm.customers.loading)?_c('p',{staticClass:"text-subtitle2"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):(_vm.customers.hasError)?_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                Error retrieving data.\n            ")]):_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                "+_vm._s(_vm.customers.data.regular)+" Customers "),_c('br'),_vm._v("\n                "+_vm._s(_vm.customers.data.reseller)+" Resellers\n            ")])]),_c('div',{staticClass:"heading-stat-2 text-caption"},[_vm._v("\n            Products\n            "),(_vm.products.loading)?_c('p',{staticClass:"text-subtitle2"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):(_vm.products.hasError)?_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                Error retrieving data.\n            ")]):_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                "+_vm._s(_vm.products.data.active)+" Active /\n                "+_vm._s(_vm.products.data.total)+" Total\n            ")])]),_c('div',{staticClass:"heading-stat-3 text-caption"},[_vm._v("\n            Orders for this Month\n            "),(_vm.orders.loading)?_c('p',{staticClass:"text-subtitle2"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):(_vm.orders.hasError)?_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                Error retrieving data.\n            ")]):_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                "+_vm._s(_vm.orders.data.accepted)+" Accepted "),_c('br'),_vm._v("\n                "+_vm._s(_vm.orders.data.placed)+" Placed\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"account_circle"}}),_vm._v("Resellers for Approval\n            ")],1),_c('div',[(_vm.pending.loading)?_c('p',{staticClass:"flex flex-center"},[_c('q-spinner',{staticClass:"q-mt-sm",attrs:{"color":"white","size":"2em"}})],1):(_vm.pending.hasError)?_c('p',{staticClass:"flex flex-center q-mt-md"},[_vm._v("\n                    Error retrieving data.\n                ")]):(_vm.pending.data.length < 1)?_c('p',{staticClass:"text-center q-mt-md"},[_vm._v("\n                    No pending accounts\n                ")]):_c('q-list',{attrs:{"separator":""}},_vm._l((_vm.pending.data),function(account){return _c('Accounts',_vm._b({key:account.id},'Accounts',account,false))}),1)],1),(!_vm.pending.loading && _vm.pending.data.length > 0)?_c('div',[_c('q-item',{staticClass:"text-center flex flex-center",attrs:{"to":"/accounts","dense":""}},[_vm._v("\n                    see all\n                ")])],1):_vm._e()]),_c('div',{staticClass:"content-2"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"cake"}}),_vm._v("\n                Products Statistics\n            ")],1),_c('div',[(_vm.products.loading)?_c('p',{staticClass:"flex flex-center"},[_c('q-spinner',{staticClass:"q-mt-sm",attrs:{"color":"white","size":"2em"}})],1):(_vm.products.hasError)?_c('p',{staticClass:"flex flex-center q-mt-md"},[_vm._v("\n                    Error retrieving data.\n                ")]):_c('q-list',{attrs:{"separator":""}},_vm._l((_vm.productStats),function(stat){return _c('Statistic',_vm._b({key:stat.label},'Statistic',stat,false))}),1)],1),(!_vm.products.loading && !_vm.products.hasError)?_c('div',[_c('q-item',{staticClass:"text-center flex flex-center",attrs:{"to":"/products","dense":""}},[_vm._v("\n                    see all\n                ")])],1):_vm._e()]),_c('div',{staticClass:"content-3"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"fireplace"}}),_vm._v("Orders Statistics\n            ")],1),_c('div',[(_vm.orders.loading)?_c('p',{staticClass:"flex flex-center"},[_c('q-spinner',{staticClass:"q-mt-sm",attrs:{"color":"white","size":"2em"}})],1):(_vm.orders.hasError)?_c('p',{staticClass:"flex flex-center q-mt-md"},[_vm._v("\n                    Error retrieving data.\n                ")]):_c('q-list',{attrs:{"separator":""}},_vm._l((_vm.orderStats),function(stat){return _c('Statistic',_vm._b({key:stat.label},'Statistic',stat,false))}),1)],1),(!_vm.orders.loading && !_vm.orders.hasError)?_c('div',[_c('q-item',{staticClass:"text-center flex flex-center",attrs:{"to":"/orders","dense":""}},[_vm._v("\n                    see all\n                ")])],1):_vm._e()]),_c('div',{staticClass:"content-4"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"comment"}}),_vm._v("Recent\n                Comments\n            ")],1),_c('div',[(_vm.recent.loading)?_c('p',{staticClass:"flex flex-center"},[_c('q-spinner',{staticClass:"q-mt-sm",attrs:{"color":"white","size":"2em"}})],1):(_vm.recent.hasError)?_c('p',{staticClass:"flex flex-center q-mt-md"},[_vm._v("\n                    Error retrieving data.\n                ")]):(_vm.recent.data.length < 1)?_c('p',{staticClass:"text-center q-mt-md"},[_vm._v("\n                    No recent comments\n                ")]):_c('q-list',{attrs:{"separator":""}},_vm._l((_vm.recent.data),function(comment){return _c('Comments',_vm._b({key:comment.id},'Comments',comment,false))}),1)],1),(!_vm.recent.loading && _vm.recent.data.length > 0)?_c('div',[_c('q-item',{staticClass:"text-center flex flex-center",attrs:{"to":"/comments","dense":""}},[_vm._v("\n                    see all\n                ")])],1):_vm._e()]),_c('div',{staticClass:"content-5"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"calendar_today"}}),_vm._v("Business Holidays\n            ")],1),_c('div',{staticClass:"bg-gray-alpha"},[_c('q-item',{staticClass:"q-px-lg q-pt-lg no-select",attrs:{"dense":""}},[_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(_vm.today.month))])],1),_c('q-item-section',{attrs:{"side":""}},[_c('q-item-label',{staticClass:"text-primary"},[_vm._v(_vm._s(_vm.today.year))])],1)],1),_c('q-date',{staticClass:"date",attrs:{"value":_vm.today.yyyymmdd,"events":_vm.holidaysEvt,"mask":"YYYY-MM-DD","event-color":"orange","flat":"","minimal":"","readonly":""}})],1),_c('div',[_c('q-item',{staticClass:"text-center flex flex-center",attrs:{"to":"/holidays","dense":""}},[_vm._v("\n                    see all\n                ")])],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=7ea7c09a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Accounts.vue?vue&type=template&id=3066268f&scoped=true&
var Accountsvue_type_template_id_3066268f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":"","to":'/accounts/edit/' + _vm.id}},[_c('q-item-section',{attrs:{"side":""}},[_c('q-avatar',{attrs:{"size":"32px","color":"primary"}},[_vm._v("\n            "+_vm._s(_vm.name_avatar)+"\n            ")])],1),_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(_vm.name))]),(_vm.joined_format.length > 0)?_c('q-item-label',{staticClass:"text-primary font-small",attrs:{"caption":""}},[_vm._v(_vm._s(_vm.joined_format))]):_vm._e()],1),_c('q-item-section',{staticClass:"text-white",attrs:{"side":"","caption":""}},[_vm._v("Review")])],1)}
var Accountsvue_type_template_id_3066268f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Accounts.vue?vue&type=template&id=3066268f&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Accounts.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Accountsvue_type_script_lang_js_ = ({
  name: "Accounts",
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    joined: {
      type: String,
      default: new Date()
    }
  },
  computed: {
    name_avatar() {
      return this.name ? this.name.slice(0, 1).toUpperCase() : "";
    },

    joined_format() {
      if (!this.joined) return "";
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric"
      };
      const dt = new Date(this.joined);
      return "joined " + dt.toLocaleDateString("en-US", options);
    }

  }
});
// CONCATENATED MODULE: ./src/components/Accounts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Accountsvue_type_script_lang_js_ = (Accountsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Accounts.vue?vue&type=style&index=0&id=3066268f&lang=scss&scoped=true&
var Accountsvue_type_style_index_0_id_3066268f_lang_scss_scoped_true_ = __webpack_require__("bb48");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a81");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/Accounts.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Accountsvue_type_script_lang_js_,
  Accountsvue_type_template_id_3066268f_scoped_true_render,
  Accountsvue_type_template_id_3066268f_scoped_true_staticRenderFns,
  false,
  null,
  "3066268f",
  null
  
)

/* harmony default export */ var Accounts = (component.exports);






runtime_auto_import_default()(component, 'components', {QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QAvatar: QAvatar["a" /* default */],QBadge: QBadge["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Statistic.vue?vue&type=template&id=09fe70df&scoped=true&
var Statisticvue_type_template_id_09fe70df_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-item',{attrs:{"to":_vm.link,"clickable":!!_vm.link}},[_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(_vm.label))])],1),_c('q-item-section',{attrs:{"side":""}},[_c('h6',{staticClass:"text-primary"},[_vm._v(_vm._s(_vm.value))])])],1)}
var Statisticvue_type_template_id_09fe70df_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Statistic.vue?vue&type=template&id=09fe70df&scoped=true&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Statistic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Statisticvue_type_script_lang_js_ = ({
  name: "Statistic",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/Statistic.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Statisticvue_type_script_lang_js_ = (Statisticvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Statistic.vue





/* normalize component */

var Statistic_component = Object(componentNormalizer["a" /* default */])(
  components_Statisticvue_type_script_lang_js_,
  Statisticvue_type_template_id_09fe70df_scoped_true_render,
  Statisticvue_type_template_id_09fe70df_scoped_true_staticRenderFns,
  false,
  null,
  "09fe70df",
  null
  
)

/* harmony default export */ var Statistic = (Statistic_component.exports);




runtime_auto_import_default()(Statistic_component, 'components', {QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Comments.vue?vue&type=template&id=fc102acc&scoped=true&
var Commentsvue_type_template_id_fc102acc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":"","to":'/comments/reply/' + _vm.id}},[_c('q-item-section',[_c('q-item-label',{staticClass:"comment"},[_vm._v("\n            "+_vm._s(_vm.author_name)+" posted:\n        ")]),_c('q-item-label',{staticClass:"comment text-primary",attrs:{"caption":""}},[_vm._v("\n            "+_vm._s(_vm.comment)+"\n        ")])],1),_c('q-item-section',{attrs:{"side":"","top":""}},[_c('q-item-label',{staticClass:"text-white",attrs:{"caption":""}},[_vm._v("\n            "+_vm._s(_vm.posted_format)+"\n        ")])],1)],1)}
var Commentsvue_type_template_id_fc102acc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Comments.vue?vue&type=template&id=fc102acc&scoped=true&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Commentsvue_type_script_lang_js_ = ({
  name: "Comments",
  props: {
    id: {
      type: String,
      required: true
    },
    author: {
      type: Object,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    created: {
      type: String,
      default: new Date()
    }
  },
  computed: {
    author_name() {
      return this.author.name || "Unknown Author";
    },

    posted_format() {
      if (!this.created) return "";
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric"
      };
      const dt = new Date(this.created);
      return dt.toLocaleDateString("en-US", options);
    }

  }
});
// CONCATENATED MODULE: ./src/components/Comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentsvue_type_script_lang_js_ = (Commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Comments.vue?vue&type=style&index=0&id=fc102acc&lang=scss&scoped=true&
var Commentsvue_type_style_index_0_id_fc102acc_lang_scss_scoped_true_ = __webpack_require__("3d6f");

// CONCATENATED MODULE: ./src/components/Comments.vue






/* normalize component */

var Comments_component = Object(componentNormalizer["a" /* default */])(
  components_Commentsvue_type_script_lang_js_,
  Commentsvue_type_template_id_fc102acc_scoped_true_render,
  Commentsvue_type_template_id_fc102acc_scoped_true_staticRenderFns,
  false,
  null,
  "fc102acc",
  null
  
)

/* harmony default export */ var Comments = (Comments_component.exports);




runtime_auto_import_default()(Comments_component, 'components', {QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(Comments_component, 'directives', {Ripple: Ripple["a" /* default */]});

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




let Stats = null;
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "DashboardIndex",
  components: {
    Accounts: Accounts,
    Statistic: Statistic,
    Comments: Comments
  },
  mixins: [helpers["a" /* default */]],

  beforeCreate() {
    Stats = this.$RepositoryFactory.get("statistics");
  },

  created() {
    if (true) this.getStats();
  },

  computed: {
    holidaysEvt() {
      const dayList = new Set();
      this.holidays.data.map(item => {
        const start = this.findMaxDt(item.start, this.startDayOfMonth);
        const end = this.findMinDt(item.end, this.lastDayOfMonth); // console.log(start, end);

        for (let dt = start; dt.getTime() <= end.getTime(); dt.setDate(dt.getDate() + 1)) {
          dayList.add(this.toQDateFormat(dt));
        }
      }); // console.log(dayList);

      return [...dayList];
    }

  },

  data() {
    return {
      customers: {
        loading: true,
        hasError: false,
        data: {}
      },
      products: {
        loading: true,
        hasError: false,
        data: {}
      },
      orders: {
        loading: true,
        hasError: false,
        data: {}
      },
      pending: {
        loading: true,
        hasError: false,
        data: []
      },
      recent: {
        loading: true,
        hasError: false,
        data: []
      },
      holidays: {
        loading: true,
        hasError: false,
        data: []
      },
      productStats: [{
        label: "Featured Products",
        value: 0,
        // link: "/products/?st=featured",
        key: "featured"
      }, {
        label: "Active Products",
        value: 0,
        // link: "/products/?st=active",
        key: "active"
      }, {
        label: "Total Products",
        value: 0,
        // link: "/products",
        key: "total"
      }],
      orderStats: [{
        label: "Orders Placed",
        value: 0,
        link: "/orders?s=placed",
        key: "placed"
      }, {
        label: "Orders Accepted",
        value: 0,
        link: "/orders?s=accepted",
        key: "accepted"
      }, {
        label: "Orders being Prepared",
        value: 0,
        link: "/orders?s=preparing",
        key: "preparing"
      }, {
        label: "Orders Fulfilled",
        value: 0,
        link: "/orders?s=fulfilled",
        key: "fulfilled"
      }]
    };
  },

  methods: {
    getStats() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        Stats.getCustomerStats().then(dat => {
          _this.customers.data = dat;
        }).catch(err => {
          _this.customers.hasError = true;
        }).finally(() => {
          _this.customers.loading = false;
        });
        Stats.getProductStats().then(dat => {
          _this.products.data = dat;

          _this.productStats.map(item => {
            if (_this.products.data.hasOwnProperty(item.key)) item.value = _this.products.data[item.key];
            return item;
          });
        }).catch(err => {
          _this.products.hasError = true;
        }).finally(() => {
          _this.products.loading = false;
        });
        Stats.getOrderStats().then(dat => {
          _this.orders.data = dat;

          _this.orderStats.map(item => {
            if (_this.orders.data.hasOwnProperty(item.key)) item.value = _this.orders.data[item.key];
            return item;
          });
        }).catch(err => {
          _this.orders.hasError = true;
        }).finally(() => {
          _this.orders.loading = false;
        });
        Stats.getPendingResellers().then(dat => {
          _this.pending.data = dat;
        }).catch(err => {
          _this.pending.hasError = true;
        }).finally(() => {
          _this.pending.loading = false;
        });
        Stats.getRecentComments().then(dat => {
          _this.recent.data = dat;
        }).catch(err => {
          _this.recent.hasError = true;
        }).finally(() => {
          _this.recent.loading = false;
        });
        Stats.getBusinessHolidays().then(dat => {
          _this.holidays.data = dat;
        }).catch(err => {
          _this.holidays.hasError = true;
        }).finally(() => {
          _this.holidays.loading = false;
        });
      })();
    }

  }
});
// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Index.vue?vue&type=style&index=0&id=7ea7c09a&lang=scss&scoped=true&
var Indexvue_type_style_index_0_id_7ea7c09a_lang_scss_scoped_true_ = __webpack_require__("c7bf");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// CONCATENATED MODULE: ./src/pages/Index.vue






/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7ea7c09a",
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);









runtime_auto_import_default()(Index_component, 'components', {QPage: QPage["a" /* default */],QSpinner: QSpinner["a" /* default */],QIcon: QIcon["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QDate: QDate["a" /* default */]});


/***/ }),

/***/ "bb48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Accounts_vue_vue_type_style_index_0_id_3066268f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85a1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Accounts_vue_vue_type_style_index_0_id_3066268f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Accounts_vue_vue_type_style_index_0_id_3066268f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Accounts_vue_vue_type_style_index_0_id_3066268f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c6b5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c7bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7ea7c09a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c6b5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7ea7c09a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7ea7c09a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7ea7c09a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=2.cd9ec8f6.js.map