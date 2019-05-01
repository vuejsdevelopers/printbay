<template>
  <form
    class="mx-5 my-4"
    name="register"
  >
    <InputName
      ref="name"
      v-model="name"
      :external-errors="nameAPIErrors"
      @error="inputErrorStateChange"
    />
    <InputEmail
      ref="email"
      v-model="email"
      :external-errors="emailAPIErrors"
      @error="inputErrorStateChange"
    />
    <InputPassword
      ref="password"
      v-model="password"
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
export default {
  name: "RegisterForm",
  components: {
    InputName
  },
  mixins: [AuthFormMixin],
  data: () => ({
    name: "",
    nameAPIErrors: [],
    nameStateErrors: []
  }),
  methods: {
    submit () {
      this.$refs.name.validate();
      this.$refs.email.validate();
      this.$refs.password.validate();
      this.$nextTick(() => {
        if (
          !this.emailErrorState &&
          !this.passwordErrorState &&
          !this.nameErrorState
        ) {
          // Register
        }
      });
    }
  }
};
</script>
