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
      this.loadEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QYW5lbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFFQTtBQUNBLGVBREE7QUFFQSxnQkFGQTs7QUFHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxzQkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQTtBQUxBO0FBT0EsR0FYQTs7QUFZQTtBQUNBO0FBQ0EscUZBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDhCQUZBO0FBR0EsK0NBSEE7QUFJQSwyREFKQTtBQUtBLHFDQUxBO0FBTUEsa0NBTkE7QUFPQSwrQkFQQTtBQVFBLDBCQVJBO0FBU0Esd0JBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FmQTtBQWdCQTtBQUNBO0FBQ0EsV0FsQkE7QUFtQkEsb0NBbkJBO0FBb0JBLGlDQXBCQTtBQXFCQTtBQXJCQTtBQXVCQSxPQXpCQSxFQTBCQSxLQTFCQSxDQTBCQTtBQUNBO0FBQ0EsT0E1QkE7QUE2QkEsS0EvQkE7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBLEtBcENBOztBQXFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUZBLFdBREE7QUFLQTtBQUNBO0FBREE7QUFMQSxXQVFBLEtBUkEsQ0FRQSx1QkFSQTtBQVNBLE9BWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFGQSxXQURBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUNBLEtBOURBOztBQStEQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0EscUJBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsS0ExRUE7O0FBMkVBO0FBQ0EsbURBQ0EsR0FEQSxDQUNBLDRDQURBLEVBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQSxPQURBLEVBTUEsSUFOQSxDQU1BO0FBQ0E7QUFDQTtBQUNBLE9BVEEsRUFVQSxLQVZBLENBVUE7QUFDQTtBQUNBLE9BWkE7QUFhQSxLQXpGQTs7QUEyRkE7QUFDQSwwRUFDQTtBQUNBLDZCQURBO0FBRUEsb0VBRkE7QUFHQSwyQkFIQTtBQUlBLCtCQUpBO0FBS0E7QUFMQSxPQURBLEVBUUEsSUFSQSxDQVFBO0FBQ0E7QUFDQSx1REFDQSxNQURBLENBRUEsNkNBQ0EsNEJBSEEsRUFJQTtBQUNBO0FBQ0E7QUFEQTtBQURBLFdBSkEsRUFVQSxJQVZBLENBVUE7QUFDQTtBQUNBO0FBQ0EsV0FiQSxFQWNBLEtBZEEsQ0FjQTtBQUNBO0FBQ0EsV0FoQkE7QUFpQkE7O0FBQ0E7QUFDQSxPQTdCQTtBQThCQSxLQTFIQTs7QUE0SEE7QUFDQSxtREFDQSxHQURBLENBRUEsa0RBQ0EsOEJBSEEsRUFJQTtBQUNBO0FBQ0E7QUFEQTtBQURBLE9BSkEsRUFVQSxJQVZBLENBVUE7QUFDQTtBQUNBO0FBQ0EsT0FiQSxFQWNBLEtBZEEsQ0FjQTtBQUNBO0FBQ0EsT0FoQkE7QUFpQkEsS0E5SUE7O0FBZ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLHNEQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsT0FWQTtBQVdBLEtBNUpBOztBQTZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxLQUZBO0FBR0E7QUFDQTs7QUFuS0EsR0FaQTs7QUFpTEE7O0FBakxBLEciLCJmaWxlIjoiYnVuZGxlLmIxYTg2NDA1ODU4NWZjM2RhNWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPFBhZ2UgQGxvYWRlZD1cImxvYWRlZFwiPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlBhbmVsXCIgY2xhc3M9XCJtZW51XCIgZm9udFNpemU9XCIyNFwiPlxyXG4gICAgICA8QWN0aW9uSXRlbVxyXG4gICAgICAgIEB0YXA9XCJnb1RvSG9tZVwiXHJcbiAgICAgICAgaWNvbi5kZWNvZGU9XCJmb250Oi8vJiN4ZjAxMTtcIlxyXG4gICAgICAgIGNsYXNzPVwiZmFzXCJcclxuICAgICAgICBhbmRyb2lkLnBvc2l0aW9uPVwiYWN0aW9uQmFyXCJcclxuICAgICAgPjwvQWN0aW9uSXRlbT5cclxuICAgIDwvQWN0aW9uQmFyPlxyXG4gICAgPEJvdHRvbU5hdmlnYXRpb24+XHJcbiAgICAgIDxUYWJTdHJpcD5cclxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJBY2N1ZWlsXCIgLz5cclxuICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYwMTU7XCIgY2xhc3M9XCJmYXNcIiAvPlxyXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIkV2ZW5lbWVudHNcIiAvPlxyXG4gICAgICAgICAgPEltYWdlIHNyYy5kZWNvZGU9XCJmb250Oi8vJiN4ZjA3MztcIiBjbGFzcz1cImZhc1wiIC8+XHJcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUHJvZmlsXCIgLz5cclxuICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYyYmQ7XCIgY2xhc3M9XCJmYXNcIiAvPlxyXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIlFSQ29kZVwiIC8+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMDI5O1wiIGNsYXNzPVwiZmFzXCIgLz5cclxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cclxuICAgICAgPC9UYWJTdHJpcD5cclxuXHJcbiAgICAgIDxUYWJDb250ZW50SXRlbT5cclxuICAgICAgICA8R3JpZExheW91dD5cclxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQWNjdWVpbFwiIC8+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxyXG4gICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgPExpc3RWaWV3IEBpdGVtVGFwPVwiZ29Ub0V2ZW50XCIgY2xhc3M9XCJsaXN0LWdyb3VwXCIgZm9yPVwiaXRlbSBpbiBldmVudHNcIj5cclxuICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMTUwLCAxNTAsICpcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLmV2ZW50X25hbWVcIiBjb2w9XCIwXCIgLz5cclxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJnZXREYXRlKGl0ZW0uZGF0ZSlcIiBjb2w9XCIxXCIgLz5cclxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLnRoZW1lXCIgY29sPVwiMlwiIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICA8L0xpc3RWaWV3PlxyXG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxyXG4gICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInVzZXJfcHJvZmlsZS5maXJzdF9uYW1lXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidXNlcl9wcm9maWxlLmxhc3RfbmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInVzZXJfcHJvZmlsZS5lbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInVzZXJfcHJvZmlsZS5tb2JpbGVcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1zbVwiXHJcbiAgICAgICAgICAgICAgdGV4dD1cIk1vZGlmaWVyXCJcclxuICAgICAgICAgICAgICBAdGFwPVwib3Blbk1vZGFsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtc21cIlxyXG4gICAgICAgICAgICAgIHRleHQ9XCJTdXBwcmltZXIgdm90cmUgcHJvZmlsXCJcclxuICAgICAgICAgICAgICBAdGFwPVwiZGVsZXRlVXNlclByb2ZpbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XHJcbiAgICAgIDxUYWJDb250ZW50SXRlbT5cclxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtc21cIlxyXG4gICAgICAgICAgICAgIHRleHQ9XCJTY2FubmVyXCJcclxuICAgICAgICAgICAgICBAdGFwPVwic2NhblFyQ29kZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvRmxleGJveExheW91dD5cclxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmNvbnN0IEJhcmNvZGVTY2FubmVyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiKS5CYXJjb2RlU2Nhbm5lcjtcclxudmFyIGJhcmNvZGVzY2FubmVyID0gbmV3IEJhcmNvZGVTY2FubmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJQYW5lbFwiLFxyXG4gIGNvbXBvbmVudHM6IHt9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldmVudHM6IG51bGwsXHJcbiAgICAgIHVzZXJfcHJvZmlsZTogXCJcIixcclxuICAgICAgZGF0ZUZSOiBcIlwiLFxyXG4gICAgICBkaXNwbGF5RGlhbG9nOiBmYWxzZSxcclxuICAgICAgc2NhblRleHQ6IFwiXCJcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzY2FuUXJDb2RlKCkge1xyXG4gICAgICBDYW1lcmEucmVxdWVzdENhbWVyYVBlcm1pc3Npb25zKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBiYXJjb2Rlc2Nhbm5lci5zY2FuKHtcclxuICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbExhYmVsOiBcIkNsb3NlXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbExhYmVsQmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJVc2UgdGhlIHZvbHVtZSBidXR0b25zIGZvciBleHRyYSBsaWdodFwiLFxyXG4gICAgICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGludW91c1NjYW5DYWxsYmFjazogcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2FuVGV4dCA9IHJlc3VsdC50ZXh0O1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29Ub0V2ZW50KHRoaXMuc2NhblRleHQpO1xyXG4gICAgICAgICAgICAgIGJhcmNvZGVzY2FubmVyLnN0b3AoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xvc2VDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Nhbm5lciBjbG9zZWRcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gICAgICAgICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgcmVxdWVzdGluZyBwZXJtaXNzaW9uXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBnb1RvSG9tZSgpIHtcclxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwibG9nb3V0XCIpO1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luKTtcclxuICAgIH0sXHJcbiAgICBnb1RvRXZlbnQoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgZSk7XHJcbiAgICAgIGlmICh0eXBlb2YgZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDJ2VzdCB1bmUgY2hhaW5lXCIpO1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRXZlbnQsIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBfaWQ6IGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5pdGVtLl9pZCk7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhFdmVudCwge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIF9pZDogZS5pdGVtLl9pZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0ZShlKSB7XHJcbiAgICAgIGxldCBkID0gbmV3IERhdGUoZS5zbGljZSgwLCAxMCkpO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBkYXRlRlIgPSBkLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIsIG9wdGlvbnMpO1xyXG4gICAgICB0aGlzLmRhdGVGUiA9IGRhdGVGUjtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0ZUZSO1xyXG4gICAgfSxcclxuICAgIGxvYWRFdmVudCgpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9zZm0tcHJvamVjdC5oZXJva3VhcHAuY29tL3BhcnRpZXMvXCIsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmV2ZW50cyk7XHJcbiAgICAgICAgICB0aGlzLmV2ZW50cyA9IHJlc3BvbnNlLmRhdGEuZXZlbnRzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGVVc2VyUHJvZmlsZSgpIHtcclxuICAgICAgZGlhbG9nc1xyXG4gICAgICAgIC5jb25maXJtKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkluZm9ybWF0aW9uc1wiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCLDqnRlcy12b3VzIHN1ciBkZSB2b3Vsb2lyIHN1cHByaW1lciB2b3RyZSBjb21wdGUgP1wiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk91aVwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb25cIixcclxuICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIkFubnVsZXJcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAuZGVsZXRlKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL3NmbS1wcm9qZWN0Lmhlcm9rdWFwcC5jb20vdXNlcnMvXCIgK1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9Ib21lKCk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZFByb2ZpbGUoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZm0tcHJvamVjdC5oZXJva3VhcHAuY29tL3VzZXJzL3VzZXIvXCIgK1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXJfaWQsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJfdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnVzZXIpO1xyXG4gICAgICAgICAgdGhpcy51c2VyX3Byb2ZpbGUgPSByZXNwb25zZS5kYXRhLnVzZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgdGhpcy4kc2hvd01vZGFsKFByb2ZpbGUpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRQcm9maWxlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBpZiAocmVzID09IHRydWUpIHtcclxuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJJbmZvcm1hdGlvbnNcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJWb3RyZSBjb21wdGUgYSBiaWVuIMOpdMOpIG1vZGlmacOpXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvYWRlZCgpIHtcclxuICAgICAgdGhpcy5sb2FkRXZlbnQoKTtcclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZEV2ZW50KCk7XHJcbiAgICAgIH0sIDEwMDAwKTtcclxuICAgICAgdGhpcy5sb2FkUHJvZmlsZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHt9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvcHVycGxlXCI7XHJcblxyXG4ucGFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxufVxyXG5cclxuQm90dG9tTmF2aWdhdGlvbiBUYWJTdHJpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3N2JjNDtcclxufVxyXG5cclxuVGFiU3RyaXAgVGFiU3RyaXBJdGVtIHtcclxuICBjb2xvcjogI2MxYzFjMTtcclxufVxyXG5cclxuVGFiU3RyaXBJdGVtIGxhYmVsIHtcclxuICBmb250LXNpemU6IDEyO1xyXG59XHJcblxyXG5UYWJTdHJpcEl0ZW0gaW1hZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMzY7XHJcbn1cclxuXHJcblRhYlN0cmlwIFRhYlN0cmlwSXRlbTphY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5UYWJTdHJpcCBUYWJTdHJpcEl0ZW06YWN0aXZlIGxhYmVsIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuQWN0aW9uQmFyLm1lbnUgQWN0aW9uSXRlbSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiA2O1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=