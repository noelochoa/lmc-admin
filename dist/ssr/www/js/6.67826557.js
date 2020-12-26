(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "118a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1a91":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ff9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7f733fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a91");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7f733fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7f733fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7f733fd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "8d68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/orders/Index.vue?vue&type=template&id=7f733fd0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Orders")]),_c('br'),_c('p',[_vm._v("\n                The following is a list of orders for the selected month.\n            ")])]),_c('div',{staticClass:"heading-stat-1 text-caption"},[_vm._v("\n            Today\n            "),_c('br'),_c('p',{staticClass:"text-subtitle2"},[_vm._v("\n                "+_vm._s(_vm.today.human)+"\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"filter-orders"},[_c('q-btn',{staticClass:"q-mr-sm",attrs:{"flat":"","round":"","icon":"post_add","to":"/orders/add"}},[_c('q-tooltip',{attrs:{"anchor":"bottom right","self":"top middle","offset":[10, 10]}},[_vm._v("Add Order")])],1),_c('q-input',{attrs:{"readonly":"","debounce":"500","dark":"","dense":"","outlined":""},on:{"click":function($event){_vm.showSelect = true}},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"event"}})]},proxy:true}]),model:{value:(_vm.selectedMonth),callback:function ($$v) {_vm.selectedMonth=$$v},expression:"selectedMonth"}})],1),_c('div',{staticClass:"order-stats q-ml-sm"},[(_vm.loadingStats)?_c('p',{staticClass:"text-subtitle2"},[_c('q-spinner',{attrs:{"color":"white","size":"2.45em"}})],1):_c('q-breadcrumbs',{attrs:{"separator":"|","active-color":"white"}},_vm._l((_vm.orderStats),function(stat){return _c('q-breadcrumbs-el',{key:stat.name,class:{ 'active-stat': stat.count > 0 },attrs:{"label":stat.name + '(' + stat.count + ')'},on:{"click":function($event){return _vm.onSelectStatus(stat)}}})}),1)],1)]),_c('div',{staticClass:"content-2"},[_c('q-table',{ref:"ordersTbl",staticClass:"orders-table",attrs:{"square":"","row-key":"id","data":_vm.data,"columns":_vm.columns,"pagination":_vm.pagination,"rows-per-page-options":[0],"loading":_vm.loading,"binary-state-sort":""},on:{"update:pagination":[function($event){_vm.pagination=$event},_vm.onChgPage],"request":_vm.onRequest},scopedSlots:_vm._u([{key:"body",fn:function(props){return [_c('q-tr',{attrs:{"props":props}},[_c('q-td',{key:"ordernum",attrs:{"props":props}},[_vm._v("\n                            "+_vm._s(props.row.ordernum)+"\n                        ")]),_c('q-td',{key:"status",attrs:{"props":props}},[_c('q-chip',{class:'chip-' + props.row.class,attrs:{"square":""}},[_vm._v("\n                                "+_vm._s(props.row.status)+"\n                            ")])],1),_c('q-td',{key:"target",attrs:{"props":props}},[_vm._v("\n                            "+_vm._s(props.row.target)+"\n                        ")]),_c('q-td',{key:"customer",staticClass:"capitalize",attrs:{"props":props}},[_vm._v("\n                            "+_vm._s(props.row.customer)+" ("+_vm._s(props.row.type)+")\n                        ")]),_c('q-td',{key:"total",attrs:{"props":props}},[_vm._v("\n                            "+_vm._s(props.row.total)+"\n                        ")]),_c('q-td',[_c('q-btn',{staticClass:"q-mr-sm",attrs:{"dense":"","flat":"","round":"","icon":"build","to":'/orders/process/' + props.row.id}},[_c('q-tooltip',{attrs:{"anchor":"center right","self":"center left","offset":[10, 10]}},[_vm._v("Configure")])],1)],1)],1)]}}])})],1)]),_c('q-dialog',{attrs:{"seamless":"","persistent":""},model:{value:(_vm.showSelect),callback:function ($$v) {_vm.showSelect=$$v},expression:"showSelect"}},[_c('q-card',{attrs:{"dark":""}},[_c('MonthPicker',{attrs:{"color":"primary","locale":"en-US","min":_vm.minDate,"max":_vm.maxDate},model:{value:(_vm.selDate),callback:function ($$v) {_vm.selDate=$$v},expression:"selDate"}}),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Cancel"}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"OK","color":"primary"},on:{"click":_vm.onUpdateMonth}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/orders/Index.vue?vue&type=template&id=7f733fd0&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__("4d90");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MonthPicker.vue?vue&type=template&id=f15c284e&scoped=true&
var MonthPickervue_type_template_id_f15c284e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"monthpicker q-pa-md"},[_c('div',{staticClass:"monthpicker-header"},[_c('q-btn',{attrs:{"dense":"","disable":_vm.minClean &&
                    _vm.minClean.getFullYear() === _vm.selectedMonth.getFullYear(),"flat":"","icon":"navigate_before","round":""},on:{"click":function($event){return _vm.changeYear(false)}}}),_vm._v("\n        "+_vm._s(_vm.selectedMonth.getFullYear())+"\n        "),_c('q-btn',{attrs:{"dense":"","disable":_vm.maxClean &&
                    _vm.maxClean.getFullYear() === _vm.selectedMonth.getFullYear(),"flat":"","icon":"navigate_next","round":""},on:{"click":function($event){return _vm.changeYear(true)}}})],1),_c('div',{staticClass:"monthpicker-months"},_vm._l((_vm.displayedMonths),function(month){return _c('q-btn',{key:month.getTime(),class:{ 'monthpicker-current': _vm.isCurrentMonth(month) },attrs:{"color":_vm.isSelectedMonth(month) ? _vm.color : '',"disable":_vm.isDisabled(month),"flat":!_vm.isSelectedMonth(month),"label":month.toLocaleDateString(_vm.localeArray, {
                    month: 'short'
                }),"no-caps":"","no-outline":"","no-ripple":"","text-color":_vm.isCurrentMonth(month) && !_vm.isSelectedMonth(month)
                    ? _vm.color
                    : ''},on:{"click":function($event){return _vm.selectMonth(month)}}})}),1)])}
var MonthPickervue_type_template_id_f15c284e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MonthPicker.vue?vue&type=template&id=f15c284e&scoped=true&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MonthPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MonthPickervue_type_script_lang_js_ = ({
  name: "MonthPicker",
  computed: {
    displayedMonths() {
      let months = [];

      for (let i = 0; i < 12; i++) {
        months.push(new Date(this.selectedMonth.getFullYear(), i));
      }

      return months;
    },

    localeArray() {
      return this.locale ? [this.locale] : [];
    },

    maxClean() {
      return this.max ? this.cleanDate(this.max) : null;
    },

    minClean() {
      return this.min ? this.cleanDate(this.min) : null;
    }

  },

  data() {
    return {
      interval: null,
      selectedMonth: null
    };
  },

  destroyed() {
    clearInterval(this.interval);
  },

  methods: {
    changeYear(up) {
      if (up) {
        let d = new Date(this.selectedMonth);
        d.setMonth(d.getMonth() + 12);

        if (this.maxClean && d > this.maxClean) {
          d = this.maxClean;
        }

        this.selectMonth(d);
      } else {
        let d = new Date(this.selectedMonth);
        d.setMonth(d.getMonth() - 12);

        if (this.minClean && d < this.minClean) {
          d = this.minClean;
        }

        this.selectMonth(d);
      }
    },

    cleanDate(date) {
      let d = date ? new Date(date) : new Date();
      d.setDate(1);
      d.setHours(0, 0, 0, 0);
      return d;
    },

    currentMonth() {
      return this.cleanDate();
    },

    isCurrentMonth(month) {
      return this.currentMonth().getTime() === month.getTime();
    },

    isDisabled(month) {
      let disabled = false;

      if (this.minClean && month < this.minClean || this.maxClean && month > this.maxClean) {
        disabled = true;
      }

      return disabled;
    },

    isSelectedMonth(month) {
      return this.selectedMonth ? this.selectedMonth.getTime() === month.getTime() : false;
    },

    selectMonth(month) {
      this.$emit("input", month);
    }

  },
  props: ["color", "locale", "max", "min", "value"],
  watch: {
    value: {
      handler(val) {
        this.selectedMonth = val ? this.cleanDate(val) : this.currentMonth();
      },

      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/MonthPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MonthPickervue_type_script_lang_js_ = (MonthPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/MonthPicker.vue?vue&type=style&index=0&id=f15c284e&lang=scss&scoped=true&
var MonthPickervue_type_style_index_0_id_f15c284e_lang_scss_scoped_true_ = __webpack_require__("fbcc");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/MonthPicker.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MonthPickervue_type_script_lang_js_,
  MonthPickervue_type_template_id_f15c284e_scoped_true_render,
  MonthPickervue_type_template_id_f15c284e_scoped_true_staticRenderFns,
  false,
  null,
  "f15c284e",
  null
  
)

/* harmony default export */ var MonthPicker = (component.exports);


runtime_auto_import_default()(component, 'components', {QBtn: QBtn["a" /* default */]});

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/orders/Index.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let Order = null;
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "OrderIndex",
  components: {
    MonthPicker: MonthPicker
  },
  mixins: [helpers["a" /* default */]],

  meta() {
    return {
      title: "Orders"
    };
  },

  beforeCreate() {
    Order = this.$RepositoryFactory.get("orders");
  },

  created() {
    if (this.$route.query.m) {
      let timestamp = Date.parse(this.$route.query.m);

      if (isNaN(timestamp) == false) {
        this.selDate = new Date(timestamp);
        this.selectedMonth = this.selDate.getFullYear() + "-" + (this.selDate.getMonth() + 1).toString().padStart(2, 0);
      }
    }

    if (this.$route.query.s) {
      this.search = this.$route.query.s;
    }

    if (this.$route.query.p && !isNaN(this.$route.query.p)) {
      this.pagination.page = Number.parseInt(this.$route.query.p);
    }

    if (true) {
      this.getOrderStats();
    }
  },

  mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    });
  },

  data() {
    const dateToday = new Date();
    return {
      loading: false,
      loadingStats: true,
      showSelect: false,
      minDate: new Date(2010, 0),
      maxDate: new Date(dateToday.getFullYear() + 10, 11),
      selDate: dateToday,
      search: "",
      selectedMonth: dateToday.getFullYear() + "-" + (dateToday.getMonth() + 1).toString().padStart(2, 0),
      orderStats: [],
      pagination: {
        sortBy: "target",
        descending: true,
        page: 1,
        rowsPerPage: 9
      },
      columns: [{
        name: "ordernum",
        field: "ordernum",
        required: true,
        label: "Order#",
        align: "left",
        sortable: true
      }, {
        name: "status",
        field: "status",
        align: "left",
        label: "Status",
        sortable: true
      }, {
        name: "target",
        field: "target",
        align: "left",
        label: "Target Date",
        sortable: true
      }, {
        name: "customer",
        field: "customer",
        align: "left",
        label: "Customer",
        sortable: true
      }, {
        name: "total",
        field: "total",
        align: "left",
        label: "Total",
        sortable: true
      }, {
        name: "action",
        align: "left",
        label: "Action"
      }],
      data: [],
      original: []
    };
  },

  methods: {
    selOrders: function (date) {},

    filterMonth(val) {
      let searchQry = Object.assign({}, this.$route.query, {
        m: val
      });
      if (!val) delete searchQry.m;
      delete searchQry.p;
      this.$router.replace({
        query: searchQry
      }).catch(err => {});
      this.getOrderStats();
      this.$refs["ordersTbl"].requestServerInteraction({
        pagination: objectSpread2_default()(objectSpread2_default()({}, this.pagination), {}, {
          page: 1
        })
      });
    },

    onUpdateMonth: function (evt) {
      if (this.selDate) {
        this.selectedMonth = this.selDate.getFullYear() + "-" + (this.selDate.getMonth() + 1).toString().padStart(2, 0);
        this.filterMonth(this.selectedMonth);
      }
    },

    onSelectStatus(stat) {
      if (stat && stat.count) {
        this.search = stat.name;
        let searchQry = Object.assign({}, this.$route.query, {
          s: stat.name
        });
        if (!stat.name) delete searchQry.s;
        delete searchQry.p; // Reset page

        this.$router.replace({
          query: searchQry
        }).catch(err => {});
        this.$refs["ordersTbl"].requestServerInteraction({
          pagination: objectSpread2_default()(objectSpread2_default()({}, this.pagination), {}, {
            page: 1
          })
        });
      }
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

    getOrderStats() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        _this.loadingStats = true;

        try {
          const resp = yield Order.getOrderStats(_this.selDate);
          _this.orderStats = resp.slice();
        } catch (err) {
          _this.showNotif(false, "Could not retrieve order statistics. ");
        } finally {
          _this.loadingStats = false;
        }
      })();
    },

    onRequest(props) {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        _this2.loading = true;

        try {
          const resp = yield Order.getOrders(_this2.selDate, _this2.search);
          _this2.original = resp;
          _this2.data = _this2.original.slice();
          _this2.pagination.page = props.pagination.page;
        } catch (err) {
          _this2.showNotif(false, "Could not retrieve list of orders. ");
        } finally {
          _this2.loading = false;
        }
      })();
    }

  }
});
// CONCATENATED MODULE: ./src/pages/orders/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var orders_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/orders/Index.vue?vue&type=style&index=0&id=7f733fd0&lang=scss&scoped=true&
var Indexvue_type_style_index_0_id_7f733fd0_lang_scss_scoped_true_ = __webpack_require__("1ff9");

