<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    :name="name"
    type="text"
    label="Title"
    @blur="validate"
    @focus="$emit('focus')"
  />
</template>
<script>
import { required } from "vuelidate/lib/validators";
import InputMixin from "@/mixins/InputMixin";
import { requiredMessage } from "@/helpers";

/**
 * Title input for item forms.
 * @version 1.0.0
 */
export default {
  name: "InputTitle",
  mixins: [InputMixin],
  data: () => ({
    name: "title"
  }),
  validations: {
    value: { required }
  },
  methods: {
    validate () {
      this.errors = [];
      if (!this.$v.value.required) {
        this.errors.push(requiredMessage("Title"));
      }
    }
  }
};
</script>
<docs>
  ### Usage example
  ```js
  <InputTitle
    :id="itemId"
    :model="ItemModel"
    :external-errors="APIErrors"
    @error="inputErrorStateChange"
  />
  ```
</docs>
