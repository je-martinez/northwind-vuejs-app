<template>
  <section>
    <section-title title="Explore our Products" />
    <product-list />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "ProductsView",
  components: {
    SectionTitle: defineAsyncComponent(
      () => import("@/modules/ui/components/SectionTitle.vue")
    ),
    ProductList: defineAsyncComponent(
      () => import("@/modules/entities/components/ProductList.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
