<template>
  <div>
    <div
      v-if="(orders?.length ?? 0) > 0"
      class="grid grid-cols-12 h-full"
      :style="`grid-template-columns: repeat(${cols}, minmax(0, 1fr));`"
    >
      <div v-for="order in orders" :key="order.id">
        <router-link :to="{ name: 'order', params: { id: order.id } }">
          <span class="text-blue-500 underline text-xs"># {{ order.id }}</span>
        </router-link>
      </div>
    </div>
    <template v-else>
      <div class="flex justify-center items-center h-28">
        <p class="text-xs italic">No orders availables</p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Order } from "@/api/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "OrdersHyperlinks",
  props: {
    orders: {
      type: Array as PropType<Order[]>,
      required: true,
    },
    cols: {
      type: Number,
      default: 4,
    },
  },
  setup() {
    return {};
  },
});
</script>
