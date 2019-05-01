<template>
  <div id="app">
    <v-app>
      <StickyNav />
      <FixedNav />
      <v-content>
        <v-container fluid>
          <router-view :key="$route.path" />
        </v-container>
      </v-content>
      <PageFooter />
    </v-app>
  </div>
</template>
<script>
import PageFooter from "@components/PageFooter";
import StickyNav from "@components/StickyNav";
import FixedNav from "@components/FixedNav";
export default {
  components: {
    PageFooter,
    StickyNav,
    FixedNav
  }
};
</script>
