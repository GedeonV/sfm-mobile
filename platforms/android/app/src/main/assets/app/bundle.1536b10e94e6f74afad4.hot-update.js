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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EventModal",
  props: ["songs"],

  data() {
    return {
      error: "",
      user_profile: {},
      isGood: true
    };
  },

  methods: {
    closeModal() {
      this.$modal.close();
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
      _c("ListPicker", {
        attrs: { items: _vm.$props.songs, selectedIndex: _vm.selectedItem },
        on: {
          selectedIndexChange: function($event) {
            _vm.selectedItem = $event.value
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdmVudE1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V2ZW50TW9kYWwudnVlPzdjOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsa0JBRkE7O0FBR0E7QUFDQTtBQUNBLGVBREE7QUFFQSxzQkFGQTtBQUdBO0FBSEE7QUFLQSxHQVRBOztBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBVkE7QUFlQSxjQWZBOztBQWlCQTtBQUNBO0FBQ0E7O0FBbkJBLEc7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLGVBQWUsRUFBRTtBQUMvQjtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUEyRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuMTUzNmIxMGU5NGU2Zjc0YWZhZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSB3aWR0aD1cIjUwMFwiPlxyXG4gICAgPExpc3RQaWNrZXIgOml0ZW1zPVwiJHByb3BzLnNvbmdzXCIgdi1tb2RlbD1cInNlbGVjdGVkSXRlbVwiIC8+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJFdmVudE1vZGFsXCIsXHJcbiAgcHJvcHM6IFtcInNvbmdzXCJdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJcIixcclxuICAgICAgdXNlcl9wcm9maWxlOiB7fSxcclxuICAgICAgaXNHb29kOiB0cnVlXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgdGhpcy4kbW9kYWwuY2xvc2UoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7fSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc29uZ3MpO1xyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9wdXJwbGVcIjtcclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcbi8vIEN1c3RvbSBzdHlsZXNcclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjUwMFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLiRwcm9wcy5zb25ncywgc2VsZWN0ZWRJbmRleDogX3ZtLnNlbGVjdGVkSXRlbSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnNlbGVjdGVkSXRlbSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=