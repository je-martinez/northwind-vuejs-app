<template>
  <div class="shadow w-full flex rounded-xl p-3">
    <div class="w-2/3">
      <img
        v-if="region?.photos?.regular"
        :src="region.photos.regular"
        :alt="region.name"
        class="w-20 h-20 object-cover rounded-lg"
      />
    </div>
    <div class="w-2/3">
      <h4 class="font-bold mb-3 text-md">{{ region.name }}</h4>
      <h3 class="text-gray-400 mb-3 text-xs">Territories</h3>
      <ul class="list-disc">
        <li
          class="text-xs"
          v-for="territory in region.territories"
          :key="territory.territoryId"
        >
          {{ territory.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Region } from "@/api/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "RegionItem",
  props: {
    region: {
      type: Object as PropType<Region>,
      required: true,
    },
  },
});
</script>
