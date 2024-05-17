import { computed, ref } from "vue";
import { GridOrListConstants } from "../constants";

export function useGridOrListToggle() {
  const currentView = ref(GridOrListConstants.Grid);
  const availableViews = ref({
    grid: GridOrListConstants.Grid,
    list: GridOrListConstants.List,
  });
  const toggleView = (view: GridOrListConstants) => {
    currentView.value = view;
  };
  const isGrid = computed(() => currentView.value === GridOrListConstants.Grid);
  const isList = computed(() => currentView.value === GridOrListConstants.List);
  return { currentView, toggleView, availableViews, isGrid, isList };
}
