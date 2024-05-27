<template>
  <section>
    <table-list :headers="headers" :data="allEmployees">
      <template
        #tbl-row="{
          row: employee,
          defaultTrClasses,
          defaultTdClasses,
          defaultTdContent,
        }"
      >
        <tr :class="defaultTrClasses">
          <td :class="defaultTdClasses">
            <div :class="defaultTdContent">{{ employee.title }}</div>
          </td>
          <td :class="defaultTdClasses">
            <div :class="defaultTdContent">{{ employee.firstName }}</div>
          </td>
          <td :class="defaultTdClasses">
            <div :class="defaultTdContent">{{ employee.lastName }}</div>
          </td>
          <td :class="defaultTdClasses">
            <orders-hyperlinks
              v-if="employee.orders"
              :orders="employee.orders"
            />
          </td>
        </tr>
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
        id: "orders",
        label: "Orders",
      },
    ];
    const { allEmployees } = useNorthwindStore();
    return { allEmployees, headers };
  },
});
</script>
