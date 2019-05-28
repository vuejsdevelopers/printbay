<template>
  <v-text-field
    v-model.trim="value"
    :error-messages="[].concat(errors, externalErrors)"
    :name="name"
    label="Artist"
    @blur="validate"
    @focus="$emit('focus')"
  />
</template>
<script>
import { required } from "vuelidate/lib/validators";
import InputMixin from "@/mixins/InputMixin";
import { requiredMessage } from "@/helpers";
export default {
  name: "InputArtist",
  mixins: [InputMixin],
  data: () => ({
    name: "artist"
  }),
  validations: {
    value: { required }
  },
  methods: {
    validate () {
      this.errors = [];
      if (!this.$v.value.required) {
        this.errors.push(requiredMessage("Artist"));
      }
    }
  }
};
</script>
