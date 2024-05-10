<template>
  <div class="shadow w-full flex rounded-xl p-3 cursor-pointer">
    <div class="w-1/3">Logo</div>
    <div class="w-2/3">
      <h4 class="font-bold mb-3 text-md">{{ category.name }}</h4>
      <h3 class="text-gray-400 mb-3 text-xs">Description</h3>
      <p class="text-sm">
        {{ category.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Category } from "@/api/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CategoryItem",
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
