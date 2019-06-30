import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@assets/main.styl";
import data from "./data";

Vue.use(Vuetify);

export default function (component) {
  component.name = "PreviewContainer";
  component.data = () => data;
  return {
    name: "Wrapper",
    render (h) {
      return h(
        "v-app",
        [ h(component) ]
      );
    }
  };
}
