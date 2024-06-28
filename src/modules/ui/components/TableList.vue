<template>
  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.id"
              :class="defaultThClasses"
            >
              <slot
                :name="headerName"
                :header="header"
                :defaultThClasses="defaultThClasses"
              >
                {{ header.label }}
              </slot>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-if="loading">
            <slot
              name="loading"
              :defaultTrClasses="defaultTrClasses"
              :defaultTdClasses="defaultTdClasses"
              :defaultTdContent="defaultTdContent"
            >
              <tr
                v-for="row of loadingRows"
                :key="`loading-rows-${row}`"
                :defaultTrClasses="defaultTrClasses"
              >
                <td
                  v-for="header in headers"
                  :key="header?.toString()"
                  :class="[header?.cellClasses, defaultTdClasses]"
                >
                  <div class="animate-pulse">
                    <div class="h-6 bg-slate-300 rounded col-span-2"></div>
                  </div>
                </td>
              </tr>
            </slot>
          </template>

          <template v-else v-for="rowData in currentElements" :key="rowData.id">
            <slot
              :name="rowName"
              :row="rowData"
              :defaultTrClasses="defaultTrClasses"
              :defaultTdClasses="defaultTdClasses"
              :defaultTdContent="defaultTdContent"
            >
              <tr :class="defaultTrClasses">
                <td
                  v-for="header in headers"
                  :key="header?.toString()"
                  :class="[header?.cellClasses, defaultTdClasses]"
                >
                  {{ rowData?.[header.id] }}
                </td>
              </tr>
            </slot>
          </template>
        </tbody>
      </table>
      <div
        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
      >
        <span class="text-xs xs:text-sm text-gray-900">
          Showing {{ showingEntries }} of {{ data?.length }} Entries
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <button
            @click="prevPage"
            class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          &nbsp; &nbsp;
          <button
            @click="nextPage"
            class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { TableHeaderDefinition, TableDataDefinition } from "../types";
import { TableListConstants } from "../constants";

export default defineComponent({
  name: "TableList",
  emits: ["next", "prev"],
  props: {
    headers: {
      type: Array as PropType<TableHeaderDefinition[]>,
      required: true,
    },
    data: {
      type: Array as PropType<TableDataDefinition[]>,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    loadingNumberOfRows: {
      type: Number,
      required: false,
      default: 3,
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  components: {},
  setup(props) {
    const headerName = TableListConstants.HeaderSlotName;
    const rowName = TableListConstants.TableSlotName;
    const defaultTrClasses = "h-26";
    const defaultTdClasses =
      "px-5 py-5 border-b border-gray-200 bg-white text-sm";
    const defaultTdContent = "text-gray-900 whitespace-no-wrap";
    const defaultThClasses =
      "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider";

    const currentPage = ref(1);
    const currentPageSize = ref(props.pageSize);
    const currentElements = computed(() => {
      const start = (currentPage.value - 1) * currentPageSize.value;
      const end = start + currentPageSize.value;
      return props?.data?.slice(start, end);
    });

    const numberOfPages = computed(() => {
      if (!props?.data?.length) return 1;
      return Math.ceil(props?.data?.length / currentPageSize.value);
    });

    const nextPage = () => {
      if (currentPage.value < numberOfPages.value) currentPage.value++;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const showingEntries = computed(() => {
      if (!currentElements.value?.length) return 0;
      if (currentPage.value === numberOfPages.value) return props?.data?.length;
      return currentPage.value * (currentElements.value?.length ?? 1);
    });

    const loadingRows = Array.from(
      { length: props.loadingNumberOfRows },
      (_, i) => i
    );

    return {
      headerName,
      rowName,
      defaultTrClasses,
      defaultTdClasses,
      defaultTdContent,
      defaultThClasses,
      currentElements,
      currentPage,
      currentPageSize,
      showingEntries,
      nextPage,
      prevPage,
      loadingRows,
    };
  },
});
</script>
