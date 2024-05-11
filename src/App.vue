<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNorthwindStore } from "./modules/entities/composables";
export default defineComponent({
  name: "App",
  setup() {
    const { fetchCategories } = useNorthwindStore();
    fetchCategories();
    return {};
  },
});
</script>
