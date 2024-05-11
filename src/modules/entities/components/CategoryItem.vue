<template>
  <div class="shadow w-full flex rounded-xl p-3">
    <div class="w-2/3">
      <img
        :v-if="category?.photos?.regular"
        :src="category?.photos?.regular"
        alt="category.name"
        class="w-20 h-20 object-cover rounded-lg"
      />
    </div>
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
