<template>
  <div
    class="hero min-h-screen bg-gradient-to-r from-teal-400 to-sky-500 flex flex-col justify-center items-center px-4"
  >
    <h1 class="text-5xl font-bold text-white mb-8">
      Welcome to the Northwind Database
    </h1>
    <p class="text-2xl text-gray-100 text-center px-16">
      Unleash the power of your data with the Northwind Database, a free and
      open-source sample database for developers and data enthusiasts.
    </p>
    <div class="flex justify-center mt-8">
      <a
        href="https://northwind.vercel.app"
        class="px-4 py-2 bg-white hover:bg-opacity-75 text-teal-500 font-bold rounded-md shadow-md"
        >Explore the Data</a
      >
      <a
        href="https://github.com/Microsoft/sql-server-samples/tree/master/samples/databases/northwind-pubs"
        class="px-4 py-2 ml-4 bg-teal-500 hover:bg-opacity-75 text-white font-bold rounded-md shadow-md"
        >Learn More</a
      >
    </div>
    <div class="mt-16">
      <img
        src="@/assets/images/logo-variant-2.jpg"
        alt="Northwind Database Logo"
        class="w-48 h-48 object-cover mx-auto rounded-full shadow-lg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppDescription",
  setup() {
    return {};
  },
});
</script>
