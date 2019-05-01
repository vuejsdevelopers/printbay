import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@assets/main.styl";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.router = router;

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount("#app");
