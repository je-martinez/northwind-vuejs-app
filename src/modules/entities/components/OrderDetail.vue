<template>
  <div class="mb-8 overflow-x-auto">
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th
            class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
          >
            Description
          </th>
          <th
            class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-right text-sm font-semibold text-gray-700"
          >
            Quantity
          </th>
          <th
            class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-right text-sm font-semibold text-gray-700"
          >
            Unit Price
          </th>
          <th
            class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-right text-sm font-semibold text-gray-700"
          >
            Total
          </th>
        </tr>
      </thead>
      <tbody v-if="order.detail?.length > 0">
        <tr
          v-for="item of order.detail"
          :key="`order-${order.orderNumber}-row-${item.productId}`"
        >
          <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
            {{ item?.productName }}
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedNumber(item.quantity) }}
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedCurrency(item.price) }}
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedCurrency(item.total) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td
            colspan="3"
            class="py-2 px-4 border-t border-gray-200 text-right text-sm font-semibold text-gray-700"
          >
            Subtotal
          </td>
          <td
            class="py-2 px-4 border-t border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedCurrency(order.total) }}
          </td>
        </tr>
        <tr>
          <td
            colspan="3"
            class="py-2 px-4 border-t border-gray-200 text-right text-sm font-semibold text-gray-700"
          >
            Tax (10%)
          </td>
          <td
            class="py-2 px-4 border-t border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedCurrency(order.taxes) }}
          </td>
        </tr>
        <tr>
          <td
            colspan="3"
            class="py-2 px-4 border-t border-gray-200 text-right text-sm font-semibold text-gray-700"
          >
            Total
          </td>
          <td
            class="py-2 px-4 border-t border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedCurrency(order.total) }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { OrderContent } from "../types";
import { useHumanFormats } from "@/modules/ui/composables";

export default defineComponent({
  name: "OrderDetail",
  props: {
    order: {
      type: Object as PropType<OrderContent>,
      required: true,
    },
  },
  setup() {
    const { getFormattedNumber, getFormattedCurrency } = useHumanFormats();
    return { getFormattedNumber, getFormattedCurrency };
  },
});
</script>

<style></style>
