<template>
  <v-flex
    xs12
    sm6
    md3
    class="item-summary"
  >
    <router-link :to="{ name: ROUTE_NAME_ITEM, params: { id: item.id }}">
      <v-card
        :class="{ 'elevation-0': !hovered, 'elevation-5': hovered }"
        height="100%"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <v-img
          :src="item.image"
          height="225px"
        />
        <v-card-title primary-title>
          <div>
            <h3 class="grey--text text--darken-1">
              {{ item.title }}
            </h3>
            <h4 class="pink--text text--darken-1">
              {{ item.artist }}
            </h4>
            <span class="body-1">{{ item.price | currency }}</span>
          </div>
        </v-card-title>
      </v-card>
    </router-link>
  </v-flex>
</template>
<script>
import { ROUTE_NAME_ITEM } from "@/constants";
import { currency } from "@/filters";
export default {
  name: "ItemSummary",
  filters: { currency },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    hovered: false,
    ROUTE_NAME_ITEM
  })
};
</script>
<style scoped lang="stylus">
.item-summary > a
  text-decoration: none;
</style>
