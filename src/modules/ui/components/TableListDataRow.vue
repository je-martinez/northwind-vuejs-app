<template>
  <tr class="h-26">
    <td
      v-for="header in headers"
      :key="header?.toString()"
      :class="header?.cellClasses"
      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
    >
      <slot
        :name="`${cellPrefix}${header.id}-${rowIndex}`"
        :data="data?.[header.id]"
      >
        <p class="text-gray-900 whitespace-no-wrap">
          {{ data?.[header.id] }}
        </p>
      </slot>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TableDataDefinition, TableHeaderDefinition } from "../types";
import { TableListConstants } from "../constants";

export default defineComponent({
  name: "TableListDataRow",
  props: {
    rowIndex: {
      type: Number,
      required: true,
    },
    headers: {
      type: Array as PropType<TableHeaderDefinition[]>,
      required: true,
    },
    data: {
      type: Object as PropType<TableDataDefinition>,
      required: false,
    },
  },
  setup() {
    const cellPrefix = TableListConstants.CellPrefix;
    return { cellPrefix };
  },
});
</script>
