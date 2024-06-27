<template>
  <section>
    <!-- Invoice Template -->
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg my-10">
      <!-- Header -->
      <order-header v-if="orderHeader" :orderHeader="orderHeader" />

      <!-- Invoice Details -->
      <order-detail v-if="orderContent" :order="orderContent" />

      <!-- Footer -->
      <order-footer />
    </div>
  </section>
</template>

<script lang="ts">
import { useOrders } from "@/modules/entities/composables";
import { computed, defineAsyncComponent, defineComponent } from "vue";
import { orderMapper } from "@/modules/entities/mappers";

export default defineComponent({
  name: "OrderDetailView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    OrderHeader: defineAsyncComponent(
      () => import("@/modules/entities/components/OrderHeader.vue")
    ),
    OrderFooter: defineAsyncComponent(
      () => import("@/modules/entities/components/OrderFooter.vue")
    ),
    OrderDetail: defineAsyncComponent(
      () => import("@/modules/entities/components/OrderDetail.vue")
    ),
  },
  setup(props) {
    const { getOrderById } = useOrders();

    const order = getOrderById(props.id);

    const orderHeader = computed(() => orderMapper.toOrderHeader(order.value));
    const orderContent = computed(() =>
      orderMapper.toOrderContent(order.value)
    );

    return { orderHeader, orderContent };
  },
});
</script>

<style></style>
