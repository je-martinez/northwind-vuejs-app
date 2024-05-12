<template>
  <header>
    <nav class="p-6">
      <div class="flex justify-between items-center">
        <router-link :to="{ name: 'home' }">
          <h1 class="pr-6 border-r-2 text-2xl font-bold text-gray-500">
            northwind
          </h1>
        </router-link>
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
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
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
