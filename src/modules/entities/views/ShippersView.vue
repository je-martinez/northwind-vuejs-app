<template>
  <section>
    <section-title title="Explore our Shippers" />
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
  },
  setup() {
    return {};
  },
});
</script>
