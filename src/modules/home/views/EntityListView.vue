<template>
  <section>
    <section-title title="Explore our database" />
    <div
      class="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <EntityItem
        v-for="entity in entityList"
        :key="entity.id"
        :id="entity.id"
        :title="entity.name"
        :description="entity.description"
        :image="entity.image"
      />
    </div>
    <hr class="w-40 my-14 border-4 rounded-md sm:mx-0 mx-auto" />
  </section>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from "vue";
import type { EntityItem } from "../types";
import { EntityList } from "../constants";

export default defineComponent({
  name: "EntitiesAvailableView",
  emits: ["show-entity"],
  components: {
    EntityItem: defineAsyncComponent(
      () => import("../components/EntityItem.vue")
    ),
    SectionTitle: defineAsyncComponent(
      () => import("@/modules/ui/components/SectionTitle.vue")
    ),
  },
  setup() {
    return { entityList: computed<EntityItem[]>(() => EntityList) };
  },
});
</script>
