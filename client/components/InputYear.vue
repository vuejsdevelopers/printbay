<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    :name="name"
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
  data: () => ({
    name: "year"
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
