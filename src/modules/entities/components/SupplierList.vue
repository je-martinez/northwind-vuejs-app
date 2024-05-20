<template>
  <section>
    <grid-or-list-toggle
      class="mb-4"
      :currentView="currentView"
      @update:currentView="($event) => (currentView = $event)"
    />
    <table-list v-if="isList" :headers="headers" :data="allSuppliers" />
    <div
      v-else
      class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <generic-entity-item
        v-for="shipper in allSuppliers"
        :key="shipper.id"
        :title="shipper?.companyName"
        subtitle="Contact Information"
        :description="shipper?.contactName"
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
  name: "SupplierList",
  components: {
    GridOrListToggle: defineAsyncComponent(
      () => import("@/modules/ui/components/GridOrListToggle.vue")
    ),
    GenericEntityItem: defineAsyncComponent(
      () => import("@/modules/entities/components/GenericEntityItem.vue")
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
        id: "contactName",
        label: "Contact Name",
      },
      {
        id: "contactTitle",
        label: "Contact Title",
      },
    ];
    const { allSuppliers } = useNorthwindStore();
    const { currentView, isList } = useGridOrListToggle();
    return { allSuppliers, currentView, isList, headers };
  },
});
</script>
