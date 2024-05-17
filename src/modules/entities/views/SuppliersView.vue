<template>
  <section>
    <section-title title="Explore our Suppliers" />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "SuppliersView",
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
