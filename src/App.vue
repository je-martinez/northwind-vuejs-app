<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  useCategories,
  useCustomers,
  useEmployees,
  useOrders,
  useProducts,
  useRegions,
  useShippers,
  useSuppliers,
} from "./modules/entities/composables";
export default defineComponent({
  name: "App",
  setup() {
    const { fetchCategories } = useCategories();
    const { fetchRegions } = useRegions();
    const { fetchShippers } = useShippers();
    const { fetchSuppliers } = useSuppliers();
    const { fetchCustomers } = useCustomers();
    const { fetchEmployees } = useEmployees();
    const { fetchOrders } = useOrders();
    const { fetchProducts } = useProducts();

    fetchCategories();
    fetchRegions();
    fetchSuppliers();
    fetchShippers();
    fetchCustomers();
    fetchEmployees();
    fetchOrders();
    fetchProducts();
    return {};
  },
});
</script>
