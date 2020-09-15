import Vue from "nativescript-vue";
import Vuex from "vuex";
Vue.use(Vuex);

Vue.registerElement(
    "BarcodeScanner",
    () => require("nativescript-barcodescanner").BarcodeScannerView
);

import Login from "./components/Login";
import store from "./store/index";
import vueStore from "./store/index";
import Theme from "@nativescript/theme";

Theme.setMode(Theme.Dark);

new Vue({
    store: vueStore,
    render: h => h("frame", [h(Login)])
}).$start();
