<template>
  <div
    class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
  >
    <region-item
      v-for="region in allRegions"
      :key="region.id"
      :region="region"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import { useNorthwindStore } from "../composables";
export default defineComponent({
  name: "RegionList",
  components: {
    RegionItem: defineAsyncComponent(
      () => import("@/modules/entities/components/RegionItem.vue")
    ),
  },
  setup() {
    const { allRegions } = useNorthwindStore();
    return { allRegions };
  },
});
</script>

<style></style>
