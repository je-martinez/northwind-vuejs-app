<template>
  <generic-entity-item
    :photo="region?.photos?.regular"
    :title="region.name"
    subtitle="Territories"
  >
    <template v-slot:description>
      <ul class="list-disc">
        <li
          class="text-xs"
          v-for="territory in region.territories"
          :key="territory.territoryId"
        >
          {{ territory.name }}
        </li>
      </ul>
    </template>
  </generic-entity-item>
</template>

<script lang="ts">
import { Region } from "@/api/types";
import { defineAsyncComponent, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "RegionItem",
  components: {
    GenericEntityItem: defineAsyncComponent(
      () => import("@/modules/entities/components/GenericEntityItem.vue")
    ),
  },
  props: {
    region: {
      type: Object as PropType<Region>,
      required: true,
    },
  },
});
</script>
