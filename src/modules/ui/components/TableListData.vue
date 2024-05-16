<template>
  <tbody>
    <tr v-for="(row, rowIndex) in data" :key="row.toString()">
      <td
        class="border-b border-gray-200 bg-white"
        v-for="header in headers"
        :key="header?.toString()"
      >
        <div class="w-full px-5 py-5 text-sm">
          <slot :name="`${cellPrefix}${header.id}-${rowIndex}`" :data="header">
            <p class="text-gray-900 whitespace-no-wrap">
              {{ row?.[header.id] }}
            </p>
          </slot>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TableListConstants } from "../constants";
import { TableHeaderDefinition, TableDataDefinition } from "../types";

export default defineComponent({
  name: "TableListData",
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
  components: {},
  setup() {
    const cellPrefix = TableListConstants.CellPrefix;
    return { cellPrefix };
  },
});
</script>
