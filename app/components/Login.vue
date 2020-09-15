<template>
  <Page @loaded="loaded">
    <ActionBar title="Connexion" class="menu" fontSize="24"> </ActionBar>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="header" text="Se connecter" />
        <Label class="text-error" :text="error" />
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            hint="Email"
            keyboardType="email"
            fontSize="18"
            v-model="email"
          />
        </StackLayout>

        <StackLayout marginBottom="25">
          <TextField
            class="input"
            ref="password"
            hint="Mot de passe"
            fontSize="18"
            secure="true"
            v-model="password"
          />
          <StackLayout />
        </StackLayout>
        <Button class="-primary -rounded-sm" text="Connexion" @tap="submit" />
        <Button
          class="-primary -rounded-sm"
          text="S'inscrire"
          @tap="goToSignUp"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import SignUp from "./SignUp";
import Panel from "./Panel";
import axios from "axios";
export default {
  name: "Login",
  components: {
    SignUp,
    Panel
  },
  data() {
    return {
      email: "gedeonv88@gmail.com",
      password: "1234",
      error: ""
    };
  },
  methods: {
    loaded() {
      if (this.$store.state.user) {
        this.goToPanel();
      }
    },

    goToSignUp() {
      this.$navigateTo(SignUp);
    },

    goToPanel() {
      this.$navigateTo(Panel).catch(error => console.log(error));
    },

    submit() {
      let log = {};
      log.email = this.email;
      log.password = this.password;
      if (this.email && this.password) {
        axios
          .post("https://sfm-project.herokuapp.com/users/login", log)
          .then(response => {
            if (response.data.error) {
              this.error = "Mauvais mot de passe";
            } else {
              console.log(response.data);
              this.$store.commit("user", response.data);
              this.goToPanel();
            }
          })
          .catch(error => {
            console.log(error.message);
            this.error = error.message;
          });
      } else {
        this.error = "Veuillez remplir les champs";
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
}
</style>
