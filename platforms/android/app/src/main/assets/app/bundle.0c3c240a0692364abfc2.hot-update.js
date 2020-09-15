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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FdmVudC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUEsZ0JBRkE7O0FBR0E7QUFDQTtBQUNBLGVBREE7QUFFQSxlQUZBO0FBR0Esb0JBSEE7QUFJQSxrQkFKQTtBQUtBLGVBTEE7QUFNQSxxQkFOQTtBQU9BLHFCQVBBO0FBUUEsZ0JBUkE7QUFTQSxjQVRBO0FBVUE7QUFWQTtBQVlBLEdBaEJBOztBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU9BLEtBVEE7O0FBV0E7QUFDQTtBQUNBLEtBYkE7O0FBZUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNCQTs7QUE2QkE7QUFDQSxtREFDQSxJQURBLENBRUEscURBQ0EsUUFEQSxHQUVBLE9BSkEsRUFLQTtBQUNBLDhDQURBO0FBRUE7QUFGQSxPQUxBLEVBU0E7QUFDQTtBQUNBO0FBREE7QUFEQSxPQVRBLEVBZUEsSUFmQSxDQWVBO0FBQ0E7QUFDQTtBQUNBLDBFQUNBO0FBQ0EsK0JBREE7QUFFQSwwQ0FGQTtBQUdBO0FBSEEsU0FEQSxFQU1BLElBTkEsQ0FNQTtBQUNBO0FBQ0EsU0FSQTtBQVNBLE9BM0JBLEVBNEJBLEtBNUJBLENBNEJBO0FBQ0E7QUFDQSxPQTlCQTtBQStCQSxLQTdEQTs7QUErREE7QUFDQSxtREFDQSxJQURBLENBRUEscURBQ0EsUUFEQSxHQUVBLGFBSkEsRUFLQTtBQUNBO0FBREEsT0FMQSxFQVFBO0FBQ0E7QUFDQTtBQURBO0FBREEsT0FSQSxFQWNBLElBZEEsQ0FjQTtBQUNBO0FBQ0E7QUFDQSxPQWpCQSxFQWtCQSxLQWxCQSxDQWtCQTtBQUNBO0FBQ0EsT0FwQkE7QUFxQkEsS0FyRkE7O0FBdUZBO0FBQ0EsbURBQ0EsR0FEQSxDQUNBLDZEQURBLEVBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQSxPQURBLEVBTUEsSUFOQSxDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWpCQSxFQWtCQSxLQWxCQSxDQWtCQTtBQUNBO0FBQ0EsT0FwQkE7QUFxQkEsS0E3R0E7O0FBK0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSx1QkFGQTtBQUdBLHFCQUhBO0FBSUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTs7QUExSEEsR0FqQkE7QUE2SUEsY0E3SUE7O0FBK0lBO0FBQ0E7QUFDQTtBQUNBOztBQWxKQSxHIiwiZmlsZSI6ImJ1bmRsZS4wYzNjMjQwYTA2OTIzNjRhYmZjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlIEBsb2FkZWQ9XCJsb2FkZWRcIj5cclxuICAgIDxBY3Rpb25CYXI+XHJcbiAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmV2ZW50X25hbWVcIiAvPlxyXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgIHRleHQ9XCJHbyBiYWNrXCJcclxuICAgICAgICBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIlxyXG4gICAgICAgIEB0YXA9XCJnb1RvUGFuZWxcIlxyXG4gICAgICAvPlxyXG4gICAgPC9BY3Rpb25CYXI+XHJcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIDp0ZXh0PVwiZXZlbnQuZXZlbnRfbmFtZVwiIC8+XHJcbiAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQuZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgIDxMYWJlbCA6dGV4dD1cInRoaXMuZGF0ZUZSXCIgLz5cclxuICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC50aGVtZVwiIC8+XHJcbiAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ05vbWJyZSBkXFwnaW5zY3JpdDogJyArIHVzZXJzX2xpc3QubGVuZ3RoXCIgLz5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJ0ZXh0LWVycm9yXCIgOnRleHQ9XCJlcnJvclwiIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdi1pZj1cImlzUmVnID09IGZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiLXByaW1hcnkgLXJvdW5kZWQtc21cIlxyXG4gICAgICAgICAgdGV4dD1cIkNob2lzaXIgY2hhbnNvbnNcIlxyXG4gICAgICAgICAgQHRhcD1cIm9wZW5Nb2RhbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgaXNSZWcgPT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICAodHlwZW9mIHNvbmdzQ2hvb3NlICE9PSAndW5kZWZpbmVkJyAmJiBzb25nc0Nob29zZS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgXCJcclxuICAgICAgICAgIHRleHQ9XCJTJ2luc2NyaXJlXCJcclxuICAgICAgICAgIEB0YXA9XCJzaWduVXAoKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLXNtXCJcclxuICAgICAgICAgIHYtaWY9XCJpc1JlZyA9PSB0cnVlXCJcclxuICAgICAgICAgIHRleHQ9XCJTZSBkw6lzaW5zY3JpcmVcIlxyXG4gICAgICAgICAgQHRhcD1cInVuU3ViKClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFNpZ251cCBmcm9tIFwiLi9TaWdudXBcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBFdmVudE1vZGFsIGZyb20gXCIuL0V2ZW50TW9kYWxcIjtcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuL1BhbmVsXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJFdmVudFwiLFxyXG4gIHByb3BzOiBbXCJfaWRcIl0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICBldmVudDogW10sXHJcbiAgICAgIHVzZXJzX2xpc3Q6IFtdLFxyXG4gICAgICBpc1JlZzogZmFsc2UsXHJcbiAgICAgIHNvbmdzOiBbXSxcclxuICAgICAgc29uZ3NDaG9vc2U6IFtdLFxyXG4gICAgICBpc0NoZWNrZWQ6IHRydWUsXHJcbiAgICAgIGRhdGVGUjogXCJcIixcclxuICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBcIlwiXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb3Blbk1vZGFsKCkge1xyXG4gICAgICB0aGlzLiRzaG93TW9kYWwoRXZlbnRNb2RhbCwgeyBwcm9wczogeyBzb25nczogdGhpcy5zb25ncyB9IH0pLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNvbmdzQ2hvb3NlID0gcmVzO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zb25nc0Nob29zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBnb1RvUGFuZWwoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUGFuZWwpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU2lnblVwKCkge1xyXG4gICAgICBsZXQgaSA9IHRoaXMudXNlcnNfbGlzdC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBpZiAodGhpcy51c2Vyc19saXN0W2ldLl9pZCA9PT0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyX2lkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkluc2NyaXRcIik7XHJcbiAgICAgICAgICB0aGlzLmlzUmVnID0gdHJ1ZTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vbiBpbnNjcml0XCIpO1xyXG4gICAgICB0aGlzLmlzUmVnID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NmbS1wcm9qZWN0Lmhlcm9rdWFwcC5jb20vcGFydGllcy9ldmVudC9cIiArXHJcbiAgICAgICAgICAgIHRoaXMuX2lkICtcclxuICAgICAgICAgICAgXCIvc2lnblwiLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcl9pZCxcclxuICAgICAgICAgICAgc29uZ0lkOiB0aGlzLnNvbmdzQ2hvb3NlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcclxuICAgICAgICAgIGRpYWxvZ3NcclxuICAgICAgICAgICAgLmFsZXJ0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJJbmZvcm1hdGlvbnNcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluc2NyaXB0aW9ucyBlZmZlY3R1w6lcIixcclxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5TdWIoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wYXJ0aWVzL2V2ZW50L1wiICtcclxuICAgICAgICAgICAgdGhpcy5faWQgK1xyXG4gICAgICAgICAgICBcIi91bnN1Yl91c2VyXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyX2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkRXZlbnQoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHBzOi8vc2ZtLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wYXJ0aWVzL2V2ZW50L1wiICsgdGhpcy5faWQsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyX3Rva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW5lbWVudCA6XCIgKyByZXNwb25zZS5kYXRhLmV2ZW50KTtcclxuICAgICAgICAgIHRoaXMuZXZlbnQgPSByZXNwb25zZS5kYXRhLmV2ZW50O1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gcmVzcG9uc2UuZGF0YS5ldmVudC5kYXRlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEQVRFIDpcIiArIHJlc3BvbnNlLmRhdGEuZXZlbnQuZGF0ZSk7XHJcbiAgICAgICAgICB0aGlzLnVzZXJzX2xpc3QgPSByZXNwb25zZS5kYXRhLmV2ZW50LnVzZXJzO1xyXG4gICAgICAgICAgdGhpcy5zb25ncyA9IHJlc3BvbnNlLmRhdGEuZXZlbnQuc29uZ3M7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RlIGQndXRpbGlzYXRldXI6IFwiICsgdGhpcy51c2Vyc19saXN0KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdGUgZGUgY2hhbnNvbnM6IFwiICsgdGhpcy5zb25ncyk7XHJcbiAgICAgICAgICB0aGlzLmlzU2lnblVwKCk7XHJcbiAgICAgICAgICB0aGlzLmdldERhdGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLmRhdGUuc2xpY2UoMCwgMTApKTtcclxuICAgICAgY29uc29sZS5sb2coXCJEQVRFOlwiICsgZCk7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIGRheTogXCJudW1lcmljXCJcclxuICAgICAgfTtcclxuICAgICAgbGV0IGRhdGVGUiA9IGQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiwgb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuZGF0ZUZSID0gZGF0ZUZSO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHt9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJJRCBFdmVudDogXCIgKyB0aGlzLl9pZCk7XHJcbiAgICB0aGlzLmxvYWRFdmVudCgpO1xyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9wdXJwbGVcIjtcclxuXHJcbi5wYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTg7XHJcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBtYXJnaW46IDIwO1xyXG4gIG1hcmdpbi10b3A6IDM1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDg7XHJcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI1O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9