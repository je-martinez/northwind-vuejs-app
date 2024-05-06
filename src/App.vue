<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNorthwind } from "./modules/entities/composables";
export default defineComponent({
  name: "App",
  setup() {
    const { fetchCategories } = useNorthwind();
    fetchCategories();
    return {};
  },
});
</script>
