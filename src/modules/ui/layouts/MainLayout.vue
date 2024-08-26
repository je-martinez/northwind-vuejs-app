<template>
  <MainLayoutHeader />
  <!-- <main-layout-hero-section v-if="showHeroSection" />
  <main class="container mx-auto px-6 min-h-screen">
    <router-view />
  </main>
  <MainLayoutFooter /> -->
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import MainLayoutHeader from "../components/MainLayoutHeader.vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    MainLayoutHeader,
    // MainLayoutHeroSection: defineAsyncComponent(
    //   () => import("../components/MainLayoutHeroSection.vue")
    // ),
    // MainLayoutFooter: defineAsyncComponent(
    //   () => import("../components/MainLayoutFooter.vue")
    // ),
  },
  setup() {
    const { currentRoute } = useRouter();
    return {
      showHeroSection: computed(() => currentRoute.value.name === "home"),
    };
  },
});
</script>
