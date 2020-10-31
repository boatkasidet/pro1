exports.ids = [2];
exports.modules = {

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home.vue?vue&type=template&id=e9db5938&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt-link',{attrs:{"to":"order"}},[_c('v-btn',[_vm._v("Order")])],1),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":"stock"}},[_c('v-btn',[_vm._v("Stock")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home.vue?vue&type=template&id=e9db5938&

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(52);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var homevue_type_script_lang_js_ = ({
  beforeCreate() {
    external_firebase_default.a.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.replace('/login');
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/home.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(26);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(48);

// CONCATENATED MODULE: ./pages/home.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8147e6dc"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=home.js.map