<template>
  <section>
    <grid-or-list-toggle
      class="mb-4"
      :currentView="currentView"
      @update:currentView="($event) => (currentView = $event)"
    />
    <table-list v-if="isList" :headers="headers" :data="allShippers" />
    <div
      v-else
      class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <shipper-item
        v-for="shipper in allShippers"
        :key="shipper.id"
        :shipper="shipper"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useNorthwindStore } from "@/modules/entities/composables";
import { useGridOrListToggle } from "@/modules/ui/composables";

export default defineComponent({
  name: "ShippersList",
  components: {
    GridOrListToggle: defineAsyncComponent(
      () => import("@/modules/ui/components/GridOrListToggle.vue")
    ),
    ShipperItem: defineAsyncComponent(
      () => import("@/modules/entities/components/ShipperItem.vue")
    ),
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
  },
  setup() {
    const headers: TableHeaderDefinition[] = [
      {
        id: "companyName",
        label: "Company Name",
      },
      {
        id: "phone",
        label: "Contact Phone",
      },
    ];
    const { allShippers } = useNorthwindStore();
    const { currentView, isList } = useGridOrListToggle();
    return { allShippers, currentView, isList, headers };
  },
});
</script>
