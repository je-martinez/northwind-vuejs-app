<template>
  <section>
    <div
      :v-if="allCategories?.length > 0"
      class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <category-item
        v-for="category in allCategories"
        :key="category.id"
        :category="category"
      />
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
