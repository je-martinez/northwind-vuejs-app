<template>
  <section>
    <section-title title="Explore our Customers" />
    <customer-list />
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
    CustomerList: defineAsyncComponent(
      () => import("@/modules/entities/components/CustomerList.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
