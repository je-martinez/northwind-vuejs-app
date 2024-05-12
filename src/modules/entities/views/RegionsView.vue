<template>
  <section>
    <h1 class="text-3xl font-bold text-gray-600 my-10">Explore our Regions</h1>
    <region-list />
  </section>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "RegionsView",
  components: {
    RegionList: defineAsyncComponent(
      () => import("@/modules/entities/components/RegionList.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>

<style styled></style>
