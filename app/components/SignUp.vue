<template>
  <Page>
    <ActionBar title="Inscription" class="menu" fontSize="24">
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="goToLogin"
      />
    </ActionBar>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="text-error" :text="error" />
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            keyboardType="email"
            hint="Email"
            fontSize="18"
            v-model="email"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            hint="Prénom"
            fontSize="18"
            v-model="first_name"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            hint="Nom"
            fontSize="18"
            v-model="last_name"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            ref="password"
            hint="Mot de passe"
            secure="true"
            fontSize="18"
            v-model="password"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            ref="password"
            hint="Confimer mot de passe"
            secure="true"
            fontSize="18"
            v-model="check_password"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            hint="Numéro de téléphone"
            keyboardType="number"
            fontSize="18"
            v-model="mobile"
          />
        </StackLayout>
        <Button class="-primary" text="S'inscrire" @tap="submit" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import axios from "axios";
import Login from "./Login";
export default {
  name: "SignUp",
  components: {
    Login
  },
  data() {
    return {
      error: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      check_password: "",
      mobile: "",
      patternEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      emailPattern: false,
      isValide: false
    };
  },
  methods: {
    goToLogin() {
      this.$navigateTo(Login);
    },

    validateForm() {
      this.emailPattern = this.patternEmail.test(this.email);
      if (this.emailPattern) {
        this.isValide = true;
        this.error = "";
      } else {
        this.error = "L'email n'est pas au bon format";
        this.isValide = false;
      }
    },
    submit() {
      let data = {};
      data.email = this.email;
      data.first_name = this.first_name;
      data.last_name = this.last_name;
      data.password = this.password;
      data.mobile = this.mobile;
      this.validateForm();
      if (this.isValide) {
        if (this.password == this.check_password) {
          axios
            .post("https://sfm-project.herokuapp.com/users/register", data)
            .then(response => {
              if (response.data.erreur) {
                alert({
                  title: "Informations",
                  message: "Email déjà utilisée",
                  okButtonText: "Ok"
                });
              } else {
                let dialogs = require("tns-core-modules/ui/dialogs");
                dialogs
                  .alert({
                    title: "Informations",
                    message: "Votre compte a bien été enregistré",
                    okButtonText: "Ok"
                  })
                  .then(e => {
                    this.goToLogin();
                  });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          this.error = "Les mots de passe ne correspondent pas";
        }
      }
    }
  }
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
  text-align: center;
}

label {
  text-align: center;
  font-size: 16;
}
</style>
