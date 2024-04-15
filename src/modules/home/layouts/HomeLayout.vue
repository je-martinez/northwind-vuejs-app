<template>
  <HomeHeader />
  <main class="py-16 container mx-auto px-6 md:px-0">
    <router-view />
  </main>
  <HomeFooter />
</template>

<script setup lang="ts">
import HomeHeader from "../components/HomeHeader.vue";
import HomeFooter from "../components/HomeFooter.vue";
</script>

<style></style>
