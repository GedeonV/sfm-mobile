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
        console.log(res);
        this.songsChoose = res;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdmVudC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUEsZ0JBRkE7O0FBR0E7QUFDQTtBQUNBLGVBREE7QUFFQSxlQUZBO0FBR0Esb0JBSEE7QUFJQSxrQkFKQTtBQUtBLGVBTEE7QUFNQSxxQkFOQTtBQU9BLHFCQVBBO0FBUUEsZ0JBUkE7QUFTQSxjQVRBO0FBVUE7QUFWQTtBQVlBLEdBaEJBOztBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFNQSxLQVJBOztBQVVBO0FBQ0E7QUFDQSxLQVpBOztBQWNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7O0FBNEJBO0FBQ0EsbURBQ0EsSUFEQSxDQUVBLHFEQUNBLFFBREEsR0FFQSxPQUpBLEVBS0E7QUFDQSw4Q0FEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0E7QUFDQTtBQURBO0FBREEsT0FUQSxFQWVBLElBZkEsQ0FlQTtBQUNBO0FBQ0E7QUFDQSwwRUFDQTtBQUNBLCtCQURBO0FBRUEsMENBRkE7QUFHQTtBQUhBLFNBREEsRUFNQSxJQU5BLENBTUE7QUFDQTtBQUNBLFNBUkE7QUFTQSxPQTNCQSxFQTRCQSxLQTVCQSxDQTRCQTtBQUNBO0FBQ0EsT0E5QkE7QUErQkEsS0E1REE7O0FBOERBO0FBQ0EsbURBQ0EsSUFEQSxDQUVBLHFEQUNBLFFBREEsR0FFQSxhQUpBLEVBS0E7QUFDQTtBQURBLE9BTEEsRUFRQTtBQUNBO0FBQ0E7QUFEQTtBQURBLE9BUkEsRUFjQSxJQWRBLENBY0E7QUFDQTtBQUNBO0FBQ0EsT0FqQkEsRUFrQkEsS0FsQkEsQ0FrQkE7QUFDQTtBQUNBLE9BcEJBO0FBcUJBLEtBcEZBOztBQXNGQTtBQUNBLG1EQUNBLEdBREEsQ0FDQSw2REFEQSxFQUNBO0FBQ0E7QUFDQTtBQURBO0FBREEsT0FEQSxFQU1BLElBTkEsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FqQkEsRUFrQkEsS0FsQkEsQ0FrQkE7QUFDQTtBQUNBLE9BcEJBO0FBcUJBLEtBNUdBOztBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQSxxQkFIQTtBQUlBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7O0FBekhBLEdBakJBO0FBNElBLGNBNUlBOztBQThJQTtBQUNBO0FBQ0E7QUFDQTs7QUFqSkEsRyIsImZpbGUiOiJidW5kbGUuZmM1ZTQ3OGM5ODk4NjU3MzVlYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSBAbG9hZGVkPVwibG9hZGVkXCI+XHJcbiAgICA8QWN0aW9uQmFyPlxyXG4gICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5ldmVudF9uYW1lXCIgLz5cclxuICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICB0ZXh0PVwiR28gYmFja1wiXHJcbiAgICAgICAgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCJcclxuICAgICAgICBAdGFwPVwiZ29Ub1BhbmVsXCJcclxuICAgICAgLz5cclxuICAgIDwvQWN0aW9uQmFyPlxyXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiA6dGV4dD1cImV2ZW50LmV2ZW50X25hbWVcIiAvPlxyXG4gICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0aGlzLmRhdGVGUlwiIC8+XHJcbiAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQudGhlbWVcIiAvPlxyXG4gICAgICAgIDxMYWJlbCA6dGV4dD1cIidOb21icmUgZFxcJ2luc2NyaXQ6ICcgKyB1c2Vyc19saXN0Lmxlbmd0aFwiIC8+XHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwidGV4dC1lcnJvclwiIDp0ZXh0PVwiZXJyb3JcIiAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHYtaWY9XCJpc1JlZyA9PSBmYWxzZVwiXHJcbiAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgIHRleHQ9XCJDaG9pc2lyIGNoYW5zb25zXCJcclxuICAgICAgICAgIEB0YXA9XCJvcGVuTW9kYWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1zbVwiXHJcbiAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgIGlzUmVnID09IGZhbHNlICYmXHJcbiAgICAgICAgICAgICAgKHR5cGVvZiBzb25nc0Nob29zZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc29uZ3NDaG9vc2UubGVuZ3RoID4gMClcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgICB0ZXh0PVwiUydpbnNjcmlyZVwiXHJcbiAgICAgICAgICBAdGFwPVwic2lnblVwKClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1zbVwiXHJcbiAgICAgICAgICB2LWlmPVwiaXNSZWcgPT0gdHJ1ZVwiXHJcbiAgICAgICAgICB0ZXh0PVwiU2UgZMOpc2luc2NyaXJlXCJcclxuICAgICAgICAgIEB0YXA9XCJ1blN1YigpXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4vU2lnbnVwXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgRXZlbnRNb2RhbCBmcm9tIFwiLi9FdmVudE1vZGFsXCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi9QYW5lbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRXZlbnRcIixcclxuICBwcm9wczogW1wiX2lkXCJdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJcIixcclxuICAgICAgZXZlbnQ6IFtdLFxyXG4gICAgICB1c2Vyc19saXN0OiBbXSxcclxuICAgICAgaXNSZWc6IGZhbHNlLFxyXG4gICAgICBzb25nczogW10sXHJcbiAgICAgIHNvbmdzQ2hvb3NlOiBbXSxcclxuICAgICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgICBkYXRlRlI6IFwiXCIsXHJcbiAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogXCJcIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgdGhpcy4kc2hvd01vZGFsKEV2ZW50TW9kYWwsIHsgcHJvcHM6IHsgc29uZ3M6IHRoaXMuc29uZ3MgfSB9KS50aGVuKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgdGhpcy5zb25nc0Nob29zZSA9IHJlcztcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdvVG9QYW5lbCgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQYW5lbCkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNTaWduVXAoKSB7XHJcbiAgICAgIGxldCBpID0gdGhpcy51c2Vyc19saXN0Lmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXJzX2xpc3RbaV0uX2lkID09PSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXJfaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5zY3JpdFwiKTtcclxuICAgICAgICAgIHRoaXMuaXNSZWcgPSB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm9uIGluc2NyaXRcIik7XHJcbiAgICAgIHRoaXMuaXNSZWcgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaWduVXAoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wYXJ0aWVzL2V2ZW50L1wiICtcclxuICAgICAgICAgICAgdGhpcy5faWQgK1xyXG4gICAgICAgICAgICBcIi9zaWduXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyX2lkLFxyXG4gICAgICAgICAgICBzb25nSWQ6IHRoaXMuc29uZ3NDaG9vc2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJfdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBcIlwiO1xyXG4gICAgICAgICAgZGlhbG9nc1xyXG4gICAgICAgICAgICAuYWxlcnQoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkluZm9ybWF0aW9uc1wiLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5zY3JpcHRpb25zIGVmZmVjdHXDqVwiLFxyXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGUgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9hZEV2ZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICB1blN1YigpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZm0tcHJvamVjdC5oZXJva3VhcHAuY29tL3BhcnRpZXMvZXZlbnQvXCIgK1xyXG4gICAgICAgICAgICB0aGlzLl9pZCArXHJcbiAgICAgICAgICAgIFwiL3Vuc3ViX3VzZXJcIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXJfaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJfdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMubG9hZEV2ZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRFdmVudCgpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9zZm0tcHJvamVjdC5oZXJva3VhcHAuY29tL3BhcnRpZXMvZXZlbnQvXCIgKyB0aGlzLl9pZCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJfdG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbmVtZW50IDpcIiArIHJlc3BvbnNlLmRhdGEuZXZlbnQpO1xyXG4gICAgICAgICAgdGhpcy5ldmVudCA9IHJlc3BvbnNlLmRhdGEuZXZlbnQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGUgPSByZXNwb25zZS5kYXRhLmV2ZW50LmRhdGU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRBVEUgOlwiICsgcmVzcG9uc2UuZGF0YS5ldmVudC5kYXRlKTtcclxuICAgICAgICAgIHRoaXMudXNlcnNfbGlzdCA9IHJlc3BvbnNlLmRhdGEuZXZlbnQudXNlcnM7XHJcbiAgICAgICAgICB0aGlzLnNvbmdzID0gcmVzcG9uc2UuZGF0YS5ldmVudC5zb25ncztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdGUgZCd1dGlsaXNhdGV1cjogXCIgKyB0aGlzLnVzZXJzX2xpc3QpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0ZSBkZSBjaGFuc29uczogXCIgKyB0aGlzLnNvbmdzKTtcclxuICAgICAgICAgIHRoaXMuaXNTaWduVXAoKTtcclxuICAgICAgICAgIHRoaXMuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXREYXRlKCkge1xyXG4gICAgICBsZXQgZCA9IG5ldyBEYXRlKHRoaXMuZGF0ZS5zbGljZSgwLCAxMCkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRBVEU6XCIgKyBkKTtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgZGF0ZUZSID0gZC50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiLCBvcHRpb25zKTtcclxuICAgICAgdGhpcy5kYXRlRlIgPSBkYXRlRlI7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge30sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIklEIEV2ZW50OiBcIiArIHRoaXMuX2lkKTtcclxuICAgIHRoaXMubG9hZEV2ZW50KCk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL3B1cnBsZVwiO1xyXG5cclxuLnBhZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxODtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogI2E4YThhODtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIG1hcmdpbjogMjA7XHJcbiAgbWFyZ2luLXRvcDogMzU7XHJcbiAgYm9yZGVyLXJhZGl1czogODtcclxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=