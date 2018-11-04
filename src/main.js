// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#00B8D4",
    secondary: "#0097A7",
    accent: "#FF7043",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
