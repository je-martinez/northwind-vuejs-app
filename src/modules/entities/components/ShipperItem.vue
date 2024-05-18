<template>
  <generic-entity-item
    :title="shipper?.companyName"
    subtitle="Contact Phone"
    :description="shipper?.phone"
  />
</template>

<script lang="ts">
import { Shipper } from "@/api/types";
import { defineAsyncComponent, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ShipperItem",
  props: {
    shipper: {
      type: Object as PropType<Shipper>,
      required: true,
    },
  },
  components: {
    GenericEntityItem: defineAsyncComponent(
      () => import("@/modules/entities/components/GenericEntityItem.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
