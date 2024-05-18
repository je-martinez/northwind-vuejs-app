<template>
  <section>
    <section-title title="Explore our categories" />
    <category-list />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesView",
  components: {
    CategoryList: defineAsyncComponent(
      () => import("@/modules/entities/components/CategoryList.vue")
    ),
    SectionTitle: defineAsyncComponent(
      () => import("@/modules/ui/components/SectionTitle.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
