<template>
  <div
    id="default-modal"
    :class="{ 'hidden overflow-x-hidden': !props.show }"
    class="flex backdrop-brightness-25 overflow-y-auto fixed h-full md:h-full top-0 left-0 right-0 md:inset-0 z-50 justify-center items-center"
  >
    <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
      <!-- Modal content -->
      <div class="bg-white rounded-lg shadow relative">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <h3 class="text-gray-900 text-xl lg:text-2xl font-semibold">
            <slot name="header"></slot>
          </h3>
          <button
            @click="onClose"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="default-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div>
          <slot name="body"></slot>
        </div>
        <!-- Modal footer -->
        <div
          v-if="slots.footer"
          class="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  name: "ModalDialog",
  props: {
    title: {
      type: String,
      required: false,
    },
    show: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emit: ["close"],
  setup(props, { slots, emit }) {
    const onClose = () => {
      emit("close");
    };

    watch(
      () => props.show,
      (value) => {
        if (value) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }
    );

    return { props, slots, onClose };
  },
});
</script>
