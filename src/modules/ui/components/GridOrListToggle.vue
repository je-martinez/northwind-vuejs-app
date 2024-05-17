<template>
  <div
    class="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex"
  >
    <button
      :class="{ 'bg-white rounded-full': currentView === availableViews.grid }"
      class="inline-flex items-center focus:outline-none rounded-l-full px-4 py-2"
      id="grid"
      @click="toggleView(availableViews.grid)"
    >
      <Squares2X2Icon
        :class="{
          'bg-white text-gray-500': currentView === availableViews.grid,
        }"
        class="size-4 text-gray-400"
      />
      <span class="pl-2">Grid</span>
    </button>
    <button
      :class="{ 'bg-white rounded-full': currentView === availableViews.list }"
      class="inline-flex items-center focus:outline-none rounded-r-full px-4 py-2"
      id="list"
      @click="toggleView(availableViews.list)"
    >
      <ListBulletIcon
        :class="{
          'bg-white text-gray-500': currentView === availableViews.list,
        }"
        class="size-4 text-gray-400"
      />
      <span class="pl-2">List</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Squares2X2Icon, ListBulletIcon } from "@heroicons/vue/24/solid";
import { GridOrListConstants } from "../constants";

export default defineComponent({
  name: "GridOrListToggle",
  components: { Squares2X2Icon, ListBulletIcon },
  emits: ["update:currentView"],
  props: {
    currentView: {
      type: String as PropType<GridOrListConstants>,
      required: true,
    },
  },
  setup(_, { emit }) {
    const availableViews = ref({
      grid: GridOrListConstants.Grid,
      list: GridOrListConstants.List,
    });

    const toggleView = (view: GridOrListConstants) => {
      emit("update:currentView", view);
    };

    return { availableViews, toggleView };
  },
});
</script>
