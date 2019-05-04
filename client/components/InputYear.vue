<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    name="year"
    label="Year"
    @blur="validate"
    @focus="$emit('focus')"
  />
</template>
<script>
import { required, numeric } from "vuelidate/lib/validators";
import InputMixin from "@/mixins/InputMixin";
import { requiredMessage } from "@/helpers";
export default {
  name: "InputYear",
  mixins: [InputMixin],
  props: {
    parentValue: Number
  },
  data: () => ({
    name: "description"
  }),
  validations: {
    value: { required, numeric }
  },
  methods: {
    validate () {
      this.errors = [];
      if (!this.$v.value.numeric) {
        this.errors.push("Year must be numeric");
      }
      if (!this.$v.value.required) {
        this.errors.push(requiredMessage("Year"));
      }
    }
  }
};
</script>
