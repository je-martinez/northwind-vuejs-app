<template>
  <section>
    <!-- Invoice Template -->
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg my-10">
      <!-- Header -->
      <order-header />

      <!-- Invoice Details -->
      <order-detail />

      <!-- Footer -->
      <order-footer />
    </div>
  </section>
</template>

<script lang="ts">
import { useNorthwindStore } from "@/modules/entities/composables";
import { defineAsyncComponent, defineComponent } from "vue";

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
    const { getOrderById } = useNorthwindStore();

    const order = getOrderById(props.id);

    return { order };
  },
});
</script>

<style></style>
