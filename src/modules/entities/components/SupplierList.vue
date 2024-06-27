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
        v-for="supplier in allSuppliers"
        :notFoundPlaceholder="true"
        :photo="supplier?.photos?.regular"
        :key="supplier.id"
        :title="supplier?.companyName"
        subtitle="Contact Information"
        :description="supplier?.contactName"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useSuppliers } from "@/modules/entities/composables";
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
    const { allSuppliers } = useSuppliers();
    const { currentView, isList } = useGridOrListToggle();
    return { allSuppliers, currentView, isList, headers };
  },
});
</script>
