(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "1b67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductPicker.vue?vue&type=template&id=91e94df2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-dialog',{attrs:{"value":_vm.showDlg,"seamless":"","persistent":"","square":"","position":"right"},on:{"hide":_vm.emitClose}},[_c('q-card',{staticClass:"product-dialog-content",attrs:{"dark":""}},[_c('q-card-section',[_c('div',{staticClass:"text-h6"},[_vm._v("Select Product")])]),(_vm.productReady)?_c('q-card-section',[_vm._t("product")],2):_vm._e(),_c('q-inner-loading',{attrs:{"dark":"","showing":_vm.dialogLoading}},[_c('q-spinner-tail',{attrs:{"size":"50px","color":"white"}})],1),(_vm.productReady)?_c('q-card-actions',{attrs:{"align":"right"}},[_vm._t("actions")],2):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ProductPicker.vue?vue&type=template&id=91e94df2&scoped=true&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProductPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductPickervue_type_script_lang_js_ = ({
  name: "ProductPicker",
  props: {
    showDlg: {
      type: Boolean,
      required: true,
      default: false
    },
    dialogLoading: {
      type: Boolean,
      default: false
    },
    productReady: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    emitClose() {
      this.$emit("update:showDlg", false);
    }

  }
});
// CONCATENATED MODULE: ./src/components/ProductPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductPickervue_type_script_lang_js_ = (ProductPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ProductPicker.vue?vue&type=style&index=0&id=91e94df2&lang=scss&scoped=true&
var ProductPickervue_type_style_index_0_id_91e94df2_lang_scss_scoped_true_ = __webpack_require__("f204");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerTail.js
var QSpinnerTail = __webpack_require__("007d");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/ProductPicker.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "91e94df2",
  null
  
)

/* harmony default export */ var ProductPicker = __webpack_exports__["a"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinnerTail: QSpinnerTail["a" /* default */],QCardActions: QCardActions["a" /* default */]});


/***/ }),

/***/ "1cd3":
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

