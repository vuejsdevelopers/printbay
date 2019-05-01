<template>
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }">
    <v-flex xs12>
      <h2 class="mb-3">
        There has been an error.
      </h2>
      <p>Please try again later.</p>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "InternalServerError"
};
</script>
