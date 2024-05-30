<template>
  <div class="min-h-[30rem]">
    <table-list :headers="headers" :data="orders" :page-size="5">
      <template
        #tbl-row="{
          row: order,
          defaultTrClasses,
          defaultTdClasses,
          defaultTdContent,
        }"
      >
        <tr :class="defaultTrClasses">
          <td :class="defaultTdClasses">
            <div :class="defaultTdContent">
              {{ formatDate(order.orderDate) }}
            </div>
          </td>
          <td :class="defaultTdClasses">
            <router-link :to="{ name: 'order', params: { id: order.id } }">
              <span class="text-blue-500 underline text-md"
                ># {{ order.id }}</span
              >
            </router-link>
          </td>
        </tr>
      </template>
    </table-list>
  </div>
</template>

<script lang="ts">
import { Order } from "@/api/types";
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent, PropType } from "vue";
import * as dayjs from "dayjs";

export default defineComponent({
  name: "OrdersHyperlinks",
  props: {
    orders: {
      type: Array as PropType<Order[]>,
      required: true,
    },
  },
  components: {
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
  },
  setup() {
    const headers: TableHeaderDefinition[] = [
      {
        id: "orderDate",
        label: "Order Date",
      },
      {
        id: "id",
        label: "Order ID",
      },
    ];

    const formatDate = (date: Date) => {
      return dayjs.default(date).format("YYYY-MM-DD");
    };

    return { headers, formatDate };
  },
});
</script>
