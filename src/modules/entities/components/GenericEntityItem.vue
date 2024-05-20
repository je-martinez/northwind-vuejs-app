<template>
  <div class="bg-white shadow w-full flex flex-col rounded-xl p-3">
    <div class="flex flex-row">
      <div v-if="hasRightSection || photo || notFoundPlaceholder" class="w-2/3">
        <slot name="left-section">
          <img
            v-if="photo"
            :src="photo"
            :alt="title"
            class="w-20 h-20 object-cover rounded-lg"
          />
          <img
            v-else
            src="@/assets/images/not-found.png"
            class="w-20 h-20 object-cover rounded-lg"
          />
        </slot>
        <slot name="bottom-left-section"></slot>
      </div>
      <div class="w-2/3">
        <slot name="right-section">
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
  name: "GenericEntityItem",
  props: {
    photo: {
      type: String,
      required: false,
    },
    notFoundPlaceholder: {
      type: Boolean,
      required: false,
      default: false,
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
  setup(props, { slots }) {
    return {
      hasRightSection: slots["right-section"],
    };
  },
});
</script>
