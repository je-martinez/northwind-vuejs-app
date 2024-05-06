<template>
  <!-- Section Hero -->
  <div class="container mx-auto bg-gray-400 h-96 rounded-md flex items-center">
    <div class="sm:mx-20 text-gray-50 text-center sm:text-left">
      <h1 class="text-5xl font-bold mb-4">
        Northwind <br />
        Database App
      </h1>
      <p class="text-lg inline-block sm:block">
        Northwind Database App is a classic example often used in learning about
        databases and application development. It typically consists of a
        database schema representing a company's sales transactions, products,
        customers, and suppliers. The app allows users to perform various
        operations such as viewing, adding, updating, and deleting records in
        these categories. It might include features like generating sales
        reports, managing inventory, tracking orders, and analyzing customer
        trends. The goal is to provide a comprehensive system for managing the
        business operations of a fictional company named Northwind Trading.
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppDescription",
  setup() {
    return {};
  },
});
</script>
