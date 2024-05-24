<template>
  <section>
    <grid-or-list-toggle
      class="mb-4"
      :currentView="currentView"
      @update:currentView="($event) => (currentView = $event)"
    />
    <table-list v-if="isList" :headers="headers" :data="allEmployees">
      <template
        v-for="(employee, index) in allEmployees"
        :key="employee.id"
        v-slot:[`tblc-orders-${index}`]
      >
        <orders-hyperlinks :cols="4" :orders="employee.orders" />
      </template>
      <template
        v-for="(employee, index) in allEmployees"
        :key="employee.id"
        v-slot:[`tblc-territories-${index}`]
      >
        <div>
          <region-territories :territories="employee.territories" />
        </div>
      </template>
    </table-list>
    <div
      v-else
      class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    ></div>
  </section>
</template>

<script lang="ts">
import { useGridOrListToggle } from "@/modules/ui/composables";
import { defineAsyncComponent, defineComponent } from "vue";
import { useNorthwindStore } from "@/modules/entities/composables";
import { TableHeaderDefinition } from "@/modules/ui/types";

export default defineComponent({
  name: "EmployeeList",
  components: {
    GridOrListToggle: defineAsyncComponent(
      () => import("@/modules/ui/components/GridOrListToggle.vue")
    ),
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    OrdersHyperlinks: defineAsyncComponent(
      () => import("@/modules/entities/components/OrdersHyperlinks.vue")
    ),
    RegionTerritories: defineAsyncComponent(
      () => import("@/modules/entities/components/RegionTerritories.vue")
    ),
  },
  setup() {
    const headers: TableHeaderDefinition[] = [
      {
        id: "title",
        label: "Title",
      },
      {
        id: "firstName",
        label: "First Name",
      },
      {
        id: "lastName",
        label: "Last Name",
      },
      {
        id: "territories",
        label: "Territories",
      },
      {
        id: "orders",
        label: "Orders",
      },
    ];
    const { allEmployees } = useNorthwindStore();
    const { currentView, isList } = useGridOrListToggle();
    return { allEmployees, currentView, isList, headers };
  },
});
</script>
