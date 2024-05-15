<template>
  <table-list :headers="headers" :data="data" />
  <div
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
import { useNorthwindStore } from "../composables";
export default defineComponent({
  name: "RegionList",
  components: {
    RegionItem: defineAsyncComponent(
      () => import("@/modules/entities/components/RegionItem.vue")
    ),
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
  },
  setup() {
    const { allRegions } = useNorthwindStore();
    const headers: TableHeaderDefinition[] = [
      {
        id: "name",
        label: "Name",
      },
      {
        id: "products",
        label: "Products",
      },
      {
        id: "created_at",
        label: "Created At",
      },
      {
        id: "qrt",
        label: "QRT",
      },
      {
        id: "status",
        label: "Status",
      },
    ];
    const data = [
      {
        name: "Alonzo Cox",
        products: "Admin",
        created_at: "Jan 18, 2020",
        qrt: "70",
        status: "Inactive",
      },
    ];
    return { allRegions, headers, data };
  },
});
</script>