/***/ "ad4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/orders/Process.vue?vue&type=template&id=15914f7e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-px-md q-pt-lg"},[_c('q-drawer',{attrs:{"content-class":"similar-orders","side":"right","overlay":"","elevated":""},model:{value:(_vm.right),callback:function ($$v) {_vm.right=$$v},expression:"right"}},[_c('div',{staticClass:"flex q-mx-md q-mt-sm"},[_c('q-btn',{staticClass:"q-ml-auto",attrs:{"flat":"","dense":"","label":"Hide","no-ripple":""},on:{"click":function($event){_vm.right = !_vm.right}}})],1),(_vm.findingSimilar)?_c('div',{staticClass:"q-my-sm text-h6 text-grey-5 flex flex-center"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):(_vm.similarOrderList && _vm.similarOrderList.length > 0)?_c('div',{staticClass:"q-my-sm text-h6 text-grey-5 flex flex-center"},[_vm._v("\n            Similar Orders\n        ")]):_c('div',{staticClass:"q-my-sm text-h6 text-grey-5 flex flex-center"},[_vm._v("\n            No similar orders found.\n        ")]),_vm._l((_vm.similarOrderList),function(item,idx){return _c('q-card',{key:'similar-' + idx,staticClass:"q-ma-md bg-grey-8"},[_c('q-card-section',[_c('div',{staticClass:"text-subtitle2"},[_vm._v(_vm._s(item.ordernum))]),_c('div',{staticClass:"text-subtitle2 capitalize",class:'ctext-' + item.class,attrs:{"square":""}},[_vm._v("\n                    "+_vm._s(item.status)+"\n                ")]),_c('div',{staticClass:"text-subtitle2"},[_vm._v(_vm._s(item.customer))]),_c('div',{staticClass:"text-subtitle2"},[_vm._v(_vm._s(item.target))]),_c('div',{staticClass:"text-subtitle2"},[_vm._v(_vm._s(item.price))]),_c('div',{staticClass:"text-grey-5"},[_vm._v(_vm._s(item.similarity))])]),_c('q-separator'),_c('q-card-actions',{attrs:{"dense":"","vertical":""}},[_c('q-btn',{attrs:{"dense":"","flat":"","to":'/orders/process/' + item.id}},[_vm._v("\n                    Configure\n                ")])],1)],1)})],2),_c('div',{staticClass:"page-heading text-white q-pa-md"},[_c('div',{staticClass:"heading-caption"},[_c('h6',[_vm._v("Process Order")]),_c('br'),_c('p',[_vm._v("\n                You may view, edit, and change the order status and\n                details."),_c('br'),_vm._v("\n                CAUTION: Editing Customer and/or Products fields will place\n                a NEW order with the updated price.\n            ")])])]),_c('div',{staticClass:"page-contents text-white q-pa-md"},[_c('div',{staticClass:"content-1"},[_c('div',{staticClass:"text-subtitle2 flex flex-center"},[_c('q-icon',{staticClass:"caption-icon q-mx-md",attrs:{"name":"account_circle"}}),_vm._v("Order Info ("+_vm._s(_vm.order.data.ordernum)+")\n\n                "),_c('q-btn',{staticClass:"q-ml-auto q-mr-sm",attrs:{"no-ripple":"","flat":"","align":"right","label":(_vm.right ? 'Hide' : 'Find') + ' Similar'},on:{"click":_vm.findSimilar}})],1),_c('div',[_c('q-form',{attrs:{"disabled":_vm.order.hasError || _vm.order.loading || _vm.isReplacedStatus},on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onSubmit($event)}}},[(_vm.order.loading)?_c('q-item',{staticClass:"q-mt-sm"},[_c('q-spinner',{attrs:{"color":"white","size":"2em"}})],1):_c('q-list',{staticClass:"detail-list",attrs:{"separator":""}},[_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Status")]),_c('q-select',{staticClass:"field-value",attrs:{"options":_vm.orderStatusList,"dark":"","dense":"","outlined":"","hide-bottom-space":"","options-dense":"","emit-value":"","map-options":"","lazy-rules":"","rules":[_vm._isValidStatus]},model:{value:(_vm.order.data.status),callback:function ($$v) {_vm.$set(_vm.order.data, "status", $$v)},expression:"order.data.status"}})],1),(_vm.isReplacedStatus)?_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Replaced by:")]),_vm._v("\n                            "+_vm._s(_vm.order.data.replacedBy.ordernum)+"\n                        ")]):_vm._e(),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Target Date")]),_c('q-input',{staticClass:"field-value",attrs:{"dense":"","outlined":"","hide-bottom-space":"","dark":"","rules":[
                                    function (val) { return val !== null && val.trim() !== ''; },
                                    _vm._isValidDatetime
                                ]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"event"}},[_c('q-popup-proxy',{ref:"qDateProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"dark":"","no-unset":"","mask":"YYYY-MM-DD HH:mm"},on:{"input":function () { return _vm.$refs.qDateProxyS.hide(); }},model:{value:(_vm.order.data.target),callback:function ($$v) {_vm.$set(_vm.order.data, "target", $$v)},expression:"order.data.target"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{ref:"qTimeProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"dark":"","mask":"YYYY-MM-DD HH:mm","format24h":""},on:{"input":function () { return _vm.$refs.qTimeProxyS.hide(); }},model:{value:(_vm.order.data.target),callback:function ($$v) {_vm.$set(_vm.order.data, "target", $$v)},expression:"order.data.target"}})],1)],1)]},proxy:true}]),model:{value:(_vm.order.data.target),callback:function ($$v) {_vm.$set(_vm.order.data, "target", $$v)},expression:"order.data.target"}})],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Delivery Type")]),_c('q-select',{staticClass:"field-value",attrs:{"options":_vm.deliveryTypes,"dark":"","dense":"","outlined":"","hide-bottom-space":"","options-dense":"","emit-value":"","map-options":"","lazy-rules":"","rules":[_vm._isValidType]},model:{value:(_vm.order.data.type),callback:function ($$v) {_vm.$set(_vm.order.data, "type", $$v)},expression:"order.data.type"}})],1),_c('transition',{attrs:{"name":"fade"}},[(_vm.order.data.type == 'delivery')?_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Address")]),_c('q-input',{staticClass:"field-value",attrs:{"dense":"","outlined":"","dark":"","hide-bottom-space":"","lazy-rules":"","rules":[
                                        function (val) { return val !== null &&
                                            val.trim() !== ''; }
                                    ]},model:{value:(_vm.order.data.address),callback:function ($$v) {_vm.$set(_vm.order.data, "address", $$v)},expression:"order.data.address"}})],1):_vm._e()],1),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                Memo\n                            ")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"textarea","rows":3,"textarea":"","dense":"","outlined":"","dark":"","hide-bottom-space":""},model:{value:(_vm.order.data.memo),callback:function ($$v) {_vm.$set(_vm.order.data, "memo", $$v)},expression:"order.data.memo"}})],1),(!_vm.isReplacedStatus)?_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Replace Items")]),_c('q-toggle',{attrs:{"checked-icon":"check","color":"green-4","unchecked-icon":"clear","label":_vm.confirmEditProduct ? 'Yes' : 'No'},on:{"input":_vm.onToggleReplace},model:{value:(_vm.confirmEditProduct),callback:function ($$v) {_vm.confirmEditProduct=$$v},expression:"confirmEditProduct"}})],1):_vm._e(),_c('q-item',{staticClass:"detail-field",class:{
                                'cursor-not-allowed bg-grey-8': !_vm.confirmEditProduct
                            }},[_c('span',{staticClass:"field-label"},[_vm._v("Customer")]),_c('q-select',{staticClass:"field-value customer-select",class:{
                                    'no-pointer-events': !_vm.confirmEditProduct
                                },attrs:{"disabled":!_vm.confirmEditProduct,"options":_vm.options,"hide-dropdown-icon":"","hide-bottom-space":"","dark":"","dense":"","options-dense":"","outlined":"","use-input":"","emit-value":"","map-options":"","lazy-rules":"","rules":[function (val) { return val !== null; }]},on:{"filter":_vm.filterFn,"input":_vm.onSelCustomer},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"close"},on:{"click":function($event){$event.stopPropagation();return _vm.clearSelCustomer($event)}}})]},proxy:true},{key:"no-option",fn:function(){return [_c('q-item',[_c('q-item-section',{staticClass:"text-italic text-grey"},[_vm._v("\n                                            No customer account found.\n                                        ")])],1)]},proxy:true}]),model:{value:(_vm.order.data.customer),callback:function ($$v) {_vm.$set(_vm.order.data, "customer", $$v)},expression:"order.data.customer"}})],1),_c('q-item',{staticClass:"detail-field product-field",class:{
                                'cursor-not-allowed bg-grey-8': !_vm.confirmEditProduct
                            }},[_c('span',{staticClass:"field-label"},[_vm._v("\n                                Products\n                            ")]),_c('div',{staticClass:"product-details q-py-sm"},[_vm._l((_vm.order.data
                                        .products),function(product,idx){return _c('q-item',{key:'product-' + idx,staticClass:"product-item"},[_c('q-item-section',{attrs:{"side":""}},[_c('q-avatar',{attrs:{"rounded":"","size":"64px"}},[_c('img',{attrs:{"src":product.image
                                                        ? _vm.resolveAssetsUrl(
                                                              product.image
                                                          )
                                                        : 'https://dummyimage.com/64x64/363636/ffffff.png&text=No+Img'}}),_c('q-badge',{staticClass:"q-pt-xs",attrs:{"floating":"","color":"teal"}},[_vm._v("\n                                                "+_vm._s(product.quantity)+"\n                                            ")])],1)],1),_c('q-item-section',[_c('q-item-label',{staticClass:"product-name"},[_vm._v("\n                                            "+_vm._s(product.name)+"\n                                        ")]),_c('q-item-label',{staticClass:"text-grey-4 product-name",attrs:{"caption":""}},_vm._l((product.options),function(opt){return _c('span',{key:'key-' + opt._option},[_vm._v("\n                                                "+_vm._s(opt._option +
                                                        ": " +
                                                        opt._selected)+"\n                                                "),(
                                                        opt.otherValue !=
                                                            null
                                                    )?_c('span',[_vm._v("("+_vm._s(opt.otherValue)+") ")]):_vm._e(),_c('br')])}),0)],1),_c('q-item-section',{staticClass:"text-white",attrs:{"side":""}},[(product.discount > 0)?_c('span',[_c('span',{staticClass:"text-strike"},[_vm._v("\n                                                "+_vm._s(product.price)+"\n                                            ")]),_vm._v("\n                                            (-"+_vm._s(product.discount)+"%)"),_c('br'),_vm._v("\n                                            "+_vm._s(product.finalPrice)+" PHP\n                                        ")]):_c('span',[_vm._v(_vm._s(product.price)+" PHP\n                                        ")])]),_c('q-item-section',{staticClass:"action-buttons text-white",attrs:{"side":""}},[_c('q-btn',{attrs:{"flat":"","dense":"","rounded":"","icon":"clear","disabled":!_vm.confirmEditProduct ||
                                                    _vm.showPicker},on:{"click":function($event){return _vm.removeProduct(idx)}}},[_c('q-tooltip',[_vm._v("\n                                                Remove\n                                            ")])],1)],1)],1)}),_c('q-btn',{attrs:{"dense":"","flat":"","no-caps":"","icon":"add","label":"Add Product","disabled":!_vm.confirmEditProduct || _vm.showPicker},on:{"click":function($event){return _vm.openProductPicker()}}})],2)]),_c('q-item',{staticClass:"detail-field"},[_c('span',{staticClass:"field-label"},[_vm._v("Total Price")]),_vm._v("\n                            "+_vm._s(_vm.orderTotalPrice)+" PHP\n                        ")])],1),_c('q-separator'),_c('div',{staticClass:"q-pa-md"},[_c('q-btn',{attrs:{"label":"Save","type":"submit","color":"primary","loading":_vm.loading,"disable":_vm.loading},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true}])})],1)],1)],1)]),_c('div',{staticClass:"content-2"}),_c('ProductPicker',{attrs:{"showDlg":_vm.showPicker},on:{"update:showDlg":function($event){_vm.showPicker=$event},"update:show-dlg":function($event){_vm.showPicker=$event},"hide":function($event){return _vm.onCloseDialog(_vm.val)}},scopedSlots:_vm._u([{key:"product",fn:function(){return [_c('q-form',{ref:"selProductForm"},[_c('q-item',{staticClass:"productdlg-item"},[_c('q-select',{staticClass:"search-field",attrs:{"popup-content-class":"options-light","options":_vm.productOptions,"label":"Search Product","hide-dropdown-icon":"","hide-bottom-space":"","dark":"","options-dark":"","outlined":"","use-input":"","emit-value":"","map-options":"","debounce":"250","loading":_vm.pfilterLoading},on:{"filter":_vm.pfilterFn,"input":_vm.onSelectProduct},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"search","color":"white"}})]},proxy:true},{key:"append",fn:function(){return [(!_vm.pfilterLoading)?_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"close"},on:{"click":function($event){$event.stopPropagation();[
                                            (_vm.searchProduct = null),
                                            (_vm.selectProduct = null)
                                        ]}}}):_vm._e()]},proxy:true},{key:"no-option",fn:function(){return [_c('q-item',{staticClass:"options-light"},[_c('q-item-section',{staticClass:"text-italic text-grey"},[_vm._v("\n                                        No products found.\n                                    ")])],1)]},proxy:true}]),model:{value:(_vm.searchProduct),callback:function ($$v) {_vm.searchProduct=$$v},expression:"searchProduct"}})],1),(_vm.selectProduct)?_c('q-list',{staticClass:"productdlg-list"},[_c('q-item',{staticClass:"productdlg-item"},[_c('div',{staticClass:"attr-label text-grey-6"},[_vm._v("\n                                Name\n                            ")]),_c('div',{staticClass:"attr-value"},[_vm._v("\n                                "+_vm._s(_vm.selectProduct.name)+"\n                            ")])]),_c('q-item',{staticClass:"productdlg-item"},[_c('div',{staticClass:"attr-label text-grey-6"},[_vm._v("\n                                Qty. (MIN:\n                                "+_vm._s(_vm.selectProduct.minOrderQuantity)+")\n                            ")]),_c('q-input',{staticClass:"attr-value",attrs:{"dense":"","outlined":"","hide-bottom-space":"","dark":"","type":"number","min":_vm.selectProduct.minOrderQuantity},on:{"input":_vm.onChgQty},model:{value:(_vm.customizedProduct.quantity),callback:function ($$v) {_vm.$set(_vm.customizedProduct, "quantity", $$v)},expression:"customizedProduct.quantity"}})],1),_c('q-item',{staticClass:"productdlg-item"},[_c('div',{staticClass:"attr-label text-grey-6"},[_vm._v("\n                                Options\n                            ")]),_vm._l((_vm.selectProduct.options),function(item,key){return _c('div',{key:'optKey-' + key,staticClass:"attr-value q-my-sm"},[_c('span',{staticClass:"capitalize option-label"},[_vm._v("\n                                    "+_vm._s(item.attribute)+"\n                                ")]),_c('q-select',{attrs:{"popup-content-class":"options-light","dense":"","dark":"","outlined":"","options":_vm.toSelOptions(
                                            item.attribute,
                                            item.choices
                                        ),"lazy-rules":"","rules":[function (val) { return !!val; }]},on:{"input":function($event){return _vm.onSelOption(key)}},model:{value:(_vm.customizedProduct.options[key]),callback:function ($$v) {_vm.$set(_vm.customizedProduct.options, key, $$v)},expression:"customizedProduct.options[key]"}}),(
                                        _vm.isOtherSelected(
                                            _vm.customizedProduct.options[key]
                                        )
                                    )?_c('q-input',{attrs:{"dense":"","dark":"","outlined":"","placeholder":"Please specify","lazy-rules":"","rules":[function (val) { return !!val; }]},model:{value:(
                                        _vm.customizedProduct.otherVal[key]
                                    ),callback:function ($$v) {_vm.$set(_vm.customizedProduct.otherVal, key, $$v)},expression:"\n                                        customizedProduct.otherVal[key]\n                                    "}}):_vm._e()],1)})],2),_c('q-item',{staticClass:"productdlg-item"},[_c('div',{staticClass:"attr-label text-grey-6"},[_vm._v("\n                                Price (PHP)\n                            ")]),_c('div',{staticClass:"attr-value"},[_vm._v("\n                                "+_vm._s(_vm.customizedProduct.price)+"\n                            ")])])],1):_vm._e()],1)]},proxy:true},{key:"actions",fn:function(){return [_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Cancel"},on:{"click":_vm.onCloseDialog}}),_c('q-btn',{attrs:{"flat":"","label":"Add","color":"primary"},on:{"click":_vm.onSetProduct}})]},proxy:true}])})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/orders/Process.vue?vue&type=template&id=15914f7e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/components/ProductPicker.vue + 4 modules
var ProductPicker = __webpack_require__("1b67");

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/orders/Process.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let Account = null,
    Product = null,
    Order = null;
/* harmony default export */ var Processvue_type_script_lang_js_ = ({
  name: "OrderProcess",
  components: {
    ProductPicker: ProductPicker["a" /* default */]
  },
  mixins: [helpers["a" /* default */]],
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.getOrderDetails();
      }
    }

  },

  meta() {
    return {
      title: "Process Order"
    };
  },

  beforeCreate() {
    Account = this.$RepositoryFactory.get("accounts");
    Product = this.$RepositoryFactory.get("products");
    Order = this.$RepositoryFactory.get("orders");
  },

  created() {
    if (true) {
      this.getOrderStatuses();
      this.getAccounts();
    }
  },

  mounted() {
    this.getOrderDetails();
  },

  computed: {
    isReplacedStatus() {
      if (!this.orderStatuses || this.orderStatuses.length < 1) return false;
      return this.orderStatuses.some(item => item.value == this.order.data.status && item.label.toLowerCase() == "replaced");
    },

    orderStatusList() {
      if (!this.isReplacedStatus) {
        return this.orderStatuses.filter(item => {
          return item.label.toLowerCase() !== "replaced";
        });
      }

      return this.orderStatuses;
    },

    orderTotalPrice() {
      return this.order.data.products.length > 0 ? this.order.data.products.reduce((total, item) => {
        return total + Number.parseInt(item.finalPrice ? item.finalPrice : item.price);
      }, 0) : 0;
    },

    similarOrderList() {
      if (this.findingSimilar || this.similarOrders && this.similarOrders.length < 1) return []; // return this.similarOrders.reduce((r, a) => {
      //     r[a.similarity] = r[a.similarity] || [];
      //     r[a.similarity].push(a);
      //     return r;
      // }, Object.create(null));

      return this.similarOrders;
    }

  },

  data() {
    return {
      right: false,
      loading: false,
      pfilterLoading: false,
      findingSimilar: false,
      showPicker: false,
      confirmEditProduct: false,
      order: {
        loading: true,
        hasError: false,
        data: {
          ordernum: "",
          products: [],
          total: 0,
          customer: null,
          target: null,
          address: "",
          type: "delivery",
          status: null
        }
      },
      orderBackup: {},
      orderStatuses: [],
      deliveryTypes: [{
        label: "For Delivery",
        value: "delivery"
      }, {
        label: "For Pickup",
        value: "pickup"
      }],
      customerList: [],
      options: null,
      productOptions: null,
      searchProduct: null,
      selectProduct: null,
      customizedProduct: {
        id: -1,
        name: "",
        image: "",
        quantity: 0,
        price: 0,
        discounts: [],
        options: [],
        otherVal: []
      },
      similarOrders: [// {
        //     ordernum: "507f1f77bcf86cd799439011",
        //     status: "Placed",
        //     target: "Feb 20, 2020",
        //     customer: "John",
        //     similarity: "Same product orders",
        //     total: 1000
        // },
        // {
        //     ordernum: 2,
        //     status: "Processing",
        //     target: "Feb 20, 2020",
        //     customer: "John",
        //     similarity: "Same target date",
        //     total: 3000
        // },
        // {
        //     ordernum: 1,
        //     status: "fulfilled",
        //     target: "Feb 20, 2020 10:30",
        //     customer: "AAAAAAA",
        //     total: 2000
        // },
        // {
        //     ordernum: 22,
        //     status: "Cancelled",
        //     target: "Feb 10, 2020 10:30",
        //     customer: "AAA",
        //     total: 200.5
        // }
      ]
    };
  },

  methods: {
    _isValidStatus(val) {
      if (!(this.order.data.status && this.orderStatuses && this.orderStatuses.length > 0)) {
        return "Invalid status selected";
      }

      const statusItem = this.orderStatuses.find(option => {
        return option.value === this.order.data.status;
      });
      if (!statusItem) return "Invalid status selected";
      return true;
    },

    _isValidType(val) {
      if (!(this.order.data.type && this.deliveryTypes && this.deliveryTypes.length > 0)) {
        return "Invalid type selected";
      }

      const typeItem = this.deliveryTypes.find(option => {
        return option.value === this.order.data.type;
      });
      if (!typeItem) return "Invalid type selected";
      return true;
    },

    _isValidDatetime(val) {
      const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
      return dtpattern.test(val) || "Invalid date & time format";
    },

    filterFn(val, update, abort) {
      if (!val || val.trim() == "") {
        abort();
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.options = this.customerList.filter(v => v.label.toLowerCase().indexOf(needle) > -1);
      });
    },

    pfilterFn(val, update, abort) {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        if (!val || val.trim() == "") {
          abort();
          return;
        }

        try {
          _this.pfilterLoading = true;
          const res = yield Product.searchProducts(val);
          _this.productList = res.products.slice();
          update(() => {
            _this.productOptions = _this.productList.map(item => {
              return {
                label: item.name,
                value: item.id
              };
            });
          });
        } catch (err) {
          _this.showNotif(false, "Error searching product/s." + err);
        } finally {
          _this.pfilterLoading = false;
        }
      })();
    },

    onCloseDialog() {},

    finalizePrice() {
      // Check for discounts and update prices
      const accnt = this.customerList.find(item => {
        return item.value == this.order.data.customer;
      });
      if (!accnt) return;
      this.order.data.products.forEach(el => {
        const discount = el.discounts.filter(item => {
          return item.target == accnt.type || item.target == "all";
        });

        if (discount && discount.length > 0) {
          const maxDiscount = Math.max.apply(Math, discount.map(function (o) {
            return o.percent;
          }));
          const finalPrice = (el.price - el.price * maxDiscount / 100).toFixed(0); // Update new price (discounted)

          el.discount = maxDiscount;
          el.finalPrice = finalPrice;
        }
      });
    },

    onSelCustomer(val) {
      this.finalizePrice();
    },

    onSelectProduct(val) {
      // On select from search results
      this.selectProduct = this.productList.find(item => {
        return item.id == val;
      });
      this.clearSelection(); // Set item for cutomization

      this.customizedProduct.id = this.selectProduct.id;
      this.customizedProduct.name = this.selectProduct.name;
      this.customizedProduct.image = this.selectProduct.images && this.selectProduct.images.length > 0 ? this.selectProduct.images[0].image : null;
      this.customizedProduct.quantity = this.selectProduct.minOrderQuantity;
      this.customizedProduct.discounts = this.selectProduct.discount;
      this.calcCustomizationPrice();
    },

    removeProduct(productKey) {
      this.$delete(this.order.data.products, productKey);
    },

    openProductPicker(evt) {
      this.selectProduct = null;
      this.searchProduct = null;
      this.showPicker = true;
    },

    clearSelection() {
      this.customizedProduct.id = -1;
      this.customizedProduct.name = "";
      this.customizedProduct.image = "";
      this.customizedProduct.options = [];
      this.customizedProduct.discounts = [];
      this.customizedProduct.otherVal = [];
      this.customizedProduct.quantity = 0;
      this.customizedProduct.price = 0;
    },

    clearSelCustomer() {
      this.order.data.customer = null;
      this.order.data.products.forEach(item => {
        item.discount = 0;
        item.finalPrice = item.price;
      });
    },

    onSetProduct(evt) {
      // On "Add" from Dialog
      this.$refs.selProductForm.validate().then(success => {
        if (!success) {
          return;
        }

        if (!this.selectProduct) return;
        this.order.data.products.push({
          product: this.customizedProduct.id,
          name: this.customizedProduct.name,
          image: this.customizedProduct.image,
          price: this.customizedProduct.price,
          quantity: this.customizedProduct.quantity,
          discount: 0,
          // temporary
          finalPrice: this.customizedProduct.price,
          //temporary
          discounts: this.customizedProduct.discounts,
          options: this.customizedProduct.options.map((item, key) => {
            return {
              _option: item.key,
              _selected: item.value.value,
              otherValue: item.value.value == "Other" ? this.customizedProduct.otherVal[key] : null
            };
          })
        }); // Update all prices

        this.finalizePrice(); // Reset Dialog

        this.showPicker = false;
        this.clearSelection();
      });
    },

    onChgQty(val) {
      this.calcCustomizationPrice();
    },

    onSelOption(val) {
      this.calcCustomizationPrice();
    },

    calcCustomizationPrice() {
      const reducer = (total, item) => total + item.value.price;

      this.customizedProduct.price = this.customizedProduct.quantity * this.customizedProduct.options.reduce(reducer, this.selectProduct.basePrice);
    },

    toSelOptions(key, obj) {
      // console.log(this.customizedProduct);
      if (obj) {
        return obj.map(item => {
          return {
            label: item.value + (item.price >= 0 ? `(+${item.price}  PHP)` : `(${item.price} PHP)`),
            value: item,
            key: key
          };
        });
      }

      return obj;
    },

    isOtherSelected(obj) {
      if (obj) {
        return obj.value.value == "Other";
      }

      return false;
    },

    onToggleReplace(val, evt) {
      if (!val) {
        // Revert to original
        this.options = this.customerList.slice();
        this.order.data.customer = this.orderBackup.customer;
        this.order.data.products = this.orderBackup.products.slice();
      } else {
        this.showNotif(true, "CAUTION: Saving changes will place a NEW Order.");
      }
    },

    getOrderDetails() {
      var _this2 = this;

      return asyncToGenerator_default()(function* () {
        try {
          _this2.order.loading = true;
          const resp = yield Order.getOrder(_this2.$route.params.id);
          _this2.order.data = objectSpread2_default()({}, resp);
          _this2.orderBackup.customer = resp.customer; // make copy

          _this2.orderBackup.products = resp.products.slice();
        } catch (err) {
          _this2.showNotif(false, "Could not retrieve order details. ");

          _this2.order.hasError = true;
        } finally {
          _this2.order.loading = false;
        }
      })();
    },

    getAccounts() {
      var _this3 = this;

      return asyncToGenerator_default()(function* () {
        Account.getAccountSelection().then(dat => {
          _this3.customerList = dat.slice();
          _this3.options = dat.slice();
        }).catch(err => {
          _this3.customerList = [];
        });
      })();
    },

    getOrderStatuses() {
      var _this4 = this;

      return asyncToGenerator_default()(function* () {
        Order.getStatusSelection().then(dat => {
          _this4.orderStatuses = dat;
        }).catch(err => {
          _this4.orderStatuses = [];
        });
      })();
    },

    findSimilar() {
      var _this5 = this;

      return asyncToGenerator_default()(function* () {
        _this5.right = !_this5.right; //toggle

        if (_this5.right) {
          // to show
          _this5.findingSimilar = true;
          Order.findSimilarOrders(_this5.$route.params.id, objectSpread2_default()({}, _this5.order.data)).then(dat => {
            _this5.similarOrders = dat.slice();
            _this5.findingSimilar = false;
          }).catch(err => {
            _this5.findingSimilar = false;
          });
        }
      })();
    },

    onSubmit: function () {
      var _ref = asyncToGenerator_default()(function* (evt) {
        this.loading = true;

        try {
          if (this.order.data.products.length < 1) {
            throw "No products selected";
          }

          if (this.confirmEditProduct) {
            // Place new Order and update status of this order to 'Replaced'
            yield Order.replaceOrder(this.$route.params.id, objectSpread2_default()({}, this.order.data));
            this.showNotif(true, "Successfully placed a new order.");
          } else {
            yield Order.updateOrder(this.$route.params.id, objectSpread2_default()({}, this.order.data));
            this.showNotif(true, "Updated Order details.");
          }

          this.returnToPageIndex("/orders");
        } catch (err) {
          this.showNotif(false, "Could not process the order. ");
        } finally {
          this.loading = false;
        }
      });

      return function onSubmit(_x) {
        return _ref.apply(this, arguments);
      };
    }(),

    goTo(link) {
      this.$router.replace(link).catch(err => {});
      this.getOrderDetails();
    }

  }
});
// CONCATENATED MODULE: ./src/pages/orders/Process.vue?vue&type=script&lang=js&
 /* harmony default export */ var orders_Processvue_type_script_lang_js_ = (Processvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/orders/Process.vue?vue&type=style&index=0&id=15914f7e&lang=scss&scoped=true&
var Processvue_type_style_index_0_id_15914f7e_lang_scss_scoped_true_ = __webpack_require__("e2609");

// EXTERNAL MODULE: ./src/pages/orders/Process.vue?vue&type=style&index=1&lang=scss&
var Processvue_type_style_index_1_lang_scss_ = __webpack_require__("ed9a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__("9404");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a81");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 2 modules
var QField = __webpack_require__("8572");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/orders/Process.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_Processvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "15914f7e",
  null
  
)

/* harmony default export */ var Process = __webpack_exports__["default"] = (component.exports);


























runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QDrawer: QDrawer["a" /* default */],QBtn: QBtn["a" /* default */],QSpinner: QSpinner["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QSeparator: QSeparator["a" /* default */],QCardActions: QCardActions["a" /* default */],QIcon: QIcon["a" /* default */],QForm: QForm["a" /* default */],QItem: QItem["a" /* default */],QList: QList["a" /* default */],QSelect: QSelect["a" /* default */],QInput: QInput["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QToggle: QToggle["a" /* default */],QItemSection: QItemSection["a" /* default */],QAvatar: QAvatar["a" /* default */],QBadge: QBadge["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QTooltip: QTooltip["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */],QField: QField["a" /* default */]});runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});


/***/ }),

/***/ "c106":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d15b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e2609":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_15914f7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c106");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_15914f7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_15914f7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_15914f7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ed9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1cd3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f204":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPicker_vue_vue_type_style_index_0_id_91e94df2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d15b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPicker_vue_vue_type_style_index_0_id_91e94df2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPicker_vue_vue_type_style_index_0_id_91e94df2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPicker_vue_vue_type_style_index_0_id_91e94df2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=5.8b01aec7.js.map