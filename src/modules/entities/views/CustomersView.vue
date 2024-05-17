<template>
  <section>
    <section-title title="Explore our Customers" />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "CustomersView",
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
