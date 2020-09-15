webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/EventModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
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
  name: "EventModal",
  props: ["songs"],

  data() {
    return {
      selectedItem: ""
    };
  },

  methods: {
    closeModal() {
      this.$modal.close(this.selectedItem);
    }

  },
  computed: {},

  mounted() {
    console.log(this.songs);
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/EventModal.vue?vue&type=template&id=c1c68b64&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { width: "500" } },
    [
      _c(
        "StackLayout",
        [
          _vm._v('" />\n    '),
          _c("Button", {
            staticClass: "-primary -rounded-sm",
            attrs: { text: "Confirmer" },
            on: { tap: _vm.closeModal }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdmVudE1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V2ZW50TW9kYWwudnVlPzdjOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxrQkFGQTs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FSQTtBQWFBLGNBYkE7O0FBZUE7QUFDQTtBQUNBOztBQWpCQSxHOzs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxlQUFlLEVBQUU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5kOWEwOGE3NWUwYjY3M2Y0MDVmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlIHdpZHRoPVwiNTAwXCI+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cIiRwcm9wcy5zb25nc1wiIHRleHRGaWVsZD1cInRpdGxlXCIgdmFsdWVGaWVsZD1cIl9pZFwiXHJcbiAgICAgIHNlbGVjdGVkVmFsdWU9XCJ7eyBzZWxlY3RlZEl0ZW0gfX1cclxuICAgICAgdi1tb2RlbD1cInNlbGVjdGVkSXRlbVwiIC8+XHJcbiAgICAgIDxCdXR0b24gY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1zbVwiIHRleHQ9XCJDb25maXJtZXJcIiBAdGFwPVwiY2xvc2VNb2RhbFwiIC8+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRXZlbnRNb2RhbFwiLFxyXG4gIHByb3BzOiBbXCJzb25nc1wiXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBcIlwiXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgdGhpcy4kbW9kYWwuY2xvc2UodGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHt9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zb25ncyk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL3B1cnBsZVwiO1xyXG4ucGFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmb250LXNpemU6IDE4O1xyXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuLy8gQ3VzdG9tIHN0eWxlc1xyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgd2lkdGg6IFwiNTAwXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoJ1wiIC8+XFxuICAgICcpLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNvbmZpcm1lclwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jbG9zZU1vZGFsIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9