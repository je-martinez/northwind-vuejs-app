/
<template>
  <section>
    <table-list
      :loading="!allCustomers || allCustomers?.length === 0"
      :loading-number-of-rows="15"
      :headers="headers"
      :data="allCustomers"
    >
      <template
        #tbl-row="{
          row: customer,
          defaultTrClasses,
          defaultTdClasses,
          defaultTdContent,
        }"
      >
        <tr class="animate-fadeIn" :class="defaultTrClasses">
          <td :class="defaultTdClasses">
            <country-flag :country="getFlag(customer?.address?.country)" />
          </td>
          <td :class="defaultTdClasses">
            <div :class="defaultTdContent">{{ customer.companyName }}</div>
          </td>
          <td :class="defaultTdClasses">
            <button
              v-if="customer.orders?.length"
              @click="selectCustomer(customer)"
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

    <template v-if="(selectedCustomer?.orders?.length ?? 0) > 0">
      <order-list-modal :orders="selectedCustomer?.orders" />
      {{ show }}
    </template>
  </section>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent, provide, ref } from "vue";
import { useCustomers } from "@/modules/entities/composables";
import { Countries, Customer } from "@/api/types";
import { CountryCodes } from "@/constants";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "ShippersList",
  components: {
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    CountryFlag,
    OrderListModal: defineAsyncComponent(
      () => import("@/modules/entities/components/OrderListModal.vue")
    ),
  },
  setup() {
    const selectedCustomer = ref<Customer | null>(null);
    const show = ref(false);
    const updateShow = (value: boolean) => {
      show.value = value;
    };
    provide("show", { show, updateShow });
    const headers: TableHeaderDefinition[] = [
      {
        id: "country",
        label: "Country",
      },
      {
        id: "companyName",
        label: "Company Name",
      },
      {
        id: "orders",
        label: "Orders",
      },
    ];
    const getFlag = (country: string) => {
      return CountryCodes.get(country as Countries);
    };
    const selectCustomer = (customer: Customer) => {
      selectedCustomer.value = customer;
      show.value = true;
    };
    const { allCustomers } = useCustomers();
    return {
      selectedCustomer,
      selectCustomer,
      show,
      allCustomers,
      headers,
      getFlag,
    };
  },
});
</script>
