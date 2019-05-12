<template>
  <form
    class="mx-5 my-4"
    name="login"
  >
    <InputEmail
      :id="id"
      ref="email"
      :external-errors="emailAPIErrors"
      @error="inputErrorStateChange"
    />
    <InputPassword
      :id="id"
      ref="password"
      :external-errors="passwordAPIErrors"
      @error="inputErrorStateChange"
    />
    <v-btn
      name="submit"
      color="blue-grey darken-4 white--text"
      class="elevation-0 mx-0"
      @click="submit"
    >
      Submit
    </v-btn>
  </form>
</template>
<script>
import AuthFormMixin from "@/mixins/AuthFormMixin";
export default {
  name: "LoginForm",
  mixins: [AuthFormMixin],
  methods: {
    async submit () {
      this.$refs.email.validate();
      this.$refs.password.validate();
      await this.$nextTick();
      if (!this.emailErrorState && !this.passwordErrorState) {
        // Login
      }
    }
  }
};
</script>
