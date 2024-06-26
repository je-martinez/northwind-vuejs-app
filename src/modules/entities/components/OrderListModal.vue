<template>
  <modal-dialog :show="show" @update:show="updateShow?.($event)">
    <template #header>Orders</template>
    <template #body>
      <div class="p-4">
        <orders-hyperlinks v-if="orders" :orders="orders" />
      </div>
    </template>
  </modal-dialog>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, inject, PropType } from "vue";
import { Order } from "@/api/types";

export default defineComponent({
  name: "OrdersModal",
  props: {
    orders: {
      type: Array as PropType<Order[]>,
      required: false,
    },
  },
  emits: ["close"],
  components: {
    OrdersHyperlinks: defineAsyncComponent(
      () => import("@/modules/entities/components/OrdersHyperlinks.vue")
    ),
    ModalDialog: defineAsyncComponent(
      () => import("@/modules/ui/components/ModalDialog.vue")
    ),
  },
  setup() {
    const { show, updateShow } =
      inject<{
        show: boolean;
        updateShow: (value: boolean) => void;
      }>("show") || {};
    return { show, updateShow };
  },
});
</script>

<style></style>
