<template>
  <v-footer height="auto">
    <v-card
      flat
      tile
      class="flex"
    >
      <v-card-text>
        <v-layout
          :class="{ 'pa-4': $vuetify.breakpoint.smAndUp, 'pa-2': $vuetify.breakpoint.xsOnly }"
          row
          wrap
        >
          <v-flex
            xs12
            sm8
            class="mb-3 pr-3"
          >
            <div class="body-2 mb-2">
              ABOUT
            </div>
            <div>
              <!--eslint-disable-next-line max-len-->
              Welcome to PrintBay, the best online store for buying prints of artistic masterpieces. Give your home or office a classy vibe with one our affordable prints. Best of all, we ship worldwide.
            </div>
          </v-flex>
          <v-flex
            xs12
            sm4
            class="mb-3 pr-3"
          >
            <div class="body-2 mb-2">
              LINKS
            </div>
            <ul>
              <li
                v-for="(link, i) in links"
                :key="i"
              >
                <router-link
                  :to="{ name: link.route }"
                  class="footer-link"
                >
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center sub-footer-text">
        &copy;{{ (new Date()).getFullYear() }} — <strong>PrintBay</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
import {
  ROUTE_NAME_CART,
  ROUTE_NAME_HOME,
  ROUTE_NAME_SELL,
  ROUTE_NAME_PROFILE
} from "@/constants";

/**
 * Footer for whole site.
 * @version 1.0.0
 */
export default {
  name: "PageFooter",
  computed: {
    links () {
      const links = [{ text: "Browse", route: ROUTE_NAME_HOME }];
      if (this.$auth.check("admin")) {
        links.push(
          { text: "Sell new item", route: ROUTE_NAME_SELL },
          { text: "Edit an item", route: ROUTE_NAME_PROFILE }
        );
      } else {
        links.push({ text: "Shopping cart", route: ROUTE_NAME_CART });
      }
      return links;
    }
  }
};
</script>
<style scoped lang="stylus">
  font-size = 12px;

  .footer-link
    color: #a5a5a5
    text-decoration: none
    font-size: font-size

  .sub-footer-text
    font-size: font-size

  ul
    list-style-type: none
</style>
<docs>
  ### Usage example
  ```js
  <PageFooter />
  ```
</docs>
