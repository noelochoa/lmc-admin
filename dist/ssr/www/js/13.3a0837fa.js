(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "2e04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f0fc66be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb54");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f0fc66be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f0fc66be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_f0fc66be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "54b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5b3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("54b1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7d22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/accounts/Edit.vue?vue&type=template&id=f0fc66be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Review Account")]),_c('br'),_c('p',[_vm._v("\n                You may check and configure the customer's account details.\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"account_circle"}}),_vm._v("Profile Info\n            ")],1),_c('div',[_c('q-form',{attrs:{"disabled":_vm.profile.hasError || _vm.profile.loading},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onSubmit($event)}}},[(_vm.profile.loading)?_c('q-item',{staticClass:"q-mt-sm"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("First Name")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"text","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Field required","lazy-rules":"","rules":[
                                    function (val) { return val !== null && val.trim() !== ''; },
                                    function (val) { return val !== null && val.length <= 256; }
                                ]},model:{value:(_vm.profile.data.fname),callback:function ($$v) {_vm.$set(_vm.profile.data, "fname", $$v)},expression:"profile.data.fname"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Last Name")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"text","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Field required","lazy-rules":"","rules":[
                                    function (val) { return val !== null && val.trim() !== ''; },
                                    function (val) { return val !== null && val.length <= 256; }
                                ]},model:{value:(_vm.profile.data.lname),callback:function ($$v) {_vm.$set(_vm.profile.data, "lname", $$v)},expression:"profile.data.lname"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Status")]),_c('q-toggle',{attrs:{"checked-icon":"check","color":"green-4","unchecked-icon":"clear","label":_vm.profile.data.active
                                        ? 'Active'
                                        : 'Inactive'},model:{value:(_vm.profile.data.active),callback:function ($$v) {_vm.$set(_vm.profile.data, "active", $$v)},expression:"profile.data.active"}})],1),_c('q-item',{staticClass:"detail-field capitalize"},[_c('span',{staticClass:"field-label"},[_vm._v("Account Type")]),_vm._v("\n                            "+_vm._s(_vm.profile.data.type)+"\n                        ")]),_c('q-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.profile.data.type === 'reseller'),expression:"profile.data.type === 'reseller'"}],staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Approval Status")]),_c('q-toggle',{attrs:{"checked-icon":"check","color":"green-4","unchecked-icon":"clear","label":_vm.profile.data.approved
                                        ? 'Approved'
                                        : 'For Approval'},model:{value:(_vm.profile.data.approved),callback:function ($$v) {_vm.$set(_vm.profile.data, "approved", $$v)},expression:"profile.data.approved"}})],1)],1),_c('q-separator'),_c('div',{staticClass:"q-pa-md"},[_c('q-btn',{attrs:{"label":"Save","type":"submit","color":"primary","loading":_vm.loading_p,"disable":_vm.loading_p},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true}])})],1)],1)],1)]),_c('div',{staticClass:"content-2"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"local_shipping"}}),_vm._v("Contact Info and Delivery Address\n            ")],1),_c('div',[_c('q-form',{attrs:{"disabled":_vm.profile.hasError || _vm.profile.loading},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onSubmitContact($event)}}},[(_vm.profile.loading)?_c('q-item',{staticClass:"q-mt-sm"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Email")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"email","dense":"","outlined":"","dark":"","readonly":"","hide-bottom-space":""},model:{value:(_vm.profile.data.email),callback:function ($$v) {_vm.$set(_vm.profile.data, "email", $$v)},expression:"profile.data.email"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Address")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"text","dense":"","outlined":"","dark":"","hide-bottom-space":"","lazy-rules":"","rules":[
                                    function (val) { return !val ||
                                        (val !== null && val.length) <= 512; }
                                ]},model:{value:(_vm.profile.data.address),callback:function ($$v) {_vm.$set(_vm.profile.data, "address", $$v)},expression:"profile.data.address"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Phone")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"tel","dense":"","outlined":"","dark":"","hide-bottom-space":"","placeholder":"Ex. (+63) 000-000-0000","mask":"(+##) ###-###-####","lazy-rules":"","rules":[_vm._isValidPhoneNum]},on:{"input":_vm.syncVerifiedStatus},model:{value:(_vm.profile.data.phone),callback:function ($$v) {_vm.$set(_vm.profile.data, "phone", $$v)},expression:"profile.data.phone"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Phone Verified")]),_c('q-toggle',{attrs:{"checked-icon":"check","color":"green-4","unchecked-icon":"clear","label":_vm.profile.data.smsVerified
                                        ? 'Confirmed'
                                        : 'Unconfirmed'},model:{value:(_vm.profile.data.smsVerified),callback:function ($$v) {_vm.$set(_vm.profile.data, "smsVerified", $$v)},expression:"profile.data.smsVerified"}})],1)],1),_c('q-separator'),_c('div',{staticClass:"q-pa-md"},[_c('q-btn',{attrs:{"label":"Save","type":"submit","color":"primary","loading":_vm.loading_c,"disable":_vm.loading_c},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true}])})],1)],1)],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/accounts/Edit.vue?vue&type=template&id=f0fc66be&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/accounts/Edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let Account = null;
