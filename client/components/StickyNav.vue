<template>
  <v-toolbar
    dense
    dark
    fixed
    flat
    height="50px"
    color="pink darken-2"
  >
    <div>
      Hi! <router-link
        id="login"
        :to="{ name: ROUTE_NAME_LOGIN }"
        class="blue-grey--text text--darken-4"
      >
        Sign in
      </router-link> or <router-link
        id="register"
        :to="{ name: 'register' }"
        class="blue-grey--text text--darken-4"
      >
        register
      </router-link>.
    </div>
    <v-spacer />
    <v-btn
      :to="{ name: ROUTE_NAME_CART }"
      icon
    >
      <v-badge
        left
        color="secondary"
      >
        <span
          v-if="cartItems"
          slot="badge"
          class="text--white"
        >{{ cartItems }}</span>
        <v-icon>shopping_cart</v-icon>
      </v-badge>
    </v-btn>
  </v-toolbar>
</template>
<script>
import {
  ROUTE_NAME_LOGIN,
  ROUTE_NAME_CART
} from "@/constants";
export default {
  name: "StickyNav",
  data: () => ({
    search: null,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_CART
  }),
  computed: {
    cartItems () {
      return 0;
    }
  }
};
</script>
