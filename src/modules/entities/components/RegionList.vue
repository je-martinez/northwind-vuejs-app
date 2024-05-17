<template>
  <grid-or-list-toggle
    class="mb-4"
    :currentView="currentView"
    @update:currentView="($event) => (currentView = $event)"
  />
  <table-list v-if="isList" :headers="headers" :data="allRegions">
    <template
      v-for="(region, index) in allRegions"
      :key="`tblc-territories-${index}`"
      v-slot:[`tblc-territories-${index}`]
    >
      <region-territories :territories="region.territories" />
    </template>
  </table-list>
  <div
    v-else
    class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
  >
    <region-item
      v-for="region in allRegions"
      :key="region.id"
      :region="region"
    />
  </div>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useNorthwindStore } from "@/modules/entities/composables";
import { useGridOrListToggle } from "@/modules/ui/composables";
export default defineComponent({
  name: "RegionList",
  components: {
    RegionItem: defineAsyncComponent(
      () => import("@/modules/entities/components/RegionItem.vue")
    ),
    RegionTerritories: defineAsyncComponent(
      () => import("@/modules/entities/components/RegionTerritories.vue")
    ),
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    GridOrListToggle: defineAsyncComponent(
      () => import("@/modules/ui/components/GridOrListToggle.vue")
    ),
  },
  setup() {
    const { allRegions } = useNorthwindStore();
    const { currentView, isList } = useGridOrListToggle();
    const headers: TableHeaderDefinition[] = [
      {
        id: "name",
        label: "Name",
      },
      {
        id: "territories",
        label: "Territories",
      },
    ];

    return { currentView, isList, allRegions, headers };
  },
});
</script>
