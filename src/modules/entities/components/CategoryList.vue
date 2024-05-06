<template>
  <section>
    <div
      :v-if="allCategories?.length > 0"
      class="w-full grid grid-cols-3 gap-4"
    >
      <category-item v-for="category in allCategories" :key="category.id" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import { useNorthwind } from "../composables";
export default defineComponent({
  name: "CategoryList",
  components: {
    CategoryItem: defineAsyncComponent(
      () => import("@/modules/entities/components/CategoryItem.vue")
    ),
  },
  setup() {
    const { allCategories } = useNorthwind();

    return { allCategories };
  },
});
</script>
