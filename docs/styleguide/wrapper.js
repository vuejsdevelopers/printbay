import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@assets/main.styl";
import previewContainer from "./previewContainer";
import Vuex from "vuex";
import storeConfig from "@/store";
import createModels from "./createModels";
import RouterLink from "./RouterLink";

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.component("RouterLink", RouterLink);

Vue.prototype.$route = {
  params: {
    id: null
  }
};

Vue.prototype.$auth = {
  check: () => false
};

export default function (component) {
  const store = new Vuex.Store(storeConfig);
  return {
    name: "Wrapper",
    render (h) {
      return h(
        "v-app",
        [ h(Object.assign(component, previewContainer)) ]
      );
    },
    store,
    mounted () {
      createModels();
    }
  };
}
