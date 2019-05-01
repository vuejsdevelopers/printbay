<template>
  <v-layout
    :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
    class="cart"
    column
  >
    <v-layout>
      <h1>Your PrintBay Shopping Cart</h1>
    </v-layout>
    <v-divider class="mt-2 mb-4" />
    <v-layout wrap>
      <v-flex
        xs12
        sm6
        md8
      >
        <v-layout
          v-if="cart.length"
          class="cart-items"
          column
        >
          <CartItem
            v-for="item in cart"
            :id="item.id"
            :key="item.id"
          />
        </v-layout>
        <v-alert
          v-else
          :value="true"
          type="warning"
        >
          Your cart is currently empty. <router-link :to="{ name: ROUTE_NAME_HOME }">
            Browse for items
          </router-link> first!
        </v-alert>
      </v-flex>
      <CartSummary />
    </v-layout>
  </v-layout>
</template>
<script>
import CartItem from "@components/CartItem";
import CartSummary from "@components/CartSummary";
import { ROUTE_NAME_LOGIN, ROUTE_NAME_HOME } from "@/constants";
export default {
  name: "Cart",
  components: {
    CartItem,
    CartSummary
  },
  data: () => ({
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_HOME
  }),
  computed: {
    cart () {
      return [];
    }
  }
};
</script>
