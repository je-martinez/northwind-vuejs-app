<template>
  <div
    class="w-full justify-self-center flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 md:w-80 lg:w-full lg:order-1"
  >
    <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
      <img :src="image" alt="" class="rounded-3xl object-cover w-20 h-20" />
      <div class="ml-5">
        <span class="block text-2xl font-semibold">{{ title }}</span>
      </div>
    </div>
    <ul class="mb-7 font-medium text-gray-500">
      <li class="flex text-lg mb-2">
        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
        <span class="ml-3">{{ description }}</span>
      </li>
    </ul>
    <router-link :to="{ name: id }">
      <a
        class="flex justify-center items-center bg-gray-800 rounded-xl py-5 px-4 text-center text-white text-xl"
      >
        Explore
        <img
          src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
          class="ml-2"
        />
      </a>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "EntityItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const router = useRouter();

    const navigateTo = () => {
      router.push({ name: props.id });
    };

    return { navigateTo };
  },
});
</script>
