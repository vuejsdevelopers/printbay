<template>
  <v-toolbar
    class="fixed-nav"
    flat
    dark
    color="pink darken-1"
  >
    <img
      src="/public/logo.png"
    >
    <v-toolbar-title>
      <router-link
        :to="{ name: ROUTE_NAME_HOME }"
        class="white--text"
      >
        PrintBay
      </router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>
<script>
import { ROUTE_NAME_HOME } from "@/constants";
export default {
  name: "FixedNav",
  data: () => ({ ROUTE_NAME_HOME })
};
</script>
<style scoped lang="stylus">
  .fixed-nav
    img
      height: 34px;
    a
      text-decoration: none;
      font-weight: 900;
</style>
