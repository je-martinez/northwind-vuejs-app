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
            <orders-hyperlinks
              v-if="customer.orders"
              :orders="customer.orders"
            />
          </td>
        </tr>
      </template>
    </table-list>
    <!-- <modal-dialog /> -->
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
    // ModalDialog: defineAsyncComponent(
    //   () => import("@/modules/ui/components/ModalDialog.vue")
    // ),
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
