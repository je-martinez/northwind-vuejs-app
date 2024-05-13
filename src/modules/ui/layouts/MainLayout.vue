<template>
  <MainLayoutHeader />
  <main class="container mx-auto px-6 md:px-0">
    <router-view />
  </main>
  <MainLayoutFooter />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    MainLayoutHeader: defineAsyncComponent(
      () => import("../components/MainLayoutHeader.vue")
    ),
    MainLayoutFooter: defineAsyncComponent(
      () => import("../components/MainLayoutFooter.vue")
    ),
  },
});
</script>
