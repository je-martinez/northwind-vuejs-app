<template>
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
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TableListConstants } from "../constants";
import { TableHeaderDefinition } from "../types";

export default defineComponent({
  name: "TableListHeader",
  props: {
    headers: {
      type: Array as PropType<TableHeaderDefinition[]>,
      required: true,
    },
  },
  setup() {
    const headerPrefix = TableListConstants.HeaderPrefix;
    return { headerPrefix };
  },
});
</script>
