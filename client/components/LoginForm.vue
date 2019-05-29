<template>
  <form
    class="mx-5 my-4"
    name="login"
  >
    <InputEmail
      :id="id"
      ref="email"
      :model="model"
      :external-errors="emailAPIErrors"
      @error="inputErrorStateChange"
    />
    <InputPassword
      :id="id"
      ref="password"
      :model="model"
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
        try {
          const { email, password } = this.model.find(this.id);
          const { data } = await this.$auth.login({
            data: {
              email,
              password
            }
          });
          this.$auth.user(data);
          this.model.delete(this.id);
        } catch (err) {
          if (err.response) {
            this.processAPIErrors(err);
          }
        }
      }
    }
  }
};
</script>
