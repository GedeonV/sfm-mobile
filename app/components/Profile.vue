<template>
  <Page width="500">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="text-error" :text="error"></Label>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            keyboardType="email"
            hint="Email"
            fontSize="18"
            v-model="user_profile.email"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            hint="First name"
            fontSize="18"
            v-model="user_profile.first_name"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            hint="Last name"
            fontSize="18"
            v-model="user_profile.last_name"
          />
        </StackLayout>
        <StackLayout marginBottom="25">
          <TextField
            class="input"
            hint="Numéro de téléphone"
            keyboardType="number"
            fontSize="18"
            v-model="user_profile.mobile"
          />
        </StackLayout>
        <Button
          text="Confirmer"
          class="-primary -rounded-sm"
          @tap="updateProfile"
        />
        <Button text="Annuler" class="-primary -rounded-sm" @tap="closeModal" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      error: "",
      user_profile: {},
      isGood: true
    };
  },
  methods: {
    updateProfile() {
      let data = {};
      data.first_name = this.user_profile.first_name;
      data.last_name = this.user_profile.last_name;
      data.email = this.user_profile.email;
      data.mobile = this.user_profile.mobile;
      axios
        .put(
          "https://sfm-project.herokuapp.com/users/user/" +
            this.$store.state.user.user_id,
          data,
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.user_token
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.$modal.close(this.isGood);
        })
        .catch(err => {
          console.log(err);
        });
    },
    closeModal() {
      this.$modal.close();
    }
  },
  computed: {},

  mounted() {
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
        this.user_profile = response.data.user;
      })
      .catch(err => {
        console.log(err);
      });
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
  width: 60%;
}

label {
  text-align: center;
  font-size: 16;
}
// Custom styles
</style>
