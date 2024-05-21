/
<template>
  <section>
    <table-list :headers="headers" :data="allCustomers">
      <template
        v-for="(customer, index) in allCustomers"
        :key="customer.id"
        v-slot:[`tblc-country-${index}`]
      >
        <country-flag :country="getFlag(customer?.address?.country)" />
      </template>
      <template
        v-for="(customer, index) in allCustomers"
        :key="customer.id"
        v-slot:[`tblc-orders-${index}`]
      >
        <div
          class="grid grid-cols-4 h-full"
          v-if="(customer?.orders?.length ?? 0) > 0"
        >
          <div v-for="order in customer.orders" :key="order.id">
            <router-link :to="{ name: 'order', params: { id: order.id } }">
              <span class="text-blue-500 underline"># {{ order.id }}</span>
            </router-link>
          </div>
        </div>
        <template v-else>
          <div class="flex justify-center items-center h-28">
            <p class="text-sm italic">No orders availables</p>
          </div>
        </template>
      </template>
    </table-list>
  </section>
</template>

<script lang="ts">
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useNorthwindStore } from "@/modules/entities/composables";
import { Countries } from "@/api/types";
import { CountryCodes } from "@/constants";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "ShippersList",
  components: {
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    CountryFlag,
  },
  setup() {
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
    const { allCustomers } = useNorthwindStore();
    return { allCustomers, headers, getFlag };
  },
});
</script>
