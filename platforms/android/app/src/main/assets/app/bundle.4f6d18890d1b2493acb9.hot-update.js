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
      _c(
        "ListView",
        {
          staticClass: "list-group",
          attrs: { items: _vm.$props.songs, "+alias": "item" },
          on: { itemTap: _vm.closeModal }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var item = ref.item
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "GridLayout",
                    { attrs: { columns: "150, 150, *" } },
                    [
                      _c("Label", { attrs: { text: item.title, col: "0" } }),
                      _c("Label", { attrs: { text: item.artist, col: "2" } })
                    ],
                    1
                  )
                }
              }
            ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdmVudE1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V2ZW50TW9kYWwudnVlPzdjOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBLG9CQURBO0FBRUEsa0JBRkE7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVBBOztBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBUkE7QUFhQSxjQWJBOztBQWVBO0FBQ0E7QUFDQTs7QUFqQkEsRzs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLGVBQWUsRUFBRTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRDQUE0QztBQUM5RCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLHlCQUF5QixFQUFFO0FBQ3pEO0FBQ0EsbUNBQW1DLFNBQVMsNkJBQTZCLEVBQUU7QUFDM0UsbUNBQW1DLFNBQVMsOEJBQThCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuNGY2ZDE4ODkwZDFiMjQ5M2FjYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSB3aWR0aD1cIjUwMFwiPlxyXG4gICAgPExpc3RWaWV3XHJcbiAgICAgIEBpdGVtVGFwPVwiY2xvc2VNb2RhbFwiXHJcbiAgICAgIGNsYXNzPVwibGlzdC1ncm91cFwiXHJcbiAgICAgIGZvcj1cIml0ZW0gaW4gJHByb3BzLnNvbmdzXCJcclxuICAgID5cclxuICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjE1MCwgMTUwLCAqXCI+XHJcbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLnRpdGxlXCIgY29sPVwiMFwiIC8+XHJcbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLmFydGlzdFwiIGNvbD1cIjJcIiAvPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgPC9MaXN0Vmlldz5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkV2ZW50TW9kYWxcIixcclxuICBwcm9wczogW1wic29uZ3NcIl0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGVkSXRlbTogXCJcIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgIHRoaXMuJG1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge30sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNvbmdzKTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvcHVycGxlXCI7XHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNjtcclxufVxyXG4vLyBDdXN0b20gc3R5bGVzXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyB3aWR0aDogXCI1MDBcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIixcbiAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLiRwcm9wcy5zb25ncywgXCIrYWxpYXNcIjogXCJpdGVtXCIgfSxcbiAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0uY2xvc2VNb2RhbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIxNTAsIDE1MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBpdGVtLnRpdGxlLCBjb2w6IFwiMFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IGl0ZW0uYXJ0aXN0LCBjb2w6IFwiMlwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9