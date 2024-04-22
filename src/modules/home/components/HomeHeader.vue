<template>
  <header>
    <nav class="p-6">
      <div class="flex justify-between items-center">
        <h1 class="pr-6 border-r-2 text-2xl font-bold text-gray-500">
          northwind
        </h1>
        <div class="flex justify-between flex-grow">
          <div class="flex ml-6 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-4 cursor-pointer text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              class="outline-none text-sm flex-grow"
              type="text"
              placeholder="Search for categories..."
            />
          </div>
        </div>
      </div>
    </nav>
    <!-- Section Hero -->
    <div
      class="container mx-auto bg-gray-400 h-96 rounded-md flex items-center"
    >
      <div class="sm:mx-20 text-gray-50 text-center sm:text-left">
        <h1 class="text-5xl font-bold mb-4">
          Northwind <br />
          Database App
        </h1>
        <p class="text-lg inline-block sm:block">
          Northwind Database App is a classic example often used in learning
          about databases and application development. It typically consists of
          a database schema representing a company's sales transactions,
          products, customers, and suppliers. The app allows users to perform
          various operations such as viewing, adding, updating, and deleting
          records in these categories. It might include features like generating
          sales reports, managing inventory, tracking orders, and analyzing
          customer trends. The goal is to provide a comprehensive system for
          managing the business operations of a fictional company named
          Northwind Trading.
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeHeader",
  setup() {
    return {};
  },
});
</script>

<style></style>
