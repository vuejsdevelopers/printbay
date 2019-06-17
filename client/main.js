import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@assets/main.styl";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueAuth from "@websanova/vue-auth";
import VueAuthOptions from "@/auth";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.router = router;

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(VueAuth, VueAuthOptions);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount("#app");
