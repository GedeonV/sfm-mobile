webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Panel.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Event.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Profile.vue");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-camera/camera.js");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const BarcodeScanner = __webpack_require__("../node_modules/nativescript-barcodescanner/barcodescanner.js").BarcodeScanner;

var barcodescanner = new BarcodeScanner();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Panel",
  components: {},

  data() {
    return {
      events: null,
      user_profile: "",
      dateFR: "",
      displayDialog: false,
      scanText: ""
    };
  },

  methods: {
    scanQrCode() {
      nativescript_camera__WEBPACK_IMPORTED_MODULE_5__["requestCameraPermissions"]().then(() => {
        barcodescanner.scan({
          formats: "QR_CODE",
          cancelLabel: "Close",
          cancelLabelBackgroundColor: "#FFFFFF",
          message: "Use the volume buttons for extra light",
          showFlipCameraButton: false,
          preferFrontCamera: false,
          showTorchButton: true,
          beepOnScan: true,
          torchOn: false,
          continuousScanCallback: result => {
            console.log(result.text);
            this.scanText = result.text;
            this.goToEvent(this.scanText);
            barcodescanner.stop();
          },
          closeCallback: () => {
            console.log("Scanner closed");
          },
          resultDisplayDuration: 500,
          orientation: "portrait",
          openSettingsIfPermissionWasPreviouslyDenied: true
        });
      }).catch(e => {
        console.log("Error requesting permission");
      });
    },

    goToHome() {
      this.$store.commit("logout");
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_2__["default"]);
    },

    goToEvent(e) {
      console.log(typeof e);

      if (typeof e == "string") {
        console.log("C'est une chaine");
        this.$navigateTo(_Event__WEBPACK_IMPORTED_MODULE_1__["default"], {
          transition: {
            name: "fade",
            duration: 200
          },
          props: {
            _id: e
          }
        }).catch(err => console.log(err));
      } else {
        console.log(e.item._id);
        this.$navigateTo(_Event__WEBPACK_IMPORTED_MODULE_1__["default"], {
          transition: {
            name: "fade",
            duration: 200
          },
          props: {
            _id: e.item._id
          }
        });
      }
    },

    getDate(e) {
      let d = new Date(e.slice(0, 10));
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      let dateFR = d.toLocaleDateString("fr-FR", options);
      this.dateFR = dateFR;
      return this.dateFR;
    },

    loadEvent() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://sfm-project.herokuapp.com/parties/", {
        headers: {
          Authorization: "Bearer " + this.$store.state.user_token
        }
      }).then(response => {
        console.log(response.data.events);
        this.events = response.data.events;
      }).catch(err => {
        console.log(err);
      });
    },

    deleteUserProfile() {
      tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["confirm"]({
        title: "Informations",
        message: "êtes-vous sur de vouloir supprimer votre compte ?",
        okButtonText: "Oui",
        cancelButtonText: "Non",
        neutralButtonText: "Annuler"
      }).then(result => {
        if (result) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("https://sfm-project.herokuapp.com/users/" + this.$store.state.user.email, {
            headers: {
              Authorization: "Bearer " + this.$store.state.user_token
            }
          }).then(response => {
            console.log(response.data);
            this.goToHome();
          }).catch(err => {
            console.log(err);
          });
        }

        console.log("Dialog result: " + result);
      });
    },

    loadProfile() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://sfm-project.herokuapp.com/users/user/" + this.$store.state.user.user_id, {
        headers: {
          Authorization: "Bearer " + this.$store.state.user_token
        }
      }).then(response => {
        console.log(response.data.user);
        this.user_profile = response.data.user;
      }).catch(err => {
        console.log(err);
      });
    },

    openModal() {
      this.$showModal(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"]).then(res => {
        this.loadProfile();
        console.log(res);

        if (res == true) {
          tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]({
            title: "Informations",
            message: "Votre compte a bien été modifié",
            okButtonText: "Ok"
          });
        }
      });
    },

    loaded() {
      setInterval(() => {
        this.loadEvent();
      }, 10000);
      this.loadProfile();
    }

  },

  mounted() {}

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QYW5lbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFFQTtBQUNBLGVBREE7QUFFQSxnQkFGQTs7QUFHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxzQkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQTtBQUxBO0FBT0EsR0FYQTs7QUFZQTtBQUNBO0FBQ0EscUZBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDhCQUZBO0FBR0EsK0NBSEE7QUFJQSwyREFKQTtBQUtBLHFDQUxBO0FBTUEsa0NBTkE7QUFPQSwrQkFQQTtBQVFBLDBCQVJBO0FBU0Esd0JBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FmQTtBQWdCQTtBQUNBO0FBQ0EsV0FsQkE7QUFtQkEsb0NBbkJBO0FBb0JBLGlDQXBCQTtBQXFCQTtBQXJCQTtBQXVCQSxPQXpCQSxFQTBCQSxLQTFCQSxDQTBCQTtBQUNBO0FBQ0EsT0E1QkE7QUE2QkEsS0EvQkE7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBLEtBcENBOztBQXFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUZBLFdBREE7QUFLQTtBQUNBO0FBREE7QUFMQSxXQVFBLEtBUkEsQ0FRQSx1QkFSQTtBQVNBLE9BWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFGQSxXQURBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUNBLEtBOURBOztBQStEQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0EscUJBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsS0ExRUE7O0FBMkVBO0FBQ0EsbURBQ0EsR0FEQSxDQUNBLDRDQURBLEVBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQSxPQURBLEVBTUEsSUFOQSxDQU1BO0FBQ0E7QUFDQTtBQUNBLE9BVEEsRUFVQSxLQVZBLENBVUE7QUFDQTtBQUNBLE9BWkE7QUFhQSxLQXpGQTs7QUEyRkE7QUFDQSwwRUFDQTtBQUNBLDZCQURBO0FBRUEsb0VBRkE7QUFHQSwyQkFIQTtBQUlBLCtCQUpBO0FBS0E7QUFMQSxPQURBLEVBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSx1REFDQSxNQURBLENBRUEsNkNBQ0EsNEJBSEEsRUFJQTtBQUNBO0FBQ0E7QUFEQTtBQURBLFdBSkEsRUFVQSxJQVZBLENBVUE7QUFDQTtBQUNBO0FBQ0EsV0FiQSxFQWNBLEtBZEEsQ0FjQTtBQUNBO0FBQ0EsV0FoQkE7QUFpQkE7O0FBQ0E7QUFDQSxPQTdCQTtBQThCQSxLQTFIQTs7QUE0SEE7QUFDQSxtREFDQSxHQURBLENBRUEsa0RBQ0EsOEJBSEEsRUFJQTtBQUNBO0FBQ0E7QUFEQTtBQURBLE9BSkEsRUFVQSxJQVZBLENBVUE7QUFDQTtBQUNBO0FBQ0EsT0FiQSxFQWNBLEtBZEEsQ0FjQTtBQUNBO0FBQ0EsT0FoQkE7QUFpQkEsS0E5SUE7O0FBZ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLHNEQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsT0FWQTtBQVdBLEtBNUpBOztBQTZKQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsS0FGQTtBQUlBO0FBQ0E7O0FBbktBLEdBWkE7O0FBaUxBOztBQWpMQSxHIiwiZmlsZSI6ImJ1bmRsZS43M2UxZTkwNTQ1MWQwOGQ0ZWQzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlIEBsb2FkZWQ9XCJsb2FkZWRcIj5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJQYW5lbFwiIGNsYXNzPVwibWVudVwiIGZvbnRTaXplPVwiMjRcIj5cclxuICAgICAgPEFjdGlvbkl0ZW1cclxuICAgICAgICBAdGFwPVwiZ29Ub0hvbWVcIlxyXG4gICAgICAgIGljb24uZGVjb2RlPVwiZm9udDovLyYjeGYwMTE7XCJcclxuICAgICAgICBjbGFzcz1cImZhc1wiXHJcbiAgICAgICAgYW5kcm9pZC5wb3NpdGlvbj1cImFjdGlvbkJhclwiXHJcbiAgICAgID48L0FjdGlvbkl0ZW0+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuICAgIDxCb3R0b21OYXZpZ2F0aW9uPlxyXG4gICAgICA8VGFiU3RyaXA+XHJcbiAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQWNjdWVpbFwiIC8+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMDE1O1wiIGNsYXNzPVwiZmFzXCIgLz5cclxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cclxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJFdmVuZW1lbnRzXCIgLz5cclxuICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYwNzM7XCIgY2xhc3M9XCJmYXNcIiAvPlxyXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIlByb2ZpbFwiIC8+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMmJkO1wiIGNsYXNzPVwiZmFzXCIgLz5cclxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cclxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJRUkNvZGVcIiAvPlxyXG4gICAgICAgICAgPEltYWdlIHNyYy5kZWNvZGU9XCJmb250Oi8vJiN4ZjAyOTtcIiBjbGFzcz1cImZhc1wiIC8+XHJcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgIDwvVGFiU3RyaXA+XHJcblxyXG4gICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQ+XHJcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFjY3VlaWxcIiAvPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgPFRhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgIDxMaXN0VmlldyBAaXRlbVRhcD1cImdvVG9FdmVudFwiIGNsYXNzPVwibGlzdC1ncm91cFwiIGZvcj1cIml0ZW0gaW4gZXZlbnRzXCI+XHJcbiAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjE1MCwgMTUwLCAqXCI+XHJcbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5ldmVudF9uYW1lXCIgY29sPVwiMFwiIC8+XHJcbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZ2V0RGF0ZShpdGVtLmRhdGUpXCIgY29sPVwiMVwiIC8+XHJcbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS50aGVtZVwiIGNvbD1cIjJcIiAvPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgPFRhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VyX3Byb2ZpbGUuZmlyc3RfbmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInVzZXJfcHJvZmlsZS5sYXN0X25hbWVcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VyX3Byb2ZpbGUuZW1haWxcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VyX3Byb2ZpbGUubW9iaWxlXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtc21cIlxyXG4gICAgICAgICAgICAgIHRleHQ9XCJNb2RpZmllclwiXHJcbiAgICAgICAgICAgICAgQHRhcD1cIm9wZW5Nb2RhbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgICAgICB0ZXh0PVwiU3VwcHJpbWVyIHZvdHJlIHByb2ZpbFwiXHJcbiAgICAgICAgICAgICAgQHRhcD1cImRlbGV0ZVVzZXJQcm9maWxlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxyXG4gICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgICAgICB0ZXh0PVwiU2Nhbm5lclwiXHJcbiAgICAgICAgICAgICAgQHRhcD1cInNjYW5RckNvZGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XHJcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5jb25zdCBCYXJjb2RlU2Nhbm5lciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIikuQmFyY29kZVNjYW5uZXI7XHJcbnZhciBiYXJjb2Rlc2Nhbm5lciA9IG5ldyBCYXJjb2RlU2Nhbm5lcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiUGFuZWxcIixcclxuICBjb21wb25lbnRzOiB7fSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXZlbnRzOiBudWxsLFxyXG4gICAgICB1c2VyX3Byb2ZpbGU6IFwiXCIsXHJcbiAgICAgIGRhdGVGUjogXCJcIixcclxuICAgICAgZGlzcGxheURpYWxvZzogZmFsc2UsXHJcbiAgICAgIHNjYW5UZXh0OiBcIlwiXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2NhblFyQ29kZSgpIHtcclxuICAgICAgQ2FtZXJhLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9ucygpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgYmFyY29kZXNjYW5uZXIuc2Nhbih7XHJcbiAgICAgICAgICAgIGZvcm1hdHM6IFwiUVJfQ09ERVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogXCJDbG9zZVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbEJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXNlIHRoZSB2b2x1bWUgYnV0dG9ucyBmb3IgZXh0cmEgbGlnaHRcIixcclxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcclxuICAgICAgICAgICAgdG9yY2hPbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNTY2FuQ2FsbGJhY2s6IHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2NhblRleHQgPSByZXN1bHQudGV4dDtcclxuICAgICAgICAgICAgICB0aGlzLmdvVG9FdmVudCh0aGlzLnNjYW5UZXh0KTtcclxuICAgICAgICAgICAgICBiYXJjb2Rlc2Nhbm5lci5zdG9wKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW5uZXIgY2xvc2VkXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgICAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHJlcXVlc3RpbmcgcGVybWlzc2lvblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZ29Ub0hvbWUoKSB7XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImxvZ291dFwiKTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbik7XHJcbiAgICB9LFxyXG4gICAgZ29Ub0V2ZW50KGUpIHtcclxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGUpO1xyXG4gICAgICBpZiAodHlwZW9mIGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQydlc3QgdW5lIGNoYWluZVwiKTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEV2ZW50LCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgX2lkOiBlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuaXRlbS5faWQpO1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRXZlbnQsIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBfaWQ6IGUuaXRlbS5faWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldERhdGUoZSkge1xyXG4gICAgICBsZXQgZCA9IG5ldyBEYXRlKGUuc2xpY2UoMCwgMTApKTtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgZGF0ZUZSID0gZC50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiLCBvcHRpb25zKTtcclxuICAgICAgdGhpcy5kYXRlRlIgPSBkYXRlRlI7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVGUjtcclxuICAgIH0sXHJcbiAgICBsb2FkRXZlbnQoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wYXJ0aWVzL1wiLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdGhpcy4kc3RvcmUuc3RhdGUudXNlcl90b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5ldmVudHMpO1xyXG4gICAgICAgICAgdGhpcy5ldmVudHMgPSByZXNwb25zZS5kYXRhLmV2ZW50cztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlVXNlclByb2ZpbGUoKSB7XHJcbiAgICAgIGRpYWxvZ3NcclxuICAgICAgICAuY29uZmlybSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJJbmZvcm1hdGlvbnNcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiw6p0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgdm90cmUgY29tcHRlID9cIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPdWlcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9uXCIsXHJcbiAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJBbm51bGVyXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgLmRlbGV0ZShcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9zZm0tcHJvamVjdC5oZXJva3VhcHAuY29tL3VzZXJzL1wiICtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdGhpcy4kc3RvcmUuc3RhdGUudXNlcl90b2tlblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvSG9tZSgpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRQcm9maWxlKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS91c2Vycy91c2VyL1wiICtcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyX2lkLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS51c2VyKTtcclxuICAgICAgICAgIHRoaXMudXNlcl9wcm9maWxlID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIHRoaXMuJHNob3dNb2RhbChQcm9maWxlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZmlsZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgaWYgKHJlcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiSW5mb3JtYXRpb25zXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVm90cmUgY29tcHRlIGEgYmllbiDDqXTDqSBtb2RpZmnDqVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsb2FkZWQoKSB7XHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gICAgICB9LCAxMDAwMCk7XHJcblxyXG4gICAgICB0aGlzLmxvYWRQcm9maWxlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge31cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9wdXJwbGVcIjtcclxuXHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmb250LXNpemU6IDE4O1xyXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjYThhOGE4O1xyXG59XHJcblxyXG5Cb3R0b21OYXZpZ2F0aW9uIFRhYlN0cmlwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3YmM0O1xyXG59XHJcblxyXG5UYWJTdHJpcCBUYWJTdHJpcEl0ZW0ge1xyXG4gIGNvbG9yOiAjYzFjMWMxO1xyXG59XHJcblxyXG5UYWJTdHJpcEl0ZW0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTI7XHJcbn1cclxuXHJcblRhYlN0cmlwSXRlbSBpbWFnZSB7XHJcbiAgZm9udC1zaXplOiAzNjtcclxufVxyXG5cclxuVGFiU3RyaXAgVGFiU3RyaXBJdGVtOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblRhYlN0cmlwIFRhYlN0cmlwSXRlbTphY3RpdmUgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5BY3Rpb25CYXIubWVudSBBY3Rpb25JdGVtIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDY7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==