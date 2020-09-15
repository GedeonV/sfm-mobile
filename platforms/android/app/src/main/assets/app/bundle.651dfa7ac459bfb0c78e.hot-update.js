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
          _c("ListPicker", {
            attrs: {
              items: _vm.$props.songs,
              textField: "title",
              valueField: "_id",
              selectedValue: "selectedItem",
              selectedIndex: _vm.selectedItem
            },
            on: {
              selectedIndexChange: function($event) {
                _vm.selectedItem = $event.value
              }
            }
          }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdmVudE1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V2ZW50TW9kYWwudnVlPzdjOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGtCQUZBOztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHQVJBO0FBYUEsY0FiQTs7QUFlQTtBQUNBO0FBQ0E7O0FBakJBLEc7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxlQUFlLEVBQUU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42NTFkZmE3YWM0NTliZmIwYzc4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlIHdpZHRoPVwiNTAwXCI+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMaXN0UGlja2VyXHJcbiAgICAgICAgOml0ZW1zPVwiJHByb3BzLnNvbmdzXCJcclxuICAgICAgICB0ZXh0RmllbGQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgdmFsdWVGaWVsZD1cIl9pZFwiXHJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZT1cInNlbGVjdGVkSXRlbVwiXHJcbiAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkSXRlbVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1zbVwiIHRleHQ9XCJDb25maXJtZXJcIiBAdGFwPVwiY2xvc2VNb2RhbFwiIC8+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRXZlbnRNb2RhbFwiLFxyXG4gIHByb3BzOiBbXCJzb25nc1wiXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBcIlwiXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgdGhpcy4kbW9kYWwuY2xvc2UodGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHt9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zb25ncyk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL3B1cnBsZVwiO1xyXG4ucGFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmb250LXNpemU6IDE4O1xyXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuLy8gQ3VzdG9tIHN0eWxlc1xyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgd2lkdGg6IFwiNTAwXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaXRlbXM6IF92bS4kcHJvcHMuc29uZ3MsXG4gICAgICAgICAgICAgIHRleHRGaWVsZDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICB2YWx1ZUZpZWxkOiBcIl9pZFwiLFxuICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBcInNlbGVjdGVkSXRlbVwiLFxuICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBfdm0uc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkSXRlbSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiLXByaW1hcnkgLXJvdW5kZWQtc21cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ29uZmlybWVyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNsb3NlTW9kYWwgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=