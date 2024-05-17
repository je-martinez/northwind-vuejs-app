<template>
  <generic-entity-card
    :photo="category?.photos?.regular"
    :title="category?.name"
    subtitle="Description"
    :description="category?.description"
  />
</template>

<script lang="ts">
import { Category } from "@/api/types";
import { defineAsyncComponent, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CategoryItem",
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
  components: {
    GenericEntityCard: defineAsyncComponent(
      () => import("@/modules/entities/components/GenericEntityCard.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
