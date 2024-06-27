<template>
  <table-list :headers="headers" :data="allProducts">
    <template
      #tbl-row="{
        row: product,
        defaultTrClasses,
        defaultTdClasses,
        defaultTdContent,
      }"
    >
      <tr :class="defaultTrClasses">
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">
            <img
              src="@/assets/images/product-not-available.png"
              class="object-cover h-32 w-32 rounded-xl"
            />
          </div>
        </td>
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">
            {{ product?.name }}
          </div>
        </td>
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">
            {{ getFormattedNumber(product?.unitsInStock) }}
          </div>
        </td>
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent">
            {{ getFormattedCurrency(product?.unitPrice) }}
          </div>
        </td>
        <td :class="defaultTdClasses">
          <div :class="defaultTdContent" class="align-middle">
            <CheckCircleIcon
              v-if="!product.discontinued"
              class="size-6 text-indigo-500"
            />
            <XCircleIcon v-else class="size-6 text-red-500" />
          </div>
        </td>
      </tr>
    </template>
  </table-list>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import { useProducts } from "../composables";
import { TableHeaderDefinition } from "@/modules/ui/types";
import { useHumanFormats } from "@/modules/ui/composables";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/vue/24/solid";

export default defineComponent({
  name: "ProductList",
  components: {
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    CheckCircleIcon,
    XCircleIcon,
  },
  setup() {
    const headers: TableHeaderDefinition[] = [
      {
        id: "photo",
        label: "Photo",
      },
      {
        id: "name",
        label: "Name",
      },
      {
        id: "unitsInStock",
        label: "Unit In Stock",
      },
      {
        id: "unitPrice",
        label: "Unit Price",
      },
      {
        id: "discontinued",
        label: "Discontinued",
      },
    ];
    const { allProducts } = useProducts();
    const { getFormattedNumber, getFormattedCurrency } = useHumanFormats();
    return { headers, allProducts, getFormattedNumber, getFormattedCurrency };
  },
});
</script>
