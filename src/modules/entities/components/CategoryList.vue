<template>
  <section>
    <grid-or-list-toggle
      class="mb-4"
      :currentView="currentView"
      @update:currentView="($event) => (currentView = $event)"
    />
    <table-list v-if="isList" :headers="headers" :data="allCategories" />
    <div
      v-else
      class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <generic-entity-item
        :key="category.id"
        v-for="category in allCategories"
        :photo="category?.photos?.regular"
        :title="category?.name"
        subtitle="Description"
        :description="category?.description"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { useGridOrListToggle } from "@/modules/ui/composables";
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent } from "vue";
import { useCategories } from "../composables";
export default defineComponent({
  name: "CategoryList",
  components: {
    GenericEntityItem: defineAsyncComponent(
      () => import("@/modules/entities/components/GenericEntityItem.vue")
    ),
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    GridOrListToggle: defineAsyncComponent(
      () => import("@/modules/ui/components/GridOrListToggle.vue")
    ),
  },
  setup() {
    const headers: TableHeaderDefinition[] = [
      {
        id: "name",
        label: "Name",
      },
      {
        id: "description",
        label: "Description",
      },
    ];

    const { allCategories } = useCategories();
    const { currentView, isList } = useGridOrListToggle();
    return { allCategories, currentView, isList, headers };
  },
});
</script>
