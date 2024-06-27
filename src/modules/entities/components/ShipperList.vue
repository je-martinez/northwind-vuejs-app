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
      <generic-entity-item
        v-for="shipper in allShippers"
        :photo="shipper?.photos?.regular"
        :key="shipper.id"
        :title="shipper?.companyName"
        subtitle="Contact Phone"
        :description="shipper?.phone"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useShippers } from "@/modules/entities/composables";
import { useGridOrListToggle } from "@/modules/ui/composables";

export default defineComponent({
  name: "ShippersList",
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
        id: "phone",
        label: "Contact Phone",
      },
    ];
    const { allShippers } = useShippers();
    const { currentView, isList } = useGridOrListToggle();
    return { allShippers, currentView, isList, headers };
  },
});
</script>
