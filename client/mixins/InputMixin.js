import { validationMixin } from "vuelidate";
import { EVENT_ERROR, EVENT_INPUT } from "@/constants";

export default {
  mixins: [validationMixin],
  model: {
    prop: "parentValue",
    event: "input"
  },
  props: {
    externalErrors: Array,
    parentValue: String
  },
  data: () => ({
    value: null,
    errors: []
  }),
  watch: {
    parentValue () {
      this.value = this.parentValue;
    },
    value () {
      this.$emit(EVENT_INPUT, this.value);
    },
    errors () {
      this.$emit(EVENT_ERROR, this.name, this.errors.length > 0);
    },
    externalErrors () {
      this.$v.value.$touch();
    }
  }
};
