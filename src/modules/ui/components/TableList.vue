<template>
  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table class="min-w-full leading-normal">
        <table-list-header :headers="headers">
          <template
            v-for="header in headers"
            v-slot:[`${headerPrefix}${header.id}`]
          >
            <slot :name="`${headerPrefix}${header.id}`" :data="header"></slot>
          </template>
        </table-list-header>
        <table-list-data :headers="headers" :data="data">
          <div></div>
          <!-- <template v-for="header in headerPrefix" :key="header.toString()">
            <div>
              <template
                v-for="(row, rowIndex) in data"
                v-slot:[`${cellPrefix}${header.id}-${rowIndex}`]
              >
                <slot />
              </template>
            </div>
          </template> -->
        </table-list-data>
      </table>
      <!-- <table-list-navigation-buttons /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, PropType } from "vue";
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
    TableListHeader: defineAsyncComponent(
      () => import("@/modules/ui/components/TableListHeader.vue")
    ),
    TableListData: defineAsyncComponent(
      () => import("@/modules/ui/components/TableListData.vue")
    ),
    // TableListNavigationButtons: defineAsyncComponent(
    //   () => import("@/modules/ui/components/TableListNavigationButtons.vue")
    // ),
  },
  setup() {
    const headerPrefix = TableListConstants.HeaderPrefix;
    const cellPrefix = TableListConstants.CellPrefix;
    return { headerPrefix, cellPrefix };
  },
});
</script>
