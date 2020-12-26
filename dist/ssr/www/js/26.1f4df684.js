(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "059c":
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

/***/ "411a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("059c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4501":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_50020a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("61f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_50020a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_50020a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_50020a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "61f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8f31":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/products/Feature.vue?vue&type=template&id=50020a9e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Feature Product")]),_c('br'),_c('p',[_vm._v("\n                Cofigure the following form to feature the product."),_c('br'),_vm._v("\n                NOTE: Uploading an image will replace the existing banner,\n                if applicable.\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"account_circle"}}),_vm._v("Product Info\n            ")],1),_c('div',[_c('q-form',{attrs:{"disabled":_vm.featureProduct.hasError || _vm.featureProduct.loading},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onSubmit($event)}}},[(_vm.featureProduct.loading)?_c('q-item',{staticClass:"q-mt-sm"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Product Name")]),_vm._v("\n                            "+_vm._s(_vm.featureProduct.data.name)+"\n                        ")]),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Status")]),_c('q-toggle',{attrs:{"checked-icon":"check","color":"green-4","unchecked-icon":"clear","label":_vm.featureProduct.data.isFeatured
                                        ? 'Featured'
                                        : 'Not Featured'},model:{value:(_vm.featureProduct.data.isFeatured),callback:function ($$v) {_vm.$set(_vm.featureProduct.data, "isFeatured", $$v)},expression:"featureProduct.data.isFeatured"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                Banner\n                            ")]),_c('div',{staticClass:"field-value"},[_c('q-uploader',{ref:"pimgUploader",staticClass:"img-uploader full-width",attrs:{"disable":!_vm.featureProduct.data.isFeatured,"square":"","hide-upload-btn":"","accept":"image/jpeg,image/png","label":"Image Upload (Replace)","filter":_vm._validImage},on:{"added":_vm.imgsAdded,"removed":_vm.imgsRemoved,"failed":_vm.onImgUploadFailed}}),_c('br'),(
                                        _vm.productBanner !== null &&
                                            _vm.selimg === null
                                    )?_c('div',{staticClass:"flex"},[_c('q-img',{attrs:{"src":_vm.resolveAssetsUrl(_vm.productBanner),"ratio":16 / 9},scopedSlots:_vm._u([{key:"error",fn:function(){return [_c('div',{staticClass:"absolute-full flex flex-center bg-black text-white"},[_vm._v("\n                                                Cannot load banner image\n                                            ")])]},proxy:true}],null,false,5815348)})],1):_vm._e()],1)])],1),_c('q-separator'),_c('div',{staticClass:"q-pa-md"},[_c('q-btn',{attrs:{"label":_vm.selimg !== null ? 'Upload and Save' : 'Save',"type":"submit","color":"primary","loading":_vm.loading,"disable":_vm.loading || _vm.missingUpload},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true}])})],1)],1)],1)]),_c('div',{staticClass:"content-2"})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/products/Feature.vue?vue&type=template&id=50020a9e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/products/Feature.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let Product = null;
/* harmony default export */ var Featurevue_type_script_lang_js_ = ({
  name: "ProductFeature",
  mixins: [helpers["a" /* default */]],

  meta() {
    return {
      title: "Feature Product"
    };
  },

  beforeCreate() {
    Product = this.$RepositoryFactory.get("products");
  },

  created() {
    if (true) this.getProduct();
  },

  computed: {
    productBanner() {
      const banner = this.featureProduct.data.images.find(item => {
        return item.imageType == "banner";
      });
      if (!banner) return null;
      return banner.image;
    },

    missingUpload() {
      return !this.productBanner && this.selimg == null && this.featureProduct.data.isFeatured;
    }

  },

  data() {
    return {
      loading: false,
      selimg: null,
      featureProduct: {
        loading: true,
        hasError: false,
        data: {
          name: "",
          isFeatured: false,
          images: []
        }
      }
    };
  },

  methods: {
    _validImage(files) {
      const filtered = files.filter(file => file.size < 1024 * 1024 * 2 && // 2MB
      ["image/png", "image/jpeg"].includes(file.type));

      if (!filtered || filtered.length < 1 || filtered.length < files.length) {
        this.showNotif(false, "Limit image size to 2MB (PNG/JPG).");
      }

      return filtered;
    },

    getProduct() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        try {
          const resp = yield Product.getProduct(_this.$route.params.id);
          _this.featureProduct.data = resp;
        } catch (err) {
          _this.showNotif(false, "Could not retrieve product details. ");

          _this.featureProduct.hasError = true;
        } finally {
          _this.featureProduct.loading = false;
        }
      })();
    },

    onSubmit() {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        _this2.loading = true;

        try {
          if (_this2.selimg) {
            // Upload banner and update
            let fd = new FormData();
            fd.append("banner", _this2.selimg);
            fd.append("imageType", "banner");
            fd.append("isFeatured", _this2.featureProduct.data.isFeatured);
            yield Product.uploadBanner(_this2.$route.params.id, fd);
          } else {
            // Update only
            yield Product.updateProduct(_this2.$route.params.id, {
              isFeatured: _this2.featureProduct.data.isFeatured
            });
          }

          _this2.showNotif(true, "Successfully updated feature config.");

          _this2.returnToPageIndex("/products");
        } catch (err) {
          _this2.showNotif(false, "Could not update feature config.");
        } finally {
          _this2.loading = false;
        }
      })();
    },

    imgsRemoved(file) {
      this.selimg = null;
    },

    imgsAdded(file) {
      this.selimg = file[0];
    },

    onImgUploadFailed: function (info) {
      this.showNotif(false, "Failed to add your selected image. ");
    }
  }
});
// CONCATENATED MODULE: ./src/pages/products/Feature.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_Featurevue_type_script_lang_js_ = (Featurevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/products/Feature.vue?vue&type=style&index=0&id=50020a9e&lang=scss&scoped=true&
var Featurevue_type_style_index_0_id_50020a9e_lang_scss_scoped_true_ = __webpack_require__("4501");

// EXTERNAL MODULE: ./src/pages/products/Feature.vue?vue&type=style&index=1&lang=scss&
var Featurevue_type_style_index_1_lang_scss_ = __webpack_require__("411a");

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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

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

// CONCATENATED MODULE: ./src/pages/products/Feature.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_Featurevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "50020a9e",
  null
  
)

/* harmony default export */ var Feature = __webpack_exports__["default"] = (component.exports);














runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QIcon: QIcon["a" /* default */],QForm: QForm["a" /* default */],QItem: QItem["a" /* default */],QSpinner: QSpinner["a" /* default */],QList: QList["a" /* default */],QToggle: QToggle["a" /* default */],QUploader: QUploader["a" /* default */],QImg: QImg["a" /* default */],QSeparator: QSeparator["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */],QField: QField["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=26.1f4df684.js.map