(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Component/html2canvas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ \"./node_modules/html2canvas/dist/npm/index.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    data: function data() {\n        return {\n            imgURL: \"https://goss.veer.com/creative/vcg/veer/800water/veer-305609193.jpg\" + \"?v=\" + +new Date(), //保证每次都会从服务器请求图片，而不是从浏览器缓存中获取。\n            dataURL: \"https://goss.veer.com/creative/vcg/veer/800water/veer-305609193.jpg\"\n        };\n    },\n    created: function created() {\n        this.setBase64();\n    },\n\n    methods: {\n        setBase64: function setBase64() {\n            var _this = this;\n\n            // 首先将图片绘制到canvas上，然后将canvas转成base64，并设置为img标签的src。\n            var img = new Image(); //必须手动创建img标签。\n            img.src = this.imgURL;\n            img.setAttribute('crossOrigin', 'anonymous'); //必须设置，不然生成的图片的base64是空的。\n            img.onload = function () {\n                var canvas = document.createElement(\"canvas\");\n                canvas.width = 150; //需要设置 不然canvas默认的大小为300*150\n                canvas.height = 150;\n                var ctx = canvas.getContext(\"2d\");\n                ctx.drawImage(img, 0, 0, 150, 150);\n                var dataURL = canvas.toDataURL(\"image/png\");\n                _this.dataURL = dataURL;\n            };\n        },\n        download: function download() {\n            html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelector(\".source\"), {\n                scale: 2,\n                logging: false\n            }).then(function (canvas) {\n                var dataURL = canvas.toDataURL();\n                var link = document.createElement(\"a\");\n                link.style.display = \"none\";\n                link.href = dataURL;\n                link.download = '图片';\n                document.body.appendChild(link);\n                link.click();\n                document.body.removeChild(link);\n            });\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.html2canvas .source[data-v-219a4179] {\\n  width: 200px;\\n  height: 200px;\\n  background-color: aquamarine;\\n  text-align: center;\\n}\\n.html2canvas .source .avatar[data-v-219a4179] {\\n    width: 50px;\\n    height: 50px;\\n    border-radius: 50%;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=template&id=219a4179&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Component/html2canvas.vue?vue&type=template&id=219a4179&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"html2canvas\" },\n    [\n      _c(\"h4\", [_vm._v(\"将指定的DOM转换成图片\")]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"source\" }, [\n        _c(\"p\", [\n          _vm._v(\"文字内容文字内容文字内容文字内容文字内容文字内容文字内容\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"img\", { staticClass: \"avatar\", attrs: { src: _vm.dataURL } }),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容\"\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\n        \"el-button\",\n        { attrs: { type: \"primary\" }, on: { click: _vm.download } },\n        [_vm._v(\"下载图片\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"p\", [_vm._v(\"#注意：如果DOM中含有图片，那么图片需要允许跨域。\")])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/pages/Component/html2canvas.vue":
/*!*********************************************!*\
  !*** ./src/pages/Component/html2canvas.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html2canvas_vue_vue_type_template_id_219a4179_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html2canvas.vue?vue&type=template&id=219a4179&scoped=true& */ \"./src/pages/Component/html2canvas.vue?vue&type=template&id=219a4179&scoped=true&\");\n/* harmony import */ var _html2canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html2canvas.vue?vue&type=script&lang=js& */ \"./src/pages/Component/html2canvas.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _html2canvas_vue_vue_type_style_index_0_id_219a4179_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true& */ \"./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _html2canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _html2canvas_vue_vue_type_template_id_219a4179_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _html2canvas_vue_vue_type_template_id_219a4179_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"219a4179\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\pages\\\\Component\\\\html2canvas.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?");

/***/ }),

/***/ "./src/pages/Component/html2canvas.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/pages/Component/html2canvas.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./html2canvas.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?");

/***/ }),

/***/ "./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_style_index_0_id_219a4179_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=style&index=0&id=219a4179&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_style_index_0_id_219a4179_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_style_index_0_id_219a4179_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_style_index_0_id_219a4179_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_style_index_0_id_219a4179_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_style_index_0_id_219a4179_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?");

/***/ }),

/***/ "./src/pages/Component/html2canvas.vue?vue&type=template&id=219a4179&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/pages/Component/html2canvas.vue?vue&type=template&id=219a4179&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_template_id_219a4179_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./html2canvas.vue?vue&type=template&id=219a4179&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Component/html2canvas.vue?vue&type=template&id=219a4179&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_template_id_219a4179_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_html2canvas_vue_vue_type_template_id_219a4179_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/Component/html2canvas.vue?");

/***/ })

}]);