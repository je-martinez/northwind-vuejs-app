<template>
  <section>
    <section-title title="Explore our Suppliers" />
    <supplier-list />
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
    SupplierList: defineAsyncComponent(
      () => import("@/modules/entities/components/SupplierList.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
