<template>
  <h1 class="text-3xl font-bold text-gray-600 my-10">{{ title }}</h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
