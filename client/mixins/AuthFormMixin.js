import InputEmail from "@components/InputEmail";
import InputPassword from "@components/InputPassword";
import Vue from "vue";

const strategies = Vue.config.optionMergeStrategies;
strategies.validations = strategies.methods;

export default {
  components: { InputEmail, InputPassword },
  data: () => ({
    email: null,
    emailAPIErrors: [],
    emailErrorState: false,
    password: null,
    passwordAPIErrors: [],
    passwordErrorState: false
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
