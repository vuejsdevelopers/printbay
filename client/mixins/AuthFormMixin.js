import InputEmail from "@components/InputEmail";
import InputPassword from "@components/InputPassword";
import Vue from "vue";

const strategies = Vue.config.optionMergeStrategies;
strategies.validations = strategies.methods;

class Model {
  static find () {
    return {};
  };
  static update () {};
}

export default {
  components: { InputEmail, InputPassword },
  data: () => ({
    emailAPIErrors: [],
    emailErrorState: false,
    passwordAPIErrors: [],
    passwordErrorState: false,
    id: "",
    model: Model
  }),
  methods: {
    inputErrorStateChange (type, state) {
      this[`${type}ErrorState`] = state;
    },
    processAPIErrors (err) {
      for (const [key, value] of Object.entries(err.response.data.errors)) {
        this[`${key}APIErrors`].push(value.message);
        this[`${key}ErrorState`] = true;
      }
    }
  }
};
