<template>
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }">
    <v-flex xs12>
      <h2 class="mb-3">
        You do not have access to this page.
      </h2>
      <router-link :to="{ name: ROUTE_NAME_HOME }">
        Return home
      </router-link>
    </v-flex>
  </v-layout>
</template>
<script>
import { ROUTE_NAME_HOME } from "@/constants";
export default {
  name: "Forbidden",
  data: () => ({
    ROUTE_NAME_HOME
  })
};
</script>
