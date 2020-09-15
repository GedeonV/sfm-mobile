<template>
  <Page width="500">
    <ListView
      @itemTap="closeModal"
      class="list-group"
      for="item in $props.songs"
    >
      <v-template>
        <GridLayout columns="*, *">
          <Label :text="item.title" col="0" />
          <Label :text="item.artist" col="1" />
        </GridLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import axios from "axios";
export default {
  name: "EventModal",
  props: ["songs"],
  data() {
    return {};
  },
  methods: {
    closeModal(e) {
      console.log("ITEM: " + e.item._id);
      this.$modal.close(e.item._id);
    }
  },
  computed: {},

  mounted() {
    console.log(this.songs);
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
