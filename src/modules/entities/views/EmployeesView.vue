<template>
  <section>
    <section-title title="Explore our Employees" />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "EmployeesView",
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
