webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Event.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Signup.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _EventModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/EventModal.vue");
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Panel.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Event",
  props: ["_id"],

  data() {
    return {
      error: "",
      event: [],
      users_list: [],
      isReg: false,
      songs: [],
      songsChoose: [],
      isChecked: true,
      dateFR: "",
      date: "",
      selectedItem: ""
    };
  },

  methods: {
    openModal() {
      this.$showModal(_EventModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          songs: this.songs
        }
      }).then(res => {
        this.songsChoose = res;
        console.log(this.songsChoose);
      });
    },

    goToPanel() {
      this.$navigateTo(_Panel__WEBPACK_IMPORTED_MODULE_3__["default"]).catch(error => console.log(error));
    },

    isSignUp() {
      let i = this.users_list.length;

      while (i--) {
        if (this.users_list[i]._id === this.$store.state.user.user_id) {
          console.log("Inscrit");
          this.isReg = true;
          return true;
        }
      }

      console.log("Non inscrit");
      this.isReg = false;
      return false;
    },

    signUp() {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://sfm-project.herokuapp.com/parties/event/" + this._id + "/sign", {
        userId: this.$store.state.user.user_id,
        songId: this.songsChoose
      }, {
        headers: {
          Authorization: "Bearer " + this.$store.state.user_token
        }
      }).then(response => {
        console.log(response.data);
        this.error = "";
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["alert"]({
          title: "Informations",
          message: "Inscriptions effectué",
          okButtonText: "Ok"
        }).then(e => {
          this.loadEvent();
        });
      }).catch(err => {
        console.log(err);
      });
    },

    unSub() {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://sfm-project.herokuapp.com/parties/event/" + this._id + "/unsub_user", {
        userId: this.$store.state.user.user_id
      }, {
        headers: {
          Authorization: "Bearer " + this.$store.state.user_token
        }
      }).then(response => {
        console.log(response.data);
        this.loadEvent();
      }).catch(err => {
        console.log(err);
      });
    },

    loadEvent() {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://sfm-project.herokuapp.com/parties/event/" + this._id, {
        headers: {
          Authorization: "Bearer " + this.$store.state.user_token
        }
      }).then(response => {
        console.log("Evenement :" + response.data.event);
        this.event = response.data.event;
        this.date = response.data.event.date;
        console.log("DATE :" + response.data.event.date);
        this.users_list = response.data.event.users;
        this.songs = response.data.event.songs;
        console.log("Liste d'utilisateur: " + this.users_list);
        console.log("Liste de chansons: " + this.songs);
        this.isSignUp();
        this.getDate();
      }).catch(err => {
        console.log(err);
      });
    },

    getDate() {
      let d = new Date(this.date.slice(0, 10));
      console.log("DATE:" + d);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      let dateFR = d.toLocaleDateString("fr-FR", options);
      this.dateFR = dateFR;
    }

  },
  computed: {},

  mounted() {
    console.log("ID Event: " + this._id);
    this.loadEvent();
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdmVudC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUEsZ0JBRkE7O0FBR0E7QUFDQTtBQUNBLGVBREE7QUFFQSxlQUZBO0FBR0Esb0JBSEE7QUFJQSxrQkFKQTtBQUtBLGVBTEE7QUFNQSxxQkFOQTtBQU9BLHFCQVBBO0FBUUEsZ0JBUkE7QUFTQSxjQVRBO0FBVUE7QUFWQTtBQVlBLEdBaEJBOztBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFNQSxLQVJBOztBQVVBO0FBQ0E7QUFDQSxLQVpBOztBQWNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7O0FBNEJBO0FBQ0EsbURBQ0EsSUFEQSxDQUVBLHFEQUNBLFFBREEsR0FFQSxPQUpBLEVBS0E7QUFDQSw4Q0FEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0E7QUFDQTtBQURBO0FBREEsT0FUQSxFQWVBLElBZkEsQ0FlQTtBQUNBO0FBQ0E7QUFDQSwwRUFDQTtBQUNBLCtCQURBO0FBRUEsMENBRkE7QUFHQTtBQUhBLFNBREEsRUFNQSxJQU5BLENBTUE7QUFDQTtBQUNBLFNBUkE7QUFTQSxPQTNCQSxFQTRCQSxLQTVCQSxDQTRCQTtBQUNBO0FBQ0EsT0E5QkE7QUErQkEsS0E1REE7O0FBOERBO0FBQ0EsbURBQ0EsSUFEQSxDQUVBLHFEQUNBLFFBREEsR0FFQSxhQUpBLEVBS0E7QUFDQTtBQURBLE9BTEEsRUFRQTtBQUNBO0FBQ0E7QUFEQTtBQURBLE9BUkEsRUFjQSxJQWRBLENBY0E7QUFDQTtBQUNBO0FBQ0EsT0FqQkEsRUFrQkEsS0FsQkEsQ0FrQkE7QUFDQTtBQUNBLE9BcEJBO0FBcUJBLEtBcEZBOztBQXNGQTtBQUNBLG1EQUNBLEdBREEsQ0FDQSw2REFEQSxFQUNBO0FBQ0E7QUFDQTtBQURBO0FBREEsT0FEQSxFQU1BLElBTkEsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FqQkEsRUFrQkEsS0FsQkEsQ0FrQkE7QUFDQTtBQUNBLE9BcEJBO0FBcUJBLEtBNUdBOztBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQSxxQkFIQTtBQUlBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7O0FBekhBLEdBakJBO0FBNElBLGNBNUlBOztBQThJQTtBQUNBO0FBQ0E7QUFDQTs7QUFqSkEsRyIsImZpbGUiOiJidW5kbGUuZmQ3Y2RkYmQwMWFlODQ4NDdjMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSBAbG9hZGVkPVwibG9hZGVkXCI+XHJcbiAgICA8QWN0aW9uQmFyPlxyXG4gICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5ldmVudF9uYW1lXCIgLz5cclxuICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICB0ZXh0PVwiR28gYmFja1wiXHJcbiAgICAgICAgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCJcclxuICAgICAgICBAdGFwPVwiZ29Ub1BhbmVsXCJcclxuICAgICAgLz5cclxuICAgIDwvQWN0aW9uQmFyPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiA6dGV4dD1cImV2ZW50LmV2ZW50X25hbWVcIiAvPlxyXG4gICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0aGlzLmRhdGVGUlwiIC8+XHJcbiAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQudGhlbWVcIiAvPlxyXG4gICAgICAgIDxMYWJlbCA6dGV4dD1cIidOb21icmUgZFxcJ2luc2NyaXQ6ICcgKyB1c2Vyc19saXN0Lmxlbmd0aFwiIC8+XHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwidGV4dC1lcnJvclwiIDp0ZXh0PVwiZXJyb3JcIiAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHYtaWY9XCJpc1JlZyA9PSBmYWxzZVwiXHJcbiAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgIHRleHQ9XCJDaG9pc2lyIGNoYW5zb25zXCJcclxuICAgICAgICAgIEB0YXA9XCJvcGVuTW9kYWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1zbVwiXHJcbiAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgIGlzUmVnID09IGZhbHNlICYmXHJcbiAgICAgICAgICAgICAgKHR5cGVvZiBzb25nc0Nob29zZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc29uZ3NDaG9vc2UubGVuZ3RoID4gMClcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgICB0ZXh0PVwiUydpbnNjcmlyZVwiXHJcbiAgICAgICAgICBAdGFwPVwic2lnblVwKClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1zbVwiXHJcbiAgICAgICAgICB2LWlmPVwiaXNSZWcgPT0gdHJ1ZVwiXHJcbiAgICAgICAgICB0ZXh0PVwiU2UgZMOpc2luc2NyaXJlXCJcclxuICAgICAgICAgIEB0YXA9XCJ1blN1YigpXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4vU2lnbnVwXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgRXZlbnRNb2RhbCBmcm9tIFwiLi9FdmVudE1vZGFsXCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi9QYW5lbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRXZlbnRcIixcclxuICBwcm9wczogW1wiX2lkXCJdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJcIixcclxuICAgICAgZXZlbnQ6IFtdLFxyXG4gICAgICB1c2Vyc19saXN0OiBbXSxcclxuICAgICAgaXNSZWc6IGZhbHNlLFxyXG4gICAgICBzb25nczogW10sXHJcbiAgICAgIHNvbmdzQ2hvb3NlOiBbXSxcclxuICAgICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgICBkYXRlRlI6IFwiXCIsXHJcbiAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogXCJcIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgdGhpcy4kc2hvd01vZGFsKEV2ZW50TW9kYWwsIHsgcHJvcHM6IHsgc29uZ3M6IHRoaXMuc29uZ3MgfSB9KS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNvbmdzQ2hvb3NlID0gcmVzO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zb25nc0Nob29zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBnb1RvUGFuZWwoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUGFuZWwpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU2lnblVwKCkge1xyXG4gICAgICBsZXQgaSA9IHRoaXMudXNlcnNfbGlzdC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBpZiAodGhpcy51c2Vyc19saXN0W2ldLl9pZCA9PT0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyX2lkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkluc2NyaXRcIik7XHJcbiAgICAgICAgICB0aGlzLmlzUmVnID0gdHJ1ZTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vbiBpbnNjcml0XCIpO1xyXG4gICAgICB0aGlzLmlzUmVnID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NmbS1wcm9qZWN0Lmhlcm9rdWFwcC5jb20vcGFydGllcy9ldmVudC9cIiArXHJcbiAgICAgICAgICAgIHRoaXMuX2lkICtcclxuICAgICAgICAgICAgXCIvc2lnblwiLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcl9pZCxcclxuICAgICAgICAgICAgc29uZ0lkOiB0aGlzLnNvbmdzQ2hvb3NlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcclxuICAgICAgICAgIGRpYWxvZ3NcclxuICAgICAgICAgICAgLmFsZXJ0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJJbmZvcm1hdGlvbnNcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluc2NyaXB0aW9ucyBlZmZlY3R1w6lcIixcclxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5TdWIoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wYXJ0aWVzL2V2ZW50L1wiICtcclxuICAgICAgICAgICAgdGhpcy5faWQgK1xyXG4gICAgICAgICAgICBcIi91bnN1Yl91c2VyXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyX2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkRXZlbnQoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wYXJ0aWVzL2V2ZW50L1wiICsgdGhpcy5faWQsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW5lbWVudCA6XCIgKyByZXNwb25zZS5kYXRhLmV2ZW50KTtcclxuICAgICAgICAgIHRoaXMuZXZlbnQgPSByZXNwb25zZS5kYXRhLmV2ZW50O1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gcmVzcG9uc2UuZGF0YS5ldmVudC5kYXRlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEQVRFIDpcIiArIHJlc3BvbnNlLmRhdGEuZXZlbnQuZGF0ZSk7XHJcbiAgICAgICAgICB0aGlzLnVzZXJzX2xpc3QgPSByZXNwb25zZS5kYXRhLmV2ZW50LnVzZXJzO1xyXG4gICAgICAgICAgdGhpcy5zb25ncyA9IHJlc3BvbnNlLmRhdGEuZXZlbnQuc29uZ3M7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RlIGQndXRpbGlzYXRldXI6IFwiICsgdGhpcy51c2Vyc19saXN0KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdGUgZGUgY2hhbnNvbnM6IFwiICsgdGhpcy5zb25ncyk7XHJcbiAgICAgICAgICB0aGlzLmlzU2lnblVwKCk7XHJcbiAgICAgICAgICB0aGlzLmdldERhdGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLmRhdGUuc2xpY2UoMCwgMTApKTtcclxuICAgICAgY29uc29sZS5sb2coXCJEQVRFOlwiICsgZCk7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIGRheTogXCJudW1lcmljXCJcclxuICAgICAgfTtcclxuICAgICAgbGV0IGRhdGVGUiA9IGQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiwgb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuZGF0ZUZSID0gZGF0ZUZSO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHt9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJJRCBFdmVudDogXCIgKyB0aGlzLl9pZCk7XHJcbiAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9wdXJwbGVcIjtcclxuXHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBtYXJnaW46IDIwO1xyXG4gIG1hcmdpbi10b3A6IDM1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDg7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI1O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9