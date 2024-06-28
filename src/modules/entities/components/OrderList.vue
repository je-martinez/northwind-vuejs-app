<template>
  <table-list
    :loading="!allOrders || allOrders?.length === 0"
    :loading-number-of-rows="15"
    :headers="headers"
    :data="allOrders"
  >
    <template
      #tbl-row="{
        row: order,
        defaultTrClasses,
        defaultTdClasses,
        defaultTdContent,
      }"
    >
      <tr class="animate-fadeIn" :class="defaultTrClasses">
        <td :class="defaultTdClasses">
          <router-link :to="{ name: 'order', params: { id: order.id } }">
            <span class="text-blue-500 underline text-md"
              ># {{ order.id }}</span
            >
          </router-link>
        </td>
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">
            {{ formatDate(order.orderDate) }}
          </div>
        </td>
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">
            {{ order.customer.companyName }}
          </div>
        </td>
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">
            {{ getTotal(order.id) }}
          </div>
        </td>
      </tr>
    </template>
  </table-list>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useOrders } from "../composables";
import { formatDate } from "@/modules/entities/utils";
import { useHumanFormats } from "@/modules/ui/composables";

export default defineComponent({
  name: "OrderList",
  components: {
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
  },
  setup() {
    const { allOrders, getOrderSummary } = useOrders();
    const headers: TableHeaderDefinition[] = [
      {
        id: "id",
        label: "#",
      },
      {
        id: "orderDate",
        label: "Date",
      },
      {
        id: "customer",
        label: "Company Name",
      },
      {
        id: "total",
        label: "Total",
      },
    ];

    const { getFormattedCurrency } = useHumanFormats();

    const getTotal = (orderId: number) => {
      const order = getOrderSummary(orderId);
      if (!order) return 0;
      return getFormattedCurrency(order.value.content.total);
    };

    return { allOrders, headers, getTotal, formatDate };
  },
});
</script>
