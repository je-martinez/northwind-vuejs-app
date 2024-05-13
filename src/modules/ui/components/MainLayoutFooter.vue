<template>
  <footer class="mb-6 px-6 md:px-0">
    <div class="flex justify-center container mx-auto space-x-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-500">northwind</h1>
        <p>
          Northwind Database App is a classic example often used in learning
          about databases and application development.
        </p>
        <span>© Northwind {{ new Date().getFullYear() }}.</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  nmae: "HomeFooter",
  setup() {
    return {};
  },
});
</script>
