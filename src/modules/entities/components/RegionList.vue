<template>
  <grid-or-list-toggle
    class="mb-4"
    :currentView="currentView"
    @update:currentView="($event) => (currentView = $event)"
  />
  <table-list v-if="isList" :headers="headers" :data="allRegions">
    <template
      #tbl-row="{
        row: region,
        defaultTrClasses,
        defaultTdClasses,
        defaultTdContent,
      }"
    >
      <tr :class="defaultTrClasses">
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">{{ region.name }}</div>
        </td>
        <td :class="defaultTdClasses">
          <region-territories :territories="region.territories" />
        </td>
      </tr>
    </template>
  </table-list>
  <div
    v-else
    class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
  >
    <generic-entity-item
      :key="region.id"
      v-for="region in allRegions"
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
  </div>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useRegions } from "@/modules/entities/composables";
import { useGridOrListToggle } from "@/modules/ui/composables";
export default defineComponent({
  name: "RegionList",
  components: {
    RegionTerritories: defineAsyncComponent(
      () => import("@/modules/entities/components/RegionTerritories.vue")
    ),
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    GridOrListToggle: defineAsyncComponent(
      () => import("@/modules/ui/components/GridOrListToggle.vue")
    ),
    GenericEntityItem: defineAsyncComponent(
      () => import("@/modules/entities/components/GenericEntityItem.vue")
    ),
  },
  setup() {
    const { allRegions } = useRegions();
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
