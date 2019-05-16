<template>
  <v-flex
    xs12
    sm6
    md4
    class="cart-summary"
  >
    <!--eslint-disable-next-line max-len-->
    <v-card :class="{ 'pa-4': true, 'ml-4': $vuetify.breakpoint.smAndUp, 'mt-4': $vuetify.breakpoint.xsOnly }">
      <h2>Cart summary</h2>
      <v-divider class="my-3" />
      <h2 class="mb-2">
        Total {{ cartTotal | currency }}
      </h2>
      <v-btn
        large
        color="blue-grey darken-4 white--text"
        class="elevation-0 mx-0"
      >
        Proceed To Checkout
      </v-btn>
    </v-card>
  </v-flex>
</template>
<script>
import { currency } from "@/filters";
import { CART_TOTAL } from "@/constants";
export default {
  name: "CartSummary",
  filters: { currency },
  computed: {
    cartTotal () {
      return this.$store.getters[`entities/items/${CART_TOTAL}`];
    }
  }
};
</script>
