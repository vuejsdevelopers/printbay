<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    :name="name"
    label="Price"
    type="number"
    prefix="$"
    step="0.01"
    @blur="validate"
    @focus="$emit('focus')"
  />
</template>
<script>
import { required, minValue } from "vuelidate/lib/validators";
import InputMixin from "@/mixins/InputMixin";
import { requiredMessage } from "@/helpers";

/**
 * Price input for item forms.
 * @version 1.0.0
 */
export default {
  name: "InputPrice",
  mixins: [InputMixin],
  data: () => ({
    name: "price"
  }),
  validations: {
    value: { required, minValue: minValue(0.01) }
  },
  methods: {
    validate () {
      this.errors = [];
      if (!this.$v.value.minValue) {
        this.errors.push("Price must be at least 0.01.");
      }
      if (!this.$v.value.required) {
        this.errors.push(requiredMessage("Price"));
      }
    }
  }
};
</script>
<docs>
  ### Usage example
  ```js
  <InputPrice
    :id="itemId"
    :model="ItemModel"
    :external-errors="APIErrors"
    @error="inputErrorStateChange"
  />
  ```
</docs>
