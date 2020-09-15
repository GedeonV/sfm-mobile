import Vue from "nativescript-vue";
import Vuex from "vuex";
import localStorage from "nativescript-localstorage";

Vue.use(Vuex);

const NSVuexPersistent = store => {
    // Init hook.
    let storageStr = localStorage.getItem("ns-vuex-persistent");
    if (storageStr) {
        store.replaceState(JSON.parse(storageStr));
    }
    store.subscribe((mutation, state) => {
        // Suscribe hook.
        localStorage.setItem("ns-vuex-persistent", JSON.stringify(state));
    });
};

const vueStore = new Vuex.Store({
    state: { user: null, user_token: "" },
    mutations: {
        user(state, data) {
            state.user = data;
            state.user_token = data.token;
        },

        logout(state) {
            state.user = null;
            state.user_token = null;
        }
    },
    plugins: [NSVuexPersistent]
});

export default vueStore;
