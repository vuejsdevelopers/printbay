<template>
  <v-layout
    :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
    class="item"
  >
    <v-flex xs12>
      <v-card
        flat
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            sm6
            md4
          >
            <img :src="item.image">
          </v-flex>
          <v-flex
            :class="{ 'pl-4': $vuetify.breakpoint.smAndUp, 'pa-4': $vuetify.breakpoint.xsOnly }"
            xs12
            sm6
            md8
          >
            <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp, 'pb-3': $vuetify.breakpoint.xsOnly }">
              <h1 class="mb-2">
                {{ item.title }}
              </h1>
              <h3 class="mb-3 pink--text text--darken-1">
                {{ item.artist }}, {{ item.year }}
              </h3>
            </div>
            <v-divider />
            <v-layout>
              <v-flex
                xs12
                md8
                lg6
              >
                <v-responsive
                  color="grey lighten-4"
                  height="150px"
                >
                  <v-layout wrap>
                    <v-flex
                      sm12
                      md6
                      class="pa-3"
                    >
                      <div class="body-2 price">
                        Price: <span class="price ml-1 pink--text text--darken-1">{{ item.price | currency }}</span>
                      </div>
                    </v-flex>
                    <v-flex
                      sm12
                      md6
                      class="pa-3"
                    >
                      <v-btn
                        v-if="!$auth.check('admin')"
                        name="add-to-cart"
                        large
                        color="blue-grey darken-4 white--text"
                        class="elevation-0 ma-0"
                        @click="addToCart"
                      >
                        Add To Cart
                      </v-btn>
                      <v-btn
                        v-else
                        name="add-to-cart"
                        large
                        color="blue-grey darken-4 white--text"
                        class="elevation-0 ma-0"
                        :to="`/items/${item.id}/edit`"
                      >
                        Edit Item
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-responsive>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { currency } from "@/filters";
import Item from "@/store/models/Item";
export default {
  name: "Item",
  filters: { currency },
  computed: {
    item () {
      return Item.find(this.$route.params.id) || {};
    }
  },
  created () {
    if (!Item.find(this.$route.params.id)) {
      Item.$get({
        params: {
          id: this.$route.params.id
        }
      });
    }
  },
  methods: {
    addToCart () {
      Item.update({
        where: this.$route.params.id,
        data (item) {
          item.cart++;
        }
      });
    }
  }
};
</script>
<style scoped lang="stylus">
  .item
    img
      width: 100%;
      display: block;
  .price
    text-align: center
    span
      font-size: 2.2em;
</style>
