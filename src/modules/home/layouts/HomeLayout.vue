<template>
  <HomeHeader />
  <main class="py-16 container mx-auto px-6 md:px-0">
    <router-view />
  </main>
  <HomeFooter />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    HomeHeader: defineAsyncComponent(
      () => import("../components/HomeHeader.vue")
    ),
    HomeFooter: defineAsyncComponent(
      () => import("../components/HomeFooter.vue")
    ),
  },
});
</script>

<style></style>
