import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@assets/main.styl";
import data from "./data";
import Vuex from "vuex";
import storeConfig from "@/store";
import createModels from "./createModels";

Vue.use(Vuetify);
Vue.use(Vuex);

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
