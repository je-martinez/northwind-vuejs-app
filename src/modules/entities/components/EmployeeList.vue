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
            <div :class="defaultTdContent">
              <img
                :src="employee.avatar"
                alt=""
                class="rounded-full w-16 h-16 object-cover"
              />
            </div>
          </td>
          <td :class="defaultTdClasses">
            <div :class="defaultTdContent">
              {{ `${employee.firstName} ${employee.lastName}` }}
            </div>
          </td>
          <td :class="defaultTdClasses">
            <div :class="defaultTdContent">{{ employee.title }}</div>
          </td>
          <td :class="defaultTdClasses">
            <button
              v-if="employee.orders?.length"
              @click="selectEmployee(employee)"
              class="px-4 py-2 bg-white hover:bg-opacity-75 text-gray-600 font-bold rounded-md shadow-md"
            >
              View Orders
            </button>
            <template v-else>
              <div class="text-sm italic">No orders availables</div>
            </template>
          </td>
        </tr>
      </template>
    </table-list>
    <template v-if="(selectedEmployee?.orders ?? [])?.length > 0">
      <order-list-modal :orders="selectedEmployee?.orders" />
    </template>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, provide, ref } from "vue";
import { useNorthwindStore } from "@/modules/entities/composables";
import { TableHeaderDefinition } from "@/modules/ui/types";
import { Employee } from "@/api/types";

export default defineComponent({
  name: "EmployeeList",
  components: {
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    OrderListModal: defineAsyncComponent(
      () => import("@/modules/entities/components/OrderListModal.vue")
    ),
  },
  setup() {
    const selectedEmployee = ref<Employee | null>(null);
    const show = ref(false);
    const updateShow = (value: boolean) => {
      show.value = value;
    };
    provide("show", { show, updateShow });
    const headers: TableHeaderDefinition[] = [
      {
        id: "avatar",
        label: "Photo",
      },
      {
        id: "fullName",
        label: "Full Name",
      },
      {
        id: "title",
        label: "Title",
      },
      {
        id: "orders",
        label: "Orders",
      },
    ];
    const { allEmployees } = useNorthwindStore();
    const selectEmployee = (employee: Employee) => {
      selectedEmployee.value = employee;
      show.value = true;
    };
    return { selectedEmployee, selectEmployee, allEmployees, show, headers };
  },
});
</script>
