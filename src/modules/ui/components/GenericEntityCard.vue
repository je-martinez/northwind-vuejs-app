<template>
  <div class="bg-white shadow w-full flex rounded-xl p-3">
    <div class="w-2/3">
      <slot name="right-section">
        <img
          :v-if="photo"
          :src="photo"
          :alt="title"
          class="w-20 h-20 object-cover rounded-lg"
        />
      </slot>
    </div>
    <div class="w-2/3">
      <slot name="left-section">
        <slot name="title">
          <h4 class="font-bold mb-3 text-md">{{ title }}</h4>
        </slot>
        <slot name="subtitle">
          <h3 class="text-gray-400 mb-3 text-xs">{{ subtitle }}</h3>
        </slot>
        <slot name="description">
          <p class="text-sm">
            {{ description }}
          </p>
        </slot>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GenericEntityCard",
  props: {
    photo: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
