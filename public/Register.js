(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Register"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/users/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/users/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Register",
  components: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/users/Register.vue?vue&type=template&id=1488d144&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/users/Register.vue?vue&type=template&id=1488d144& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container", attrs: { id: "register" } }, [
      _c(
        "div",
        {
          staticClass: "card card-info mx-auto form-shadow",
          attrs: { id: "register" }
        },
        [
          _c("div", { staticClass: "card-header text-center form-header" }, [
            _c("div", { staticClass: "card-title card-title-ex" }, [
              _c("h3", [_vm._v("Register")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body form-body" }, [
            _c("form", { staticClass: "boder-form", attrs: { action: "" } }, [
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("div", { staticClass: "input-group-prepend" }, [
                  _c(
                    "span",
                    {
                      staticClass: "input-group-text theme-input-group",
                      attrs: { id: "username" }
                    },
                    [_c("i", { staticClass: "fas fa-user" })]
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "User name",
                    "aria-describedby": "username"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("div", { staticClass: "input-group-prepend" }, [
                  _c(
                    "span",
                    {
                      staticClass: "input-group-text theme-input-group",
                      attrs: { id: "fullname" }
                    },
                    [_c("i", { staticClass: "fas fa-user-secret" })]
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Full name",
                    "aria-describedby": "fullname"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("div", { staticClass: "input-group-prepend" }, [
                  _c(
                    "span",
                    {
                      staticClass: "input-group-text theme-input-group",
                      attrs: { id: "email" }
                    },
                    [_c("i", { staticClass: "far fa-envelope" })]
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    placeholder: "Email",
                    "aria-describedby": "email"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("div", { staticClass: "input-group-prepend" }, [
                  _c(
                    "span",
                    {
                      staticClass: "input-group-text theme-input-group",
                      attrs: { id: "password" }
                    },
                    [_c("i", { staticClass: "fas fa-unlock-alt" })]
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    placeholder: "Password",
                    "aria-describedby": "password"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("div", { staticClass: "input-group-prepend" }, [
                  _c(
                    "span",
                    {
                      staticClass: "input-group-text theme-input-group",
                      attrs: { id: "passwordConfirm" }
                    },
                    [_c("i", { staticClass: "fas fa-unlock" })]
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    placeholder: "Password Confirm",
                    "aria-describedby": "passwordConfirm"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group btn-space" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn col-md-5 hbtn hb-fill-right",
                    attrs: { type: "submit", name: "Login" }
                  },
                  [_vm._v("Registration")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-light col-md-5 float-right hbtnCancel hbCancel-fill-right",
                    attrs: { type: "reset", name: "Cancel" }
                  },
                  [_vm._v("Reset")]
                )
              ])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/users/Register.vue":
/*!*************************************************************!*\
  !*** ./resources/js/frontend/components/users/Register.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_1488d144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1488d144& */ "./resources/js/frontend/components/users/Register.vue?vue&type=template&id=1488d144&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/users/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_1488d144___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_1488d144___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/users/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/users/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/frontend/components/users/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/users/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/users/Register.vue?vue&type=template&id=1488d144&":
/*!********************************************************************************************!*\
  !*** ./resources/js/frontend/components/users/Register.vue?vue&type=template&id=1488d144& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1488d144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=1488d144& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/users/Register.vue?vue&type=template&id=1488d144&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1488d144___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1488d144___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);