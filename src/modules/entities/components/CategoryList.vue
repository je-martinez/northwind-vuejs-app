<template>
  <section>
    <grid-or-list-toggle
      class="mb-4"
      :currentView="currentView"
      @update:currentView="($event) => (currentView = $event)"
    />
    <table-list
      v-if="currentView === availableViews.list"
      :headers="headers"
      :data="allCategories"
    />
    <div
      v-else
      class="w-full grid gap-4 pb-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <category-item
        v-for="category in allCategories"
        :key="category.id"
        :category="category"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { GridOrListConstants } from "@/modules/ui/constants";
import { TableHeaderDefinition } from "@/modules/ui/types";
import { defineAsyncComponent, defineComponent, ref } from "vue";
import { useNorthwindStore } from "../composables";
export default defineComponent({
  name: "CategoryList",
  components: {
    CategoryItem: defineAsyncComponent(
      () => import("@/modules/entities/components/CategoryItem.vue")
    ),
    TableList: defineAsyncComponent(
      () => import("@/modules/ui/components/TableList.vue")
    ),
    GridOrListToggle: defineAsyncComponent(
      () => import("@/modules/ui/components/GridOrListToggle.vue")
    ),
  },
  setup() {
    const currentView = ref(GridOrListConstants.Grid);
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
    const availableViews = ref({
      grid: GridOrListConstants.Grid,
      list: GridOrListConstants.List,
    });
    const { allCategories } = useNorthwindStore();

    return { allCategories, currentView, availableViews, headers };
  },
});
</script>
