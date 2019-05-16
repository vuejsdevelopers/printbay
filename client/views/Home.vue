<template>
  <!--eslint-disable-next-line max-len vue/max-attributes-per-line-->
  <v-layout :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
            column
  >
    <v-layout>
      <h1>Featured Prints</h1>
    </v-layout>
    <v-divider class="mt-2 mb-4" />
    <v-layout>
      <v-container
        fluid
        grid-list-lg
        class="px-0"
      >
        <v-layout
          row
          wrap
          class="item-summaries"
        >
          <ItemSummary
            v-for="item in items"
            :key="item.id"
            :item="item"
          />
        </v-layout>
      </v-container>
    </v-layout>
  </v-layout>
</template>
<script>
import ItemSummary from "@components/ItemSummary";
import Item from "@/store/models/Item";
export default {
  name: "Home",
  components: {
    ItemSummary
  },
  computed: {
    items: () => Item.all()
  },
  created () {
    Item.$fetch();
    // GET http://localhost:8080/items
  }
};
</script>
