<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    :name="name"
    label="Image"
    @blur="validate"
    @focus="$emit('focus')"
  />
</template>
<script>
import { required, url } from "vuelidate/lib/validators";
import InputMixin from "@/mixins/InputMixin";
import { requiredMessage } from "@/helpers";
/**
 * Image input for item forms.
 * @version 1.0.0
 */
export default {
  name: "InputImage",
  mixins: [InputMixin],
  data: () => ({
    name: "image"
  }),
  validations: {
    value: { required, url }
  },
  methods: {
    validate () {
      this.errors = [];
      if (!this.$v.value.url) {
        this.errors.push("Must be a valid URL");
      }
      if (!this.$v.value.required) {
        this.errors.push(requiredMessage("Image"));
      }
    }
  }
};
</script>
<docs>
  ### Usage example
  ```js
  <InputImage
    :id="itemId"
    :model="ItemModel"
    :external-errors="APIErrors"
    @error="inputErrorStateChange"
  />
  ```
</docs>
