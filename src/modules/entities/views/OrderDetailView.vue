<template>
  <section>
    <!-- Invoice Template -->
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg my-10">
      <!-- Header -->
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
      >
        <div class="mb-4 sm:mb-0">
          <h1 class="text-4xl font-bold text-gray-800">Invoice</h1>
          <p class="text-sm text-gray-600">Invoice #12345</p>
          <p class="text-sm text-gray-600">Date: June 18, 2024</p>
        </div>
        <div class="text-left sm:text-right">
          <h2 class="text-2xl font-semibold text-gray-800">Your Company</h2>
          <p class="text-sm text-gray-600">1234 Street Address</p>
          <p class="text-sm text-gray-600">City, State, ZIP</p>
          <p class="text-sm text-gray-600">Email: info@company.com</p>
          <p class="text-sm text-gray-600">Phone: (123) 456-7890</p>
        </div>
      </div>

      <!-- Bill To -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
        <p class="text-sm text-gray-600">Client Name</p>
        <p class="text-sm text-gray-600">Client Address</p>
        <p class="text-sm text-gray-600">City, State, ZIP</p>
        <p class="text-sm text-gray-600">Email: client@example.com</p>
      </div>

      <!-- Invoice Details -->
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
              <td
                class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
              >
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
              <td
                class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
              >
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

      <!-- Footer -->
      <div class="text-center text-sm text-gray-600">
        <p>Thank you for your business!</p>
        <p>
          If you have any questions about this invoice, please contact us at
          info@northwind.com
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useNorthwindStore } from "@/modules/entities/composables";
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderDetailView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {},
  setup(props) {
    const { getOrderById } = useNorthwindStore();

    const order = getOrderById(props.id);

    return { order };
  },
});
</script>

<style></style>
