<template>
  <!-- Header -->
  <div
    class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
  >
    <div class="mb-4 sm:mb-0">
      <h1 class="text-4xl font-bold text-gray-800">Invoice</h1>
      <p class="text-sm text-gray-600">Invoice #12345</p>
      <p class="text-sm text-gray-600">Date: June 18, 2024</p>
    </div>
    <div class="text-left sm:text-right">
      <h2 class="text-2xl font-semibold text-gray-800">Your Company</h2>
      <p class="text-sm text-gray-600">1234 Street Address</p>
      <p class="text-sm text-gray-600">City, State, ZIP</p>
      <p class="text-sm text-gray-600">Email: info@company.com</p>
      <p class="text-sm text-gray-600">Phone: (123) 456-7890</p>
    </div>
  </div>

  <!-- Bill To -->
  <div class="mb-8">
    <h3 class="text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
    <p class="text-sm text-gray-600">Client Name</p>
    <p class="text-sm text-gray-600">Client Address</p>
    <p class="text-sm text-gray-600">City, State, ZIP</p>
    <p class="text-sm text-gray-600">Email: client@example.com</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderHeader",
  props: {},
});
</script>

<style></style>
