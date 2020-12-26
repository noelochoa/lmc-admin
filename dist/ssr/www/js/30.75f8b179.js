(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "5b33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/Index.vue?vue&type=template&id=7238a4bf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex flex-center"},[_c('div',{staticClass:"blur-bg"}),_c('div',{staticClass:"round-fg"},[_c('q-form',{on:{"submit":_vm.onSubmit,"reset":_vm.onReset}},[_c('h3',{staticClass:"q-pa-md q-mt-xl text-center text-white"},[_vm._v("Sign In")]),_c('q-input',{staticClass:"q-pa-md",attrs:{"filled":"","color":"black","type":"email","label":"Your email *","lazy-rules":"","rules":[
                    function (val) { return (val && val.length > 0) || 'Please type your email'; },
                    _vm.isValidEmail
                ]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"mail_outline"}})]},proxy:true}]),model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_c('q-input',{staticClass:"q-pa-md",attrs:{"filled":"","color":"black","type":"password","autocomplete":"on","label":"Your password *","lazy-rules":"","rules":[
                    function (val) { return (val !== null && val !== '') ||
                        'Please type your password'; },
                    function (val) { return val.length >= 6 ||
                        'Password should have 6 or more characters'; }
                ]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"security"}})]},proxy:true}]),model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_c('br'),_c('div',{staticClass:"q-pa-md"},[_c('q-btn',{attrs:{"label":"Submit","type":"submit","loading":_vm.loading,"color":"primary"},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true}])}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"label":"Reset","type":"reset","color":"white","flat":""}})],1),_c('div',{staticClass:"q-pa-md inline-block text-negative"},[_vm._v("\n                "+_vm._s(_vm.error)+"\n            ")])],1),_c('div',{staticClass:"message q-pa-md text-center"},[_c('p',{staticClass:"q-pt-lg"},[_c('q-icon',{staticClass:"cms-icon",attrs:{"name":"cake"}})],1),_c('br'),_c('h5',[_vm._v("Welcome, Admin!")]),_c('br'),_c('p',[_vm._v("Sign in to your admin account to continue.")])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/login/Index.vue?vue&type=template&id=7238a4bf&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/Index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "LoginIndex",

  preFetch({
    store,
    redirect
  }) {
    if (store.getters["auth/isAuthenticated"]) {
      redirect("/");
    }
  },

  created() {},

  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  },

  methods: {
    onSubmit() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        _this.error = "";
        _this.loading = true;
        const data = {
          email: _this.email,
          password: _this.password
        };

        try {
          yield _this.$store.dispatch("auth/signin", data);

          _this.$router.push("/").catch(err => {});
        } catch (err) {
          _this.error = err;
        } finally {
          _this.loading = false;
        }
      })();
    },

    onReset: function () {
      this.email = this.password = "";
    },

    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email format";
    }

  }
});
// CONCATENATED MODULE: ./src/pages/login/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var login_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/login/Index.vue?vue&type=style&index=0&id=7238a4bf&lang=scss&scoped=true&
var Indexvue_type_style_index_0_id_7238a4bf_lang_scss_scoped_true_ = __webpack_require__("9851");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/login/Index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  login_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7238a4bf",
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QForm: QForm["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */]});


/***/ }),

/***/ "9851":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7238a4bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee51");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7238a4bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7238a4bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7238a4bf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ee51":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=30.75f8b179.js.map