<template>
  <v-flex>
    <v-card class="mb-4">
      <v-container grid-list-lg>
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            sm4
          >
            <v-img
              :src="item.image"
              height="225px"
            />
          </v-flex>
          <v-flex
            xs12
            sm8
          >
            <v-layout
              column
              justify-space-between
              align-end
            >
              <v-flex>
                <v-layout row>
                  <v-flex xs12>
                    <div class="body-2 grey--text text--darken-1">
                      {{ item.title }} - {{ item.artist }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-btn
                  :to="`/items/${item.id}/edit`"
                  name="edit"
                  color="blue-grey darken-4 white--text"
                  class="elevation-0 mr-0"
                >
                  Edit
                </v-btn>
                <v-btn
                  name="delete"
                  color="blue-grey darken-4 white--text"
                  class="elevation-0 mr-0"
                  @click="del"
                >
                  Delete
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
import {
  EVENT_DELETE,
  ROUTE_NAME_INTERNAL_SERVER_ERROR
} from "@/constants";
export default {
  name: "ProfileItemSummary",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    del () {
      //
    }
  }
};
</script>
