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
      }, 30000);
      this.loadProfile();
    }

  },

  mounted() {}

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Panel.vue?vue&type=template&id=a639d88e&scoped=true&":
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
    { on: { loaded: _vm.loaded } },
    [
      _c(
        "ActionBar",
        { staticClass: "menu", attrs: { title: "Panel", fontSize: "24" } },
        [
          _c("ActionItem", {
            staticClass: "fas",
            attrs: {
              "icon.decode": "font://&#xf011;",
              "android.position": "actionBar"
            },
            on: { tap: _vm.goToHome }
          })
        ],
        1
      ),
      _c(
        "BottomNavigation",
        [
          _c(
            "TabStrip",
            [
              _c(
                "TabStripItem",
                [
                  _c("Label", { attrs: { text: "Accueil" } }),
                  _c("Image", {
                    staticClass: "fas",
                    attrs: { "src.decode": "font://&#xf015;" }
                  })
                ],
                1
              ),
              _c(
                "TabStripItem",
                [
                  _c("Label", { attrs: { text: "Evenements" } }),
                  _c("Image", {
                    staticClass: "fas",
                    attrs: { "src.decode": "font://&#xf073;" }
                  })
                ],
                1
              ),
              _c(
                "TabStripItem",
                [
                  _c("Label", { attrs: { text: "Profil" } }),
                  _c("Image", {
                    staticClass: "fas",
                    attrs: { "src.decode": "font://&#xf2bd;" }
                  })
                ],
                1
              ),
              _c(
                "TabStripItem",
                [
                  _c("Label", { attrs: { text: "QRCode" } }),
                  _c("Image", {
                    staticClass: "fas",
                    attrs: { "src.decode": "font://&#xf029;" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            [
              _c(
                "FlexboxLayout",
                { staticClass: "page" },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "content" },
                    [
                      _c("Label", {
                        attrs: { text: "Bienvenue sur SingForMe" }
                      }),
                      _c("Label", {
                        attrs: {
                          text:
                            "Cette application vous permettra de vous inscrire"
                        }
                      }),
                      _c("Label", {
                        attrs: {
                          text: "à tout les évènements de karaoké organisés "
                        }
                      }),
                      _c("Label", {
                        attrs: { text: "à l'aide du service SingForMe" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            [
              _c(
                "ListView",
                {
                  staticClass: "list-group",
                  attrs: { items: _vm.events, "+alias": "item" },
                  on: { itemTap: _vm.goToEvent }
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
                              _c("Label", {
                                attrs: { text: item.event_name, col: "0" }
                              }),
                              _c("Label", {
                                attrs: {
                                  text: _vm.getDate(item.date),
                                  col: "1"
                                }
                              }),
                              _c("Label", {
                                attrs: { text: item.theme, col: "2" }
                              })
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
          ),
          _c(
            "TabContentItem",
            [
              _c(
                "FlexboxLayout",
                { staticClass: "page" },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "content" },
                    [
                      _c("Label", {
                        attrs: { text: _vm.user_profile.first_name }
                      }),
                      _c("Label", {
                        attrs: { text: _vm.user_profile.last_name }
                      }),
                      _c("Label", { attrs: { text: _vm.user_profile.email } }),
                      _c("Label", { attrs: { text: _vm.user_profile.mobile } }),
                      _c("Button", {
                        staticClass: "-primary -rounded-sm",
                        attrs: { text: "Modifier" },
                        on: { tap: _vm.openModal }
                      }),
                      _c("Button", {
                        staticClass: "-primary -rounded-sm",
                        attrs: { text: "Supprimer votre profil" },
                        on: { tap: _vm.deleteUserProfile }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabContentItem",
            [
              _c(
                "FlexboxLayout",
                { staticClass: "page" },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "content" },
                    [
                      _c("Button", {
                        staticClass: "-primary -rounded-sm",
                        attrs: { text: "Scanner" },
                        on: { tap: _vm.scanQrCode }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QYW5lbC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYW5lbC52dWU/ODNmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUEsZ0JBRkE7O0FBR0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsc0JBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0E7QUFMQTtBQU9BLEdBWEE7O0FBWUE7QUFDQTtBQUNBLHFGQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSw4QkFGQTtBQUdBLCtDQUhBO0FBSUEsMkRBSkE7QUFLQSxxQ0FMQTtBQU1BLGtDQU5BO0FBT0EsK0JBUEE7QUFRQSwwQkFSQTtBQVNBLHdCQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBZkE7QUFnQkE7QUFDQTtBQUNBLFdBbEJBO0FBbUJBLG9DQW5CQTtBQW9CQSxpQ0FwQkE7QUFxQkE7QUFyQkE7QUF1QkEsT0F6QkEsRUEwQkEsS0ExQkEsQ0EwQkE7QUFDQTtBQUNBLE9BNUJBO0FBNkJBLEtBL0JBOztBQWlDQTtBQUNBO0FBQ0E7QUFDQSxLQXBDQTs7QUFxQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFGQSxXQURBO0FBS0E7QUFDQTtBQURBO0FBTEEsV0FRQSxLQVJBLENBUUEsdUJBUkE7QUFTQSxPQVhBLE1BV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBRkEsV0FEQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBU0E7QUFDQSxLQTlEQTs7QUErREE7QUFDQTtBQUNBO0FBQ0Es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LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSBAbG9hZGVkPVwibG9hZGVkXCI+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiUGFuZWxcIiBjbGFzcz1cIm1lbnVcIiBmb250U2l6ZT1cIjI0XCI+XHJcbiAgICAgIDxBY3Rpb25JdGVtXHJcbiAgICAgICAgQHRhcD1cImdvVG9Ib21lXCJcclxuICAgICAgICBpY29uLmRlY29kZT1cImZvbnQ6Ly8mI3hmMDExO1wiXHJcbiAgICAgICAgY2xhc3M9XCJmYXNcIlxyXG4gICAgICAgIGFuZHJvaWQucG9zaXRpb249XCJhY3Rpb25CYXJcIlxyXG4gICAgICA+PC9BY3Rpb25JdGVtPlxyXG4gICAgPC9BY3Rpb25CYXI+XHJcbiAgICA8Qm90dG9tTmF2aWdhdGlvbj5cclxuICAgICAgPFRhYlN0cmlwPlxyXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFjY3VlaWxcIiAvPlxyXG4gICAgICAgICAgPEltYWdlIHNyYy5kZWNvZGU9XCJmb250Oi8vJiN4ZjAxNTtcIiBjbGFzcz1cImZhc1wiIC8+XHJcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiRXZlbmVtZW50c1wiIC8+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMDczO1wiIGNsYXNzPVwiZmFzXCIgLz5cclxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cclxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJQcm9maWxcIiAvPlxyXG4gICAgICAgICAgPEltYWdlIHNyYy5kZWNvZGU9XCJmb250Oi8vJiN4ZjJiZDtcIiBjbGFzcz1cImZhc1wiIC8+XHJcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUVJDb2RlXCIgLz5cclxuICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYwMjk7XCIgY2xhc3M9XCJmYXNcIiAvPlxyXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICA8L1RhYlN0cmlwPlxyXG5cclxuICAgICAgPFRhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkJpZW52ZW51ZSBzdXIgU2luZ0Zvck1lXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDZXR0ZSBhcHBsaWNhdGlvbiB2b3VzIHBlcm1ldHRyYSBkZSB2b3VzIGluc2NyaXJlXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCLDoCB0b3V0IGxlcyDDqXbDqG5lbWVudHMgZGUga2FyYW9rw6kgb3JnYW5pc8OpcyBcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIsOgIGwnYWlkZSBkdSBzZXJ2aWNlIFNpbmdGb3JNZVwiIC8+XHJcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvRmxleGJveExheW91dD5cclxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgPFRhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgIDxMaXN0VmlldyBAaXRlbVRhcD1cImdvVG9FdmVudFwiIGNsYXNzPVwibGlzdC1ncm91cFwiIGZvcj1cIml0ZW0gaW4gZXZlbnRzXCI+XHJcbiAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjE1MCwgMTUwLCAqXCI+XHJcbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5ldmVudF9uYW1lXCIgY29sPVwiMFwiIC8+XHJcbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZ2V0RGF0ZShpdGVtLmRhdGUpXCIgY29sPVwiMVwiIC8+XHJcbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS50aGVtZVwiIGNvbD1cIjJcIiAvPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgPFRhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VyX3Byb2ZpbGUuZmlyc3RfbmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInVzZXJfcHJvZmlsZS5sYXN0X25hbWVcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VyX3Byb2ZpbGUuZW1haWxcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VyX3Byb2ZpbGUubW9iaWxlXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtc21cIlxyXG4gICAgICAgICAgICAgIHRleHQ9XCJNb2RpZmllclwiXHJcbiAgICAgICAgICAgICAgQHRhcD1cIm9wZW5Nb2RhbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgICAgICB0ZXh0PVwiU3VwcHJpbWVyIHZvdHJlIHByb2ZpbFwiXHJcbiAgICAgICAgICAgICAgQHRhcD1cImRlbGV0ZVVzZXJQcm9maWxlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgICA8L1RhYkNvbnRlbnRJdGVtPlxyXG4gICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgICAgICB0ZXh0PVwiU2Nhbm5lclwiXHJcbiAgICAgICAgICAgICAgQHRhcD1cInNjYW5RckNvZGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICAgIDwvVGFiQ29udGVudEl0ZW0+XHJcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5jb25zdCBCYXJjb2RlU2Nhbm5lciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIikuQmFyY29kZVNjYW5uZXI7XHJcbnZhciBiYXJjb2Rlc2Nhbm5lciA9IG5ldyBCYXJjb2RlU2Nhbm5lcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiUGFuZWxcIixcclxuICBjb21wb25lbnRzOiB7fSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXZlbnRzOiBudWxsLFxyXG4gICAgICB1c2VyX3Byb2ZpbGU6IFwiXCIsXHJcbiAgICAgIGRhdGVGUjogXCJcIixcclxuICAgICAgZGlzcGxheURpYWxvZzogZmFsc2UsXHJcbiAgICAgIHNjYW5UZXh0OiBcIlwiXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2NhblFyQ29kZSgpIHtcclxuICAgICAgQ2FtZXJhLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9ucygpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgYmFyY29kZXNjYW5uZXIuc2Nhbih7XHJcbiAgICAgICAgICAgIGZvcm1hdHM6IFwiUVJfQ09ERVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogXCJDbG9zZVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbEJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXNlIHRoZSB2b2x1bWUgYnV0dG9ucyBmb3IgZXh0cmEgbGlnaHRcIixcclxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcclxuICAgICAgICAgICAgdG9yY2hPbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNTY2FuQ2FsbGJhY2s6IHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2NhblRleHQgPSByZXN1bHQudGV4dDtcclxuICAgICAgICAgICAgICB0aGlzLmdvVG9FdmVudCh0aGlzLnNjYW5UZXh0KTtcclxuICAgICAgICAgICAgICBiYXJjb2Rlc2Nhbm5lci5zdG9wKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW5uZXIgY2xvc2VkXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgICAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHJlcXVlc3RpbmcgcGVybWlzc2lvblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZ29Ub0hvbWUoKSB7XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImxvZ291dFwiKTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbik7XHJcbiAgICB9LFxyXG4gICAgZ29Ub0V2ZW50KGUpIHtcclxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGUpO1xyXG4gICAgICBpZiAodHlwZW9mIGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQydlc3QgdW5lIGNoYWluZVwiKTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEV2ZW50LCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgX2lkOiBlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuaXRlbS5faWQpO1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRXZlbnQsIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBfaWQ6IGUuaXRlbS5faWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldERhdGUoZSkge1xyXG4gICAgICBsZXQgZCA9IG5ldyBEYXRlKGUuc2xpY2UoMCwgMTApKTtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgZGF0ZUZSID0gZC50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiLCBvcHRpb25zKTtcclxuICAgICAgdGhpcy5kYXRlRlIgPSBkYXRlRlI7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVGUjtcclxuICAgIH0sXHJcbiAgICBsb2FkRXZlbnQoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wYXJ0aWVzL1wiLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdGhpcy4kc3RvcmUuc3RhdGUudXNlcl90b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5ldmVudHMpO1xyXG4gICAgICAgICAgdGhpcy5ldmVudHMgPSByZXNwb25zZS5kYXRhLmV2ZW50cztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlVXNlclByb2ZpbGUoKSB7XHJcbiAgICAgIGRpYWxvZ3NcclxuICAgICAgICAuY29uZmlybSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJJbmZvcm1hdGlvbnNcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiw6p0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgdm90cmUgY29tcHRlID9cIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPdWlcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9uXCIsXHJcbiAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJBbm51bGVyXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgLmRlbGV0ZShcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9zZm0tcHJvamVjdC5oZXJva3VhcHAuY29tL3VzZXJzL1wiICtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdGhpcy4kc3RvcmUuc3RhdGUudXNlcl90b2tlblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvSG9tZSgpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRQcm9maWxlKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS91c2Vycy91c2VyL1wiICtcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyX2lkLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS51c2VyKTtcclxuICAgICAgICAgIHRoaXMudXNlcl9wcm9maWxlID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIHRoaXMuJHNob3dNb2RhbChQcm9maWxlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZmlsZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgaWYgKHJlcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiSW5mb3JtYXRpb25zXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVm90cmUgY29tcHRlIGEgYmllbiDDqXTDqSBtb2RpZmnDqVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsb2FkZWQoKSB7XHJcbiAgICAgIHRoaXMubG9hZEV2ZW50KCk7XHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gICAgICB9LCAzMDAwMCk7XHJcbiAgICAgIHRoaXMubG9hZFByb2ZpbGUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL3B1cnBsZVwiO1xyXG5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbn1cclxuXHJcbkJvdHRvbU5hdmlnYXRpb24gVGFiU3RyaXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzdiYzQ7XHJcbn1cclxuXHJcblRhYlN0cmlwIFRhYlN0cmlwSXRlbSB7XHJcbiAgY29sb3I6ICNjMWMxYzE7XHJcbn1cclxuXHJcblRhYlN0cmlwSXRlbSBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMjtcclxufVxyXG5cclxuVGFiU3RyaXBJdGVtIGltYWdlIHtcclxuICBmb250LXNpemU6IDM2O1xyXG59XHJcblxyXG5UYWJTdHJpcCBUYWJTdHJpcEl0ZW06YWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuVGFiU3RyaXAgVGFiU3RyaXBJdGVtOmFjdGl2ZSBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbkFjdGlvbkJhci5tZW51IEFjdGlvbkl0ZW0ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogNjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgb246IHsgbG9hZGVkOiBfdm0ubG9hZGVkIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZW51XCIsIGF0dHJzOiB7IHRpdGxlOiBcIlBhbmVsXCIsIGZvbnRTaXplOiBcIjI0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJpY29uLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMDExO1wiLFxuICAgICAgICAgICAgICBcImFuZHJvaWQucG9zaXRpb25cIjogXCJhY3Rpb25CYXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Ib21lIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiQm90dG9tTmF2aWdhdGlvblwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlN0cmlwXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQWNjdWVpbFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMDE1O1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRXZlbmVtZW50c1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMDczO1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiUHJvZmlsXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJzcmMuZGVjb2RlXCI6IFwiZm9udDovLyYjeGYyYmQ7XCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJRUkNvZGVcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhc1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjAyOTtcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCaWVudmVudWUgc3VyIFNpbmdGb3JNZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDZXR0ZSBhcHBsaWNhdGlvbiB2b3VzIHBlcm1ldHRyYSBkZSB2b3VzIGluc2NyaXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiw6AgdG91dCBsZXMgw6l2w6huZW1lbnRzIGRlIGthcmFva8OpIG9yZ2FuaXPDqXMgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiw6AgbCdhaWRlIGR1IHNlcnZpY2UgU2luZ0Zvck1lXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5ldmVudHMsIFwiK2FsaWFzXCI6IFwiaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0uZ29Ub0V2ZW50IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIxNTAsIDE1MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5ldmVudF9uYW1lLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmdldERhdGUoaXRlbS5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGl0ZW0udGhlbWUsIGNvbDogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0udXNlcl9wcm9maWxlLmZpcnN0X25hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnVzZXJfcHJvZmlsZS5sYXN0X25hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0udXNlcl9wcm9maWxlLmVtYWlsIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS51c2VyX3Byb2ZpbGUubW9iaWxlIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiLXByaW1hcnkgLXJvdW5kZWQtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTW9kaWZpZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub3Blbk1vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCItcHJpbWFyeSAtcm91bmRlZC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTdXBwcmltZXIgdm90cmUgcHJvZmlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmRlbGV0ZVVzZXJQcm9maWxlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiLXByaW1hcnkgLXJvdW5kZWQtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2Nhbm5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zY2FuUXJDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9