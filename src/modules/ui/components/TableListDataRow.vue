<template>
  <tr>
    <td
      v-for="row_header in headers"
      :key="row_header.toString()"
      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
    >
      <slot :name="`cell-${row_header.id}`" :data="data[row_header.id]">
        <p class="text-gray-900 whitespace-no-wrap">
          {{ data[row_header.id] }}
        </p>
      </slot>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TableDataDefinition, TableHeaderDefinition } from "../types";

export default defineComponent({
  name: "TableListDataRow",
  props: {
    headers: {
      type: Array as PropType<TableHeaderDefinition[]>,
      required: true,
    },
    data: {
      type: Object as PropType<TableDataDefinition>,
      required: false,
    },
  },
});
</script>
