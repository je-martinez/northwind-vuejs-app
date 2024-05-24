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
        <orders-hyperlinks :orders="customer.orders" />
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
    OrdersHyperlinks: defineAsyncComponent(
      () => import("@/modules/entities/components/OrdersHyperlinks.vue")
    ),
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
