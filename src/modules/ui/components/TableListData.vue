<template>
  <tbody>
    <table-list-data-row
      v-for="row in data"
      :key="row.toString()"
      :headers="headers"
      :data="row"
    />
  </tbody>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, PropType } from "vue";
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
  components: {
    TableListDataRow: defineAsyncComponent(
      () => import("@/modules/ui/components/TableListDataRow.vue")
    ),
  },
  setup() {
    return {};
  },
});
</script>
