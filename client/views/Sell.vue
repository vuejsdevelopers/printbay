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
        <ItemForm />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import ItemForm from "@components/ItemForm";
import Item from "@/store/models/Item";
import { TEMP_ITEM_ID } from "@/constants";

export default {
  name: "Sell",
  components: {
    ItemForm
  },
  computed: {
    title () {
      return this.$route.params.id ? "Edit item" : "Sell new item";
    }
  },
  created () {
    Item.create({ data: { id: TEMP_ITEM_ID } });
  }
};
</script>
