<template>
  <div
    class="animate-pulse bg-white shadow w-full flex flex-col rounded-xl p-3 max-h-32"
  >
    <div class="flex flex-row">
      <div class="w-2/3">
        <slot name="left-section">
          <div class="rounded-lg bg-slate-400 h-20 w-20"></div>
        </slot>
        <slot name="bottom-left-section"></slot>
      </div>
      <div class="w-2/3">
        <slot name="right-section">
          <slot name="title">
            <h4 class="font-bold mb-3 text-md h-6 pt-2">
              <div class="h-2 bg-slate-400 rounded"></div>
            </h4>
          </slot>
          <slot name="subtitle">
            <h3 class="text-gray-400 mb-3 text-xs h-4 pt-1">
              <div class="h-2 bg-slate-400 rounded"></div>
            </h3>
          </slot>
          <slot name="description">
            <div class="h-2 bg-slate-400 rounded mt-2"></div>
            <div class="h-2 bg-slate-400 rounded mt-2"></div>
            <div class="h-2 bg-slate-400 rounded mt-2"></div>
          </slot>
          <slot name="bottom-right-section"></slot>
        </slot>
      </div>
    </div>
    <slot name="bottom-section"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkeletonGenericEntityItem",
  setup() {
    return {};
  },
});
</script>
