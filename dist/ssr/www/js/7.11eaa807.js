(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "097c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_104fe983_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e50e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_104fe983_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_104fe983_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_104fe983_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "48f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8705":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("48f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "b4d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/announcements/Index.vue?vue&type=template&id=104fe983&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Store Announcements")]),_c('br'),_c('p',[_vm._v("\n                The following is a list web store announcements. "),_c('br'),_vm._v("\n                Note: Only the latest entry will be visible on the Store if\n                there are overlapping dates.\n            ")])]),_c('div',{staticClass:"heading-stat-1 text-caption"},[_vm._v("\n            Today\n            "),_c('br'),_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                "+_vm._s(_vm.today.human)+"\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('q-btn',{staticClass:"q-mr-sm",attrs:{"flat":"","round":"","icon":"post_add","to":"/announcements/add"}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Add Announcement")])],1),_c('q-input',{staticClass:"filter-search-box",attrs:{"type":"search","placeholder":"Search text","debounce":"500","dark":"","dense":"","outlined":""},on:{"input":_vm.searchInput},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"search"}})]},proxy:true},{key:"append",fn:function(){return [_c('transition',{attrs:{"name":"fade"}},[_c('q-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.search != ''),expression:"search != ''"}],staticClass:"cursor-pointer",attrs:{"name":"close"},on:{"click":_vm.searchClear}})],1)]},proxy:true}]),model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}})],1),_c('div',{staticClass:"content-2"},[_c('q-table',{staticClass:"announcement-table",attrs:{"grid":"","row-key":"id","data":_vm.data,"columns":_vm.columns,"rows-per-page-options":[0],"pagination":_vm.pagination,"filter":_vm.search,"loading":_vm.loading},on:{"update:pagination":[function($event){_vm.pagination=$event},_vm.onChgPage],"request":_vm.onRequest},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('div',{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-4"},[_c('q-card',{staticClass:"bg-gray-alpha-2"},[_c('q-card-section',[_vm._v("\n                                "+_vm._s(props.row.message)+"\n                            ")]),_c('q-separator'),_c('q-list',{attrs:{"dense":""}},_vm._l((props.cols.filter(
                                        function (col) { return col.name !== 'message'; }
                                    )),function(col){return _c('q-item',{key:col.name},[_c('q-item-section',[_c('q-item-label',[_vm._v("\n                                            "+_vm._s(col.label)+"\n                                        ")])],1),_c('q-item-section',{attrs:{"side":""}},[_c('q-item-label',{staticClass:"text-primary"},[_vm._v("\n                                            "+_vm._s(col.value)+"\n                                        ")])],1)],1)}),1),_c('q-separator'),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{attrs:{"dense":"","flat":"","round":"","icon":"build","to":'/announcements/edit/' +
                                            props.row.id}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Edit Announcement\n                                    ")])],1),_c('q-btn',{attrs:{"dense":"","flat":"","round":"","icon":"delete"},on:{"click":function($event){return _vm.confirmDel(props.row.id)}}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Delete Announcement\n                                    ")])],1)],1)],1)],1)]}}])}),_c('ConfirmDialog',{attrs:{"showDlg":_vm.showDlg},on:{"update:showDlg":function($event){_vm.showDlg=$event},"update:show-dlg":function($event){_vm.showDlg=$event}},scopedSlots:_vm._u([{key:"avatar",fn:function(){return [_c('q-avatar',{attrs:{"icon":"delete_forever","color":"red-5","text-color":"white"}})]},proxy:true},{key:"message",fn:function(){return [_vm._v("\n                    Continue on removing this announcement?"),_c('br'),_vm._v("\n                    Warning: This action is permanent.\n                ")]},proxy:true},{key:"actions",fn:function(){return [_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Cancel"}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Remove","color":"red-5"},on:{"click":_vm.onRemove}})]},proxy:true}])})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/announcements/Index.vue?vue&type=template&id=104fe983&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/components/ConfirmDialog.vue + 4 modules
var ConfirmDialog = __webpack_require__("96ec");

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/announcements/Index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let Psa = null;
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "AnnoucementIndex",
  components: {
    ConfirmDialog: ConfirmDialog["a" /* default */]
  },
  mixins: [helpers["a" /* default */]],

  meta() {
    return {
      title: "Store Announcements"
    };
  },

  beforeCreate() {
    Psa = this.$RepositoryFactory.get("announcements");
  },

  created() {
    if (this.$route.query.s) {
      this.search = this.$route.query.s;
    }

    if (this.$route.query.p && !isNaN(this.$route.query.p)) {
      this.pagination.page = Number.parseInt(this.$route.query.p);
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
      announcementList: [],
      search: "",
      searchReq: null,
      loading: false,
      showDlg: false,
      toDelID: -1,
      pagination: {
        sortBy: "start",
        descending: true,
        page: 1,
        rowsPerPage: 9
      },
      columns: [{
        name: "message",
        field: "message",
        label: "Message",
        sortable: true,
        required: true
      }, {
        name: "start",
        field: "start",
        label: "Start",
        sortable: true
      }, {
        name: "end",
        field: "end",
        label: "End",
        sortable: true
      }],
      data: [],
      original: []
    };
  },

  methods: {
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

    onRequest(props) {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        _this.loading = true;

        try {
          const resp = yield Psa.getAllAnnouncements();
          _this.original = resp;
          _this.data = _this.original.slice();
        } catch (err) {
          _this.showNotif(false, "Could not retrieve announcement details. ");
        } finally {
          _this.loading = false;
        }
      })();
    },

    onRemove() {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        if (_this2.toDelID !== -1) {
          try {
            const resp = yield Psa.deleteAnnouncement(_this2.toDelID);

            _this2.showNotif(true, "Successfully removed announcement."); // Remove from list and Reset


            _this2.$delete(_this2.data, _this2.data.findIndex(el => el.id == _this2.toDelID));

            _this2.toDelID = -1;
          } catch (err) {
            _this2.showNotif(false, "Could not delete item. ");
          }
        }
      })();
    },

    confirmDel(psaID) {
      this.showDlg = true;
      this.toDelID = psaID;
    }

  }
});
// CONCATENATED MODULE: ./src/pages/announcements/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var announcements_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/announcements/Index.vue?vue&type=style&index=0&id=104fe983&lang=scss&scoped=true&
var Indexvue_type_style_index_0_id_104fe983_lang_scss_scoped_true_ = __webpack_require__("097c");

// EXTERNAL MODULE: ./src/pages/announcements/Index.vue?vue&type=style&index=1&lang=scss&
var Indexvue_type_style_index_1_lang_scss_ = __webpack_require__("8705");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 17 modules
var QTable = __webpack_require__("eaac");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

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

// CONCATENATED MODULE: ./src/pages/announcements/Index.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  announcements_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "104fe983",
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);
















runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */],QTooltip: QTooltip["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QTable: QTable["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QSeparator: QSeparator["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QCardActions: QCardActions["a" /* default */],QAvatar: QAvatar["a" /* default */]});runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ }),

/***/ "e50e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=7.11eaa807.js.map