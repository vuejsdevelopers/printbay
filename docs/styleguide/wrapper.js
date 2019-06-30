import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@assets/main.styl";
import data from "./data";
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
  component.name = "PreviewContainer";
  component.data = () => data;
  const store = new Vuex.Store(storeConfig);
  return {
    name: "Wrapper",
    render (h) {
      return h(
        "v-app",
        [ h(component) ]
      );
    },
    store,
    mounted () {
      createModels();
    }
  };
}
