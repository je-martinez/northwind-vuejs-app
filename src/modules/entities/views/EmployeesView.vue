<template>
  <section>
    <section-title title="Explore our Employees" />
    <employee-list />
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
    EmployeeList: defineAsyncComponent(
      () => import("@/modules/entities/components/EmployeeList.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
