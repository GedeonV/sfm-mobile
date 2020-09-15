<template>
  <Page @loaded="loaded">
    <ActionBar>
      <Label :text="event.event_name" />
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goToPanel" />
    </ActionBar>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="header" :text="event.event_name" />
        <Label :text="event.description" />
        <Label :text="this.dateFR" />
        <Label :text="event.theme" />
        <Label :text="'Nombre d\'inscrit: ' + users_list.length" />
        <Label class="text-error" :text="error" />
        <Button
          v-if="isReg == false"
          class="-primary -rounded-sm"
          text="Choisir chansons"
          @tap="openModal"
        />
        <Button
          class="-primary -rounded-sm"
          v-if="
            isReg == false &&
              (typeof songsChoose !== 'undefined' && songsChoose.length > 0)
          "
          text="S'inscrire"
          @tap="signUp()"
        />
        <Button
          class="-primary -rounded-sm"
          v-if="isReg == true"
          text="Se désinscrire"
          @tap="unSub()"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Signup from "./Signup";
import Login from "./Login";
import EventModal from "./EventModal";
import Panel from "./Panel";
import axios from "axios";
import * as dialogs from "tns-core-modules/ui/dialogs";

export default {
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
      selectedItem: "",
    };
  },
  methods: {
    openModal() {
      this.$showModal(EventModal, { props: { songs: this.songs } }).then(
        (res) => {
          this.songsChoose = res;
          console.log(this.songsChoose);
        }
      );
    },

    goToPanel() {
      this.$navigateTo(Panel).catch((error) => console.log(error));
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
      axios
        .post(
          "https://sfm-project.herokuapp.com/parties/event/" +
            this._id +
            "/sign",
          {
            userId: this.$store.state.user.user_id,
            songId: this.songsChoose,
            order: this.users_list.length + 1,
          },
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.user_token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.error = "";
          dialogs
            .alert({
              title: "Informations",
              message: "Inscriptions effectué",
              okButtonText: "Ok",
            })
            .then((e) => {
              this.loadEvent();
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    unSub() {
      axios
        .post(
          "https://sfm-project.herokuapp.com/parties/event/" +
            this._id +
            "/unsub_user",
          {
            userId: this.$store.state.user.user_id,
          },
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.user_token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.loadEvent();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    loadEvent() {
      axios
        .get("https://sfm-project.herokuapp.com/parties/event/" + this._id, {
          headers: {
            Authorization: "Bearer " + this.$store.state.user_token,
          },
        })
        .then((response) => {
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
        })
        .catch((err) => {
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
        day: "numeric",
      };
      let dateFR = d.toLocaleDateString("fr-FR", options);
      this.dateFR = dateFR;
    },
  },
  computed: {},

  mounted() {
    console.log("ID Event: " + this._id);
    this.loadEvent();
  },
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/purple";

.page {
  align-items: center;
}

.form {
  flex-grow: 1;
  vertical-align: middle;
}

.input-field {
  margin-bottom: 2em;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
  width: 50%;
  text-align: center;
}

label {
  text-align: center;
  font-size: 16;
}

.modal {
  margin: 20;
  margin-top: 35;
  border-radius: 8;
  horizontal-align: center;
  vertical-align: middle;
  background-color: white;
}

.modal-container {
  padding: 25;
  padding-bottom: 10;
}
</style>
