/
<template>
  <section>
    <table-list :headers="headers" :data="allCustomers">
      <template
        #tbl-row="{
          row: customer,
          defaultTrClasses,
          defaultTdClasses,
          defaultTdContent,
        }"
      >
        <tr :class="defaultTrClasses">
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
    <modal-dialog :show="show" @close="show = false">
      <template #header>Orders</template>
      <template #body>
        <orders-hyperlinks
          v-if="selectedCustomer?.orders"
          :orders="selectedCustomer.orders"
        />
      </template>
    </modal-dialog>
  </section>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent, ref } from "vue";
import { useNorthwindStore } from "@/modules/entities/composables";
import { Countries, Customer } from "@/api/types";
import { CountryCodes } from "@/constants";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "ShippersList",
  components: {
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    ModalDialog: defineAsyncComponent(
      () => import("@/modules/ui/components/ModalDialog.vue")
    ),
    CountryFlag,
    OrdersHyperlinks: defineAsyncComponent(
      () => import("@/modules/entities/components/OrdersHyperlinks.vue")
    ),
  },
  setup() {
    const selectedCustomer = ref<Customer | null>(null);
    const show = ref(false);
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
    const { allCustomers } = useNorthwindStore();
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
