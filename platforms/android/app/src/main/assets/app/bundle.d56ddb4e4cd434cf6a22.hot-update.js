webpackHotUpdate("bundle",{

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./store/index.js");
/* harmony import */ var _nativescript_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/theme/index.js");
/* harmony import */ var _nativescript_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nativescript_theme__WEBPACK_IMPORTED_MODULE_4__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement("BarcodeScanner", () => __webpack_require__("../node_modules/nativescript-barcodescanner/barcodescanner.js").BarcodeScannerView);




_nativescript_theme__WEBPACK_IMPORTED_MODULE_4___default.a.setMode(_nativescript_theme__WEBPACK_IMPORTED_MODULE_4___default.a.Dark);
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"],
  render: h => h("frame", [h(_components_Login__WEBPACK_IMPORTED_MODULE_2__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsiVnVleCIsIlZ1ZSIsInVzZSIsInJlZ2lzdGVyRWxlbWVudCIsInJlcXVpcmUiLCJMb2dpbiIsInN0b3JlIiwiVGhlbWUiLCJzZXRNb2RlIiwiRGFyayIsInZ1ZVN0b3JlIiwicmVuZGVyIiwiaCIsIiRzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsT0FBT0EsSUFBUCxNQUFpQixNQUFqQjtBQUNBQyxHQUFHLENBQUNDLEdBQUosQ0FBUUYsSUFBUjtBQUVBQyxHQUFHLENBQUNFLDJCQUFKLENBQ0ksc0RBQ01DLEVBRlY7QUFLQSxtQkFBT0MsMERBQVA7QUFDQSxPQUFPQyxFQUFQO0FBQ0E7QUFDQSxPQUFPQyxDQUFQO0FBRUFBLEtBQUssQ0FBQ0MseUJBQWEsQ0FBQ0MsMEVBQXBCO0FBRUEsSUFBSVIsR0FBSixDQUFRO0FBQ0pLLE9BQUssRUFBRUksR0FESDtBQUVKQyxRQUFNLEVBQUVDLENBQUMsS0FBTSxFQUFEO0FBRlYsQ0FBUixFQUdHQyxNQUhIIiwiZmlsZSI6ImJ1bmRsZS5kNTZkZGI0ZTRjZDQzNGNmNmEyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IFZ1ZXggZnJvbSBcInZ1ZXhcIjtcblZ1ZS51c2UoVnVleCk7XG5cblZ1ZS5yZWdpc3RlckVsZW1lbnQoXG4gICAgXCJCYXJjb2RlU2Nhbm5lclwiLFxuICAgICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIikuQmFyY29kZVNjYW5uZXJWaWV3XG4pO1xuXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlL2luZGV4XCI7XG5pbXBvcnQgdnVlU3RvcmUgZnJvbSBcIi4vc3RvcmUvaW5kZXhcIjtcbmltcG9ydCBUaGVtZSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC90aGVtZVwiO1xuXG5UaGVtZS5zZXRNb2RlKFRoZW1lLkRhcmspO1xuXG5uZXcgVnVlKHtcbiAgICBzdG9yZTogdnVlU3RvcmUsXG4gICAgcmVuZGVyOiBoID0+IGgoXCJmcmFtZVwiLCBbaChMb2dpbildKVxufSkuJHN0YXJ0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9