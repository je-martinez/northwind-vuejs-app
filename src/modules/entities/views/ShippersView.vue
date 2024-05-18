<template>
  <section>
    <section-title title="Explore our Shippers" />
    <shipper-list />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "ShippersView",
  components: {
    SectionTitle: defineAsyncComponent(
      () => import("@/modules/ui/components/SectionTitle.vue")
    ),
    ShipperList: defineAsyncComponent(
      () => import("@/modules/entities/components/ShipperList.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
