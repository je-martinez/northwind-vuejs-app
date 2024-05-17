<template>
  <section>
    <h1 class="text-3xl font-bold text-gray-600 my-10">Explore our database</h1>
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
import type { EntityItem } from "../types";
import { computed, defineAsyncComponent, defineComponent } from "vue";
import { EntityList } from "../constants";

export default defineComponent({
  name: "EntitiesAvailableView",
  emits: ["show-entity"],
  components: {
    EntityItem: defineAsyncComponent(
      () => import("../components/EntityItem.vue")
    ),
  },
  setup() {
    return { entityList: computed<EntityItem[]>(() => EntityList) };
  },
});
</script>
