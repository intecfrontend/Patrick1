import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollactive from "vue-scrollactive";

Vue.use(VueScrollactive);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
