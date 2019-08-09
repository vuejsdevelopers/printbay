<template>
  <form
    class="mx-5 my-4"
    name="register"
  >
    <InputName
      :id="id"
      ref="name"
      :model="model"
      :external-errors="nameAPIErrors"
      @error="inputErrorStateChange"
    />
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
import InputName from "@components/InputName";
import User from "@/store/models/User";

/**
 * Registration form.
 * @version 1.0.0
 */
export default {
  name: "RegisterForm",
  components: {
    InputName
  },
  mixins: [AuthFormMixin],
  data: () => ({
    nameAPIErrors: [],
    nameStateErrors: []
  }),
  methods: {
    async submit () {
      this.$refs.name.validate();
      this.$refs.email.validate();
      this.$refs.password.validate();
      await this.$nextTick();
      if (
        !this.emailErrorState &&
        !this.passwordErrorState &&
        !this.nameErrorState
      ) {
        try {
          const { email, password, name } = this.model.find(this.id);
          const { data } = await this.$auth.register({
            data: {
              email,
              password,
              name
            }
          });
          await this.$auth.login({
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
<docs>
  ### Usage example
  ```js
  <RegisterForm />
  ```
</docs>
