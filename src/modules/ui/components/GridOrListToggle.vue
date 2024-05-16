<template>
  <div
    class="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex"
  >
    <button
      :class="{ active: currentView == availableViews.grid }"
      class="inline-flex items-center focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2"
      id="grid"
      @click="toggleView(availableViews.grid)"
    >
      <Squares2X2Icon class="size-4 text-blue-500" />
      <span class="pl-2">Grid</span>
    </button>
    <button
      :class="{ active: currentView === availableViews.list }"
      class="inline-flex items-center focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"
      id="list"
      @click="toggleView(availableViews.list)"
    >
      <ListBulletIcon class="size-4 text-blue-500" />
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

<style scoped>
/*@apply bg-white text-blue-400 rounded-full;*/
.active {
  background: white;
  border-radius: 9999px;
  color: #63b3ed;
}
</style>
