<template>
  <section>
    <AppDescription />
    <h1 class="text-3xl font-bold text-gray-600 mb-10">Explore our database</h1>
    <div class="grid sm:grid-cols-3 gap-4 grid-cols-2">
      <EntityItem
        v-for="entity in entityList"
        :key="entity.id"
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
    AppDescription: defineAsyncComponent(
      () => import("../components/AppDescription.vue")
    ),
  },
  setup() {
    return { entityList: computed<EntityItem[]>(() => EntityList) };
  },
});
</script>
