<template>
  <div class="cursor-pointer">
    <div class="bg-gray-300 h-44">
      <img
        class="w-full max-h-44 transition-all duration-500 ease-in-out hover:opacity-30"
        v-if="image"
        :src="image"
      />
    </div>
    <h3 class="text-lg font-semibold text-gray-500 mt-2">
      <span class="text-gray-700">{{ title }}</span>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EntityItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
