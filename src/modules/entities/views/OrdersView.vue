<template>
  <section>
    <section-title title="Explore our Orders" />
    <order-list />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "OrdersView",
  components: {
    SectionTitle: defineAsyncComponent(
      () => import("@/modules/ui/components/SectionTitle.vue")
    ),
    OrderList: defineAsyncComponent(
      () => import("@/modules/entities/components/OrderList.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
