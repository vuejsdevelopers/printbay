import InputEmail from "@components/InputEmail";
import InputPassword from "@components/InputPassword";
import Vue from "vue";
import { TEMP_USER_ID } from "@/constants";
import User from "@/store/models/User";

const strategies = Vue.config.optionMergeStrategies;
strategies.validations = strategies.methods;

export default {
  components: { InputEmail, InputPassword },
  data: () => ({
    emailAPIErrors: [],
    emailErrorState: false,
    passwordAPIErrors: [],
    passwordErrorState: false,
    id: TEMP_USER_ID,
    model: User
  }),
  methods: {
    inputErrorStateChange (type, state) {
      this[`${type}ErrorState`] = state;
    },
    processAPIErrors (err) {
      if (err.response.data.errors) {
        for (const [key, value] of Object.entries(err.response.data.errors)) {
          this[`${key}APIErrors`].push(value.message);
          this[`${key}ErrorState`] = true;
        }
      } else {
        console.log(err);
      }
    }
  }
};