// EXTERNAL MODULE: ./src/pages/orders/Index.vue?vue&type=style&index=1&lang=scss&
var Indexvue_type_style_index_1_lang_scss_ = __webpack_require__("b52d");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbs.js
var QBreadcrumbs = __webpack_require__("ead5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbsEl.js
var QBreadcrumbsEl = __webpack_require__("079eb");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 17 modules
var QTable = __webpack_require__("eaac");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__("bd08");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__("db86");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// CONCATENATED MODULE: ./src/pages/orders/Index.vue







/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  orders_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7f733fd0",
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);
















runtime_auto_import_default()(Index_component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */],QTooltip: QTooltip["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QSpinner: QSpinner["a" /* default */],QBreadcrumbs: QBreadcrumbs["a" /* default */],QBreadcrumbsEl: QBreadcrumbsEl["a" /* default */],QTable: QTable["a" /* default */],QTr: QTr["a" /* default */],QTd: QTd["a" /* default */],QChip: QChip["a" /* default */],QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardActions: QCardActions["a" /* default */]});runtime_auto_import_default()(Index_component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ }),

/***/ "b52d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("118a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b632":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fbcc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthPicker_vue_vue_type_style_index_0_id_f15c284e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b632");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthPicker_vue_vue_type_style_index_0_id_f15c284e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthPicker_vue_vue_type_style_index_0_id_f15c284e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthPicker_vue_vue_type_style_index_0_id_f15c284e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=6.67826557.js.map