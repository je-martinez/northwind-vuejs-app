<template>
  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.id"
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <slot :name="`${headerPrefix}${header.id}`">
                {{ header.label }}
              </slot>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="rowData in data" :key="rowData.id">
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
                  <div :class="defaultTdContent">
                    {{ rowData?.[header.id] }}
                  </div>
                </td>
              </tr>
            </slot>
          </template>
        </tbody>
      </table>
      <!-- <table-list-navigation-buttons /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
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
  },
  components: {
    // TableListDataRow: defineAsyncComponent(
    //   () => import("@/modules/ui/components/TableListDataRow.vue")
    // ),
    // TableListNavigationButtons: defineAsyncComponent(
    //   () => import("@/modules/ui/components/TableListNavigationButtons.vue")
    // ),
  },
  setup() {
    const headerPrefix = TableListConstants.HeaderPrefix;
    const rowName = TableListConstants.TableSlotName;
    const defaultTrClasses = "h-26";
    const defaultTdClasses =
      "px-5 py-5 border-b border-gray-200 bg-white text-sm";
    const defaultTdContent = "text-gray-900 whitespace-no-wrap";

    return {
      headerPrefix,
      rowName,
      defaultTrClasses,
      defaultTdClasses,
      defaultTdContent,
    };
  },
});
</script>
