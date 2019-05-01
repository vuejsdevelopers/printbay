<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    name="image"
    label="Image"
    @blur="validate"
    @focus="$emit('focus')"
  />
</template>
<script>
import { required, url } from "vuelidate/lib/validators";
import InputMixin from "@/mixins/InputMixin";
import { requiredMessage } from "@/helpers";
export default {
  name: "InputImage",
  mixins: [InputMixin],
  data: () => ({
    name: "description"
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
