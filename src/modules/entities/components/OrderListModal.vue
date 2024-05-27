<template>
  <modal-dialog :show="show" @close="onClose">
    <template #header>Orders</template>
    <template #body>
      <div class="max-h-96 overflow-y-auto p-4">
        <orders-hyperlinks v-if="orders" :orders="orders" />
      </div>
    </template>
  </modal-dialog>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, PropType } from "vue";
import { Order } from "@/api/types";

export default defineComponent({
  name: "OrdersModal",
  props: {
    orders: {
      type: Array as PropType<Order[]>,
      required: false,
    },
    show: {
      type: Boolean,
      required: false,
      default: true,
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
  setup(_, { emit }) {
    const onClose = () => {
      emit("close");
    };
    return { onClose };
  },
});
</script>

<style></style>
