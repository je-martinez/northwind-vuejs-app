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
      <tbody v-if="order.details?.length > 0">
        <tr
          v-for="item of order.details"
          :key="`order-${order.id}-row-${item.productId}`"
        >
          <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
            {{ item?.product?.name }}
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedNumber(item.quantity) }}
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedCurrency(item.unitPrice) }}
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            {{ getFormattedCurrency(item.quantity * item.unitPrice) }}
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
            {{ getFormattedCurrency(subTotal) }}
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
            {{ getFormattedCurrency(tax) }}
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
            {{ getFormattedCurrency(total) }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { Order } from "@/api/types";
import { computed, defineComponent, PropType } from "vue";
import { useIntl } from "vue-intl";
import { ORDER_TAX_PERCENTAGE } from "@/modules/entities/constants";

export default defineComponent({
  name: "OrderDetail",
  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
  },
  setup(props) {
    const intl = useIntl();

    const getFormattedCurrency = (value: number) => {
      return intl.formatNumber(value, { style: "currency", currency: "USD" });
    };

    const getFormattedNumber = (value: number) => {
      return intl.formatNumber(value, {
        minimumFractionDigits: 2,
      });
    };

    const subTotal = computed(() => {
      return props.order.details?.reduce((acc, item) => {
        return acc + item.quantity * item.unitPrice;
      }, 0);
    });

    const tax = computed(() => {
      return subTotal.value * ORDER_TAX_PERCENTAGE;
    });

    const total = computed(() => {
      return subTotal.value + tax.value;
    });

    return { getFormattedNumber, getFormattedCurrency, subTotal, tax, total };
  },
});
</script>

<style></style>
