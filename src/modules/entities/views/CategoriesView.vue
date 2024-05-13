<template>
  <section>
    <h1 class="text-3xl font-bold text-gray-600 my-10">
      Explore our categories
    </h1>
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
  },
  setup() {
    return {};
  },
});
</script>
