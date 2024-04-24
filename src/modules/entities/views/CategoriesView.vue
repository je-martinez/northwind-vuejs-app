<template>
  <div>
    <h1>Categories</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useNorthwind } from "../composables/useNorthwind";

export default defineComponent({
  name: "CategoriesView",
  setup() {
    const { fetchCategories } = useNorthwind();

    fetchCategories();

    return {};
  },
});
</script>

<style></style>
