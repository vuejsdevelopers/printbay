<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    :name="name"
    type="password"
    label="Password"
    @blur="validate"
  />
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
import InputMixin from "@/mixins/InputMixin";
import { minLengthMessage, requiredMessage } from "@/helpers";
/**
 * Password input for auth forms.
 * @version 1.0.0
 */
export default {
  name: "InputPassword",
  mixins: [InputMixin],
  data: () => ({
    name: "password"
  }),
  validations: {
    value: { required, minLength: minLength(6) }
  },
  methods: {
    validate () {
      this.errors = [];
      if (!this.$v.value.minLength) {
        this.errors.push(
          minLengthMessage("Password"),
          this.$v.value.$params.minLength.min
        );
      }
      if (!this.$v.value.required) {
        this.errors.push(requiredMessage("Password"));
      }
    }
  }
};
</script>
<docs>
  ### Usage example
  ```js
  <InputPassword
    :id="itemId"
    :model="ItemModel"
    :external-errors="APIErrors"
    @error="inputErrorStateChange"
  />
  ```
</docs>
