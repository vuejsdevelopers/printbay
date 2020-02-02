<template>
  <v-layout
    :class="{ 'ma-4': $vuetify.breakpoint.smAndUp, 'ma-0': $vuetify.breakpoint.xsOnly }"
    column
  >
    <v-layout>
      <h1>Items For Sale</h1>
    </v-layout>
    <v-divider class="mt-2 mb-4" />
    <v-layout
      column
      class="profile-items"
    >
      <v-flex v-if="!items.length">
        You are not currently selling any items.
      </v-flex>
      <ProfileItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @del="del"
      />
    </v-layout>
  </v-layout>
</template>
<script>
import ProfileItem from "@components/ProfileItemSummary";
import Item from "@/store/models/Item";
export default {
  name: "Profile",
  components: { ProfileItem },
  computed: {
    items: () => Item.all()
  },
  created () {
    Item.$fetch();
  },
  methods: {
    del (id) {
      Item.delete(id);
    }
  }
};
</script>