/* harmony default export */ var Editvue_type_script_lang_js_ = ({
  name: "AccountsEdit",
  mixins: [helpers["a" /* default */]],
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.getAccount();
      }
    }

  },

  meta() {
    return {
      title: "Review Account",
      meta: {
        robots: {
          name: "robots",
          content: "noindex"
        }
      }
    };
  },

  beforeCreate() {
    Account = this.$RepositoryFactory.get("accounts");
  },

  created() {
    if (true) this.getAccount();
  },

  computed: {
    resolvedPhone() {
      const val = this.profile.data.phone;

      if (val && val !== "") {
        // +63 1234567890 E.164 Mobile Number format
        return val.replace(new RegExp(/[-()]/g), "");
      }

      return val;
    }

  },

  data() {
    return {
      loading_p: false,
      loading_c: false,
      profile: {
        loading: true,
        hasError: false,
        data: {
          active: false,
          fname: "",
          lname: "",
          type: "",
          approved: false,
          address: "",
          email: "",
          phone: "",
          smsVerified: false
        }
      }
    };
  },

  methods: {
    _isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email format";
    },

    _isValidPhoneNum(val) {
      if (!val) return true;
      const mobilePattern = /^\+\d{1,3}\s\d{1,14}(\s\d{1,13})?/;
      return mobilePattern.test(this.resolvedPhone) || "Invalid mobile phone format";
    },

    syncVerifiedStatus(val) {
      if (!val) {
        this.profile.data.smsVerified = false;
      }
    },

    getAccount() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        try {
          const resp = yield Account.getAccount(_this.$route.params.id);
          _this.profile.data = resp;
        } catch (err) {
          _this.showNotif(false, "Could not retrieve profile details. ");

          _this.profile.hasError = true;
        } finally {
          _this.profile.loading = false;
        }
      })();
    },

    onSubmit: function () {
      var _ref = asyncToGenerator_default()(function* (evt) {
        this.loading_p = true;

        try {
          yield Account.editAccount(this.$route.params.id, this.profile.data);
          this.showNotif(true, "Successfully updated account info.");
          this.loading_p = false;
          this.returnToPageIndex("/accounts");
        } catch (err) {
          this.showNotif(false, "Could not update the account info. ");
          this.loading_p = false;
        }
      });

      return function onSubmit(_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    onSubmitContact: function () {
      var _ref2 = asyncToGenerator_default()(function* (evt) {
        this.loading_c = true;

        try {
          yield Account.editAccountContact(this.$route.params.id, this.profile.data);
          this.showNotif(true, "Successfully updated contact info.");
          this.loading_c = false;
          this.returnToPageIndex("/accounts");
        } catch (err) {
          this.showNotif(false, "Could not update the contact info. ");
          this.loading_c = false;
        }
      });

      return function onSubmitContact(_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  }
});
// CONCATENATED MODULE: ./src/pages/accounts/Edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var accounts_Editvue_type_script_lang_js_ = (Editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/accounts/Edit.vue?vue&type=style&index=0&id=f0fc66be&lang=scss&scoped=true&
var Editvue_type_style_index_0_id_f0fc66be_lang_scss_scoped_true_ = __webpack_require__("2e04");

// EXTERNAL MODULE: ./src/pages/accounts/Edit.vue?vue&type=style&index=1&lang=scss&
var Editvue_type_style_index_1_lang_scss_ = __webpack_require__("5b3a");

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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 2 modules
var QField = __webpack_require__("8572");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/accounts/Edit.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  accounts_Editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f0fc66be",
  null
  
)

/* harmony default export */ var Edit = __webpack_exports__["default"] = (component.exports);













runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QIcon: QIcon["a" /* default */],QForm: QForm["a" /* default */],QItem: QItem["a" /* default */],QSpinner: QSpinner["a" /* default */],QList: QList["a" /* default */],QInput: QInput["a" /* default */],QToggle: QToggle["a" /* default */],QSeparator: QSeparator["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */],QField: QField["a" /* default */]});


/***/ }),

/***/ "cb54":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=13.3a0837fa.js.map