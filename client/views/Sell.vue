<template>
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }">
    <v-flex
      sm8
      offset-sm2
    >
      <h1 class="mb-3">
        {{ title }}
      </h1>
      <v-divider class="mt-2 mb-4" />
      <v-card>
        <ItemForm
          :id="$route.params.id"
        />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import ItemForm from "@components/ItemForm";
export default {
  name: "Sell",
  components: {
    ItemForm
  },
  computed: {
    title () {
      return this.$route.params.id ? "Edit item" : "Sell new item";
    }
  }
};
</script>
