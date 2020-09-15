<template>
  <Page @loaded="loaded">
    <ActionBar title="Panel" class="menu" fontSize="24">
      <ActionItem
        @tap="goToHome"
        icon.decode="font://&#xf011;"
        class="fas"
        android.position="actionBar"
      ></ActionItem>
    </ActionBar>
    <BottomNavigation>
      <TabStrip>
        <TabStripItem>
          <Label text="Accueil" />
          <Image src.decode="font://&#xf015;" class="fas" />
        </TabStripItem>
        <TabStripItem>
          <Label text="Evenements" />
          <Image src.decode="font://&#xf073;" class="fas" />
        </TabStripItem>
        <TabStripItem>
          <Label text="Profil" />
          <Image src.decode="font://&#xf2bd;" class="fas" />
        </TabStripItem>
        <TabStripItem>
          <Label text="QRCode" />
          <Image src.decode="font://&#xf029;" class="fas" />
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <FlexboxLayout class="page">
          <StackLayout class="content">
            <Label text="Bienvenue sur SingForMe" />
            <Label text="Cette application vous permettra de vous inscrire" />
            <Label text="à tout les évènements de karaoké organisés " />
            <Label text="à l'aide du service SingForMe" />
          </StackLayout>
        </FlexboxLayout>
      </TabContentItem>
      <TabContentItem>
        <ListView @itemTap="goToEvent" class="list-group" for="item in events">
          <v-template>
            <GridLayout columns="150, 150, *">
              <Label :text="item.event_name" col="0" />
              <Label :text="getDate(item.date)" col="1" />
              <Label :text="item.theme" col="2" />
            </GridLayout>
          </v-template>
        </ListView>
      </TabContentItem>
      <TabContentItem>
        <FlexboxLayout class="page">
          <StackLayout class="content">
            <Label :text="user_profile.first_name" />
            <Label :text="user_profile.last_name" />
            <Label :text="user_profile.email" />
            <Label :text="user_profile.mobile" />
            <Button
              class="-primary -rounded-sm"
              text="Modifier"
              @tap="openModal"
            />
            <Button
              class="-primary -rounded-sm"
              text="Supprimer votre profil"
              @tap="deleteUserProfile"
            />
          </StackLayout>
        </FlexboxLayout>
      </TabContentItem>
      <TabContentItem>
        <FlexboxLayout class="page">
          <StackLayout class="content">
            <Button
              class="-primary -rounded-sm"
              text="Scanner"
              @tap="scanQrCode"
            />
          </StackLayout>
        </FlexboxLayout>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<script>
import axios from "axios";
import Event from "./Event";
import Login from "./Login";
import Profile from "./Profile";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Camera from "nativescript-camera";
const BarcodeScanner = require("nativescript-barcodescanner").BarcodeScanner;
var barcodescanner = new BarcodeScanner();

export default {
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
      Camera.requestCameraPermissions()
        .then(() => {
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
        })
        .catch(e => {
          console.log("Error requesting permission");
        });
    },

    goToHome() {
      this.$store.commit("logout");
      this.$navigateTo(Login);
    },
    goToEvent(e) {
      console.log(typeof e);
      if (typeof e == "string") {
        console.log("C'est une chaine");
        this.$navigateTo(Event, {
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
        this.$navigateTo(Event, {
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
      axios
        .get("https://sfm-project.herokuapp.com/parties/", {
          headers: {
            Authorization: "Bearer " + this.$store.state.user_token
          }
        })
        .then(response => {
          console.log(response.data.events);
          this.events = response.data.events;
        })
        .catch(err => {
          console.log(err);
        });
    },

    deleteUserProfile() {
      dialogs
        .confirm({
          title: "Informations",
          message: "êtes-vous sur de vouloir supprimer votre compte ?",
          okButtonText: "Oui",
          cancelButtonText: "Non",
          neutralButtonText: "Annuler"
        })
        .then(result => {
          if (result) {
            axios
              .delete(
                "https://sfm-project.herokuapp.com/users/" +
                  this.$store.state.user.email,
                {
                  headers: {
                    Authorization: "Bearer " + this.$store.state.user_token
                  }
                }
              )
              .then(response => {
                console.log(response.data);
                this.goToHome();
              })
              .catch(err => {
                console.log(err);
              });
          }
          console.log("Dialog result: " + result);
        });
    },

    loadProfile() {
      axios
        .get(
          "https://sfm-project.herokuapp.com/users/user/" +
            this.$store.state.user.user_id,
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.user_token
            }
          }
        )
        .then(response => {
          console.log(response.data.user);
          this.user_profile = response.data.user;
        })
        .catch(err => {
          console.log(err);
        });
    },

    openModal() {
      this.$showModal(Profile).then(res => {
        this.loadProfile();
        console.log(res);
        if (res == true) {
          dialogs.alert({
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
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/purple";

.page {
  align-items: center;
}

.content {
  vertical-align: middle;
  flex-grow: 1;
}

label {
  text-align: center;
  font-size: 16;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
}

BottomNavigation TabStrip {
  background-color: #677bc4;
}

TabStrip TabStripItem {
  color: #c1c1c1;
}

TabStripItem label {
  font-size: 12;
}

TabStripItem image {
  font-size: 36;
}

TabStrip TabStripItem:active {
  color: #ffffff;
}

TabStrip TabStripItem:active label {
  color: #ffffff;
}

ActionBar.menu ActionItem {
  color: #ffffff;
  font-size: 6;
}
</style>
