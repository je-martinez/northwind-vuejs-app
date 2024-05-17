<template>
  <div
    v-for="({ name }, index) in territories"
    :key="`region-territory-${index}`"
    class="m-2 center relative inline-block select-none whitespace-nowrap rounded-full bg-gray-600 px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
  >
    <div class="absolute top-2/4 left-1 h-5 w-5 -translate-y-2/4">
      <MapPinIcon class="bg-gray-600" />
    </div>
    <div class="ml-4 mt-px">
      <p
        class="block font-sans text-xs capitalize leading-none text-white antialiased"
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Territory } from "@/api/types";
import { defineComponent, PropType } from "vue";
import { MapPinIcon } from "@heroicons/vue/24/solid";
export default defineComponent({
  name: "RegionTerritories",
  components: { MapPinIcon },
  props: {
    territories: {
      type: Array as PropType<Territory[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
