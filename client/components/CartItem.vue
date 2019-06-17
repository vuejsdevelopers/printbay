<template>
  <v-flex class="cart-item">
    <v-card class="mb-4">
      <v-container grid-list-lg>
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            md4
          >
            <v-img
              :src="item.image"
              height="225px"
            />
          </v-flex>
          <v-flex
            xs12
            md8
          >
            <v-layout
              column
              align-end
            >
              <v-flex>
                <v-layout row>
                  <v-flex
                    sm12
                    md7
                  >
                    <div class="title body-2 grey--text text--darken-1">
                      {{ item.title }} - {{ item.artist }}
                    </div>
                  </v-flex>
                  <v-flex
                    sm6
                    md2
                  >
                    <v-text-field
                      v-model="qty"
                      type="number"
                      label="Qty"
                    />
                  </v-flex>
                  <v-flex
                    sm6
                    md3
                    text-xs-right
                  >
                    <div class="headline">
                      {{ item.price * qty | currency }}
                    </div>
                    <div class="body-1">
                      ({{ item.price | currency }})
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex justify-end>
                <v-btn
                  color="blue-grey darken-4 white--text"
                  class="elevation-0 mx-0"
                  @click="removeFromCart"
                >
                  Remove
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
import { currency } from "@/filters";
import Item from "@/store/models/Item";
export default {
  name: "CartItem",
  filters: { currency },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    item () {
      return Item.find(this.id);
    },
    qty: {
      get () {
        return Item.find(this.id).cart;
      },
      set (val) {
        if (val !== "0" && val !== "") {
          Item.update({
            where: this.id,
            data (item) {
              item.cart = parseInt(val);
            }
          });
        }
      }
    }
  },
  methods: {
    removeFromCart () {
      Item.update({
        where: this.id,
        data: {
          cart: 0
        }
      });
    }
  }
};
</script>
