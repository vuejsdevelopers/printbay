<template>
  <v-layout>
    <v-flex
      :class="{ 'my-5': $vuetify.breakpoint.smAndUp }"
      sm6
      offset-sm3
    >
      <v-card>
        <v-tabs
          icons-and-text
          centered
          color="grey lighten-5"
        >
          <v-tabs-slider color="pink darken-1" />
          <v-tab :to="{ name: ROUTE_NAME_LOGIN }">
            Login
            <v-icon>arrow_forward</v-icon>
          </v-tab>
          <v-tab :to="{ name: ROUTE_NAME_REGISTER }">
            Register
            <v-icon>add_circle_outline</v-icon>
          </v-tab>
          <v-tab-item value="/login">
            <LoginForm />
          </v-tab-item>
          <v-tab-item value="/register">
            <RegisterForm />
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import LoginForm from "@components/LoginForm";
import RegisterForm from "@components/RegisterForm";
import { ROUTE_NAME_LOGIN, ROUTE_NAME_REGISTER, TEMP_USER_ID } from "@/constants";
import User from "@/store/models/User";
export default {
  name: "Auth",
  components: {
    LoginForm,
    RegisterForm
  },
  data: () => ({
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_REGISTER
  }),
  created () {
    if (!User.find(TEMP_USER_ID)) {
      User.create({
        data: {
          id: TEMP_USER_ID
        }
      });
    }
  }
};
</script>
<style lang="stylus">
  .v-window
    overflow: hidden;
    position: relative;
  // Fix for issue https://github.com/vuetifyjs/vuetify/issues/6962
  .v-tabs .v-window__container
    height: auto !important;
</style>
