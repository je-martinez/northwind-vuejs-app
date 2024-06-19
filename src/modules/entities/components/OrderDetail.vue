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
      <tbody>
        <tr>
          <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
            Service/Product Description
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            2
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            $50.00
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            $100.00
          </td>
        </tr>
        <!-- Repeat for additional items -->
        <tr>
          <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
            Another Item
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            3
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            $75.00
          </td>
          <td
            class="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700"
          >
            $225.00
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
            $325.00
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
            $32.50
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
            $357.50
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderDetail",
  setup() {
    return {};
  },
});
</script>

<style></style>
