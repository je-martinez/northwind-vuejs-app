<template>
  <!-- Header -->
  <div
    class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
  >
    <div class="mb-4 sm:mb-0">
      <h1 class="text-4xl font-bold text-gray-800">Invoice</h1>
      <p class="text-sm text-gray-600">Invoice #{{ orderNumber }}</p>
      <p class="text-sm text-gray-600">Date: {{ formatedDate }}</p>
    </div>
    <div class="text-left sm:text-right">
      <div class="flex sm:justify-start mt-8 md:mt-0 md:justify-center">
        <img
          src="@/assets/images/logo-variant-3.png"
          class="object-cover h-16 w-16"
        />
      </div>
      <h2 class="text-2xl font-semibold text-gray-800">Northwind Inc.</h2>
      <p class="text-sm text-gray-600">1234 Street Address</p>
      <p class="text-sm text-gray-600">City, State, ZIP</p>
      <p class="text-sm text-gray-600">Email: info@northwind.com</p>
      <p class="text-sm text-gray-600">Phone: (123) 456-7890</p>
    </div>
  </div>

  <!-- Bill To -->
  <div class="mb-8">
    <h3 class="text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
    <p class="text-sm text-gray-600">{{ customerName }}</p>
    <p class="text-sm text-gray-600">{{ customerAddressLine1 }}</p>
    <p class="text-sm text-gray-600">{{ customerAddressLine2 }}</p>
    <p class="text-sm text-gray-600">Email: {{ customerEmail }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Order } from "@/api/types";
import {
  formatDate,
  removeSpacesAndSpecialCharacters,
} from "@/modules/entities/utils";

export default defineComponent({
  name: "OrderHeader",
  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
  },
  setup(props) {
    const formatedDate = formatDate(props.order.orderDate, "MMM DD, YYYY");

    const orderNumber = computed(() => props.order.id);

    const customerName = computed(
      () => props.order.customer?.companyName ?? ""
    );

    const customerAddressLine1 = computed(
      () => props?.order?.customer?.address?.street
    );

    const customerAddressLine2 = computed(() => {
      const { city, country, postalCode } =
        props?.order?.customer?.address ?? {};
      return `${city === "NULL" ? "N/A" : city} , ${
        country === "NULL" ? "N/A" : country
      }, ${postalCode === "NULL" ? "N/A" : postalCode}`;
    });

    const customerEmail = computed(() =>
      props.order.customer?.companyName
        ? `info@${removeSpacesAndSpecialCharacters(
            props.order.customer?.companyName ?? ""
          ).toLocaleLowerCase()}.com`
        : ""
    );

    return {
      orderNumber,
      customerName,
      customerAddressLine1,
      customerAddressLine2,
      customerEmail,
      formatedDate,
    };
  },
});
</script>
