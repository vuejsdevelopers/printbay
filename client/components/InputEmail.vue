<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    :name="name"
    type="email"
    label="Email"
    @blur="validate"
  />
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import { requiredMessage } from "@/helpers";
import InputMixin from "@/mixins/InputMixin";
export default {
  name: "InputEmail",
  mixins: [InputMixin],
  data: () => ({
    name: "email"
  }),
  validations: {
    value: {
      required,
      email
    }
  },
  methods: {
    validate () {
      this.errors = [];
      if (!this.$v.value.email) {
        this.errors.push("Must provide a valid email");
      }
      if (!this.$v.value.required) {
        this.errors.push(requiredMessage("Email"));
      }
    }
  }
};
</script>
