<template>
  <section>
    <div class="w-full grid grid-cols-3 gap-4">
      <category-item />
      <category-item />
      <category-item />
      <category-item />
      <category-item />
    </div>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  name: "CategoryList",
  components: {
    CategoryItem: defineAsyncComponent(
      () => import("@/modules/entities/components/CategoryItem.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
