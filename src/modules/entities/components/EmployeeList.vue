<template>
  <section>
    <table-list :headers="headers" :data="allEmployees">
      <template
        v-for="(employee, index) in allEmployees"
        :key="employee.id"
        v-slot:[`tblc-orders-${index}`]
      >
        <orders-hyperlinks
          v-if="employee.orders"
          :cols="4"
          :orders="employee.orders"
        />
      </template>
      <template
        v-for="(employee, index) in allEmployees"
        :key="employee.id"
        v-slot:[`tblc-territories-${index}`]
      >
        <div>
          <region-territories
            v-if="employee.territories"
            :territories="employee.territories"
          />
        </div>
      </template>
    </table-list>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import { useNorthwindStore } from "@/modules/entities/composables";
import { TableHeaderDefinition } from "@/modules/ui/types";

export default defineComponent({
  name: "EmployeeList",
  components: {
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
    return { allEmployees, headers };
  },
});
</script>
