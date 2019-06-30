import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@assets/main.styl";

Vue.use(Vuetify);

export default function (component) {
  component.name = "PreviewContainer";
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
