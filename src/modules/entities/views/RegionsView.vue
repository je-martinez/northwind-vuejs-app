<template>
  <section>
    <section-title title="Explore our Regions" />
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
    SectionTitle: defineAsyncComponent(
      () => import("@/modules/ui/components/SectionTitle.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>

<style styled></style>
