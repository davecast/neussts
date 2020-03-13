import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { VueSpinners } from "@saeris/vue-spinners";

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

Vue.prototype.$analytics = firebase.analytics();

Vue.use(VueSpinners);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
