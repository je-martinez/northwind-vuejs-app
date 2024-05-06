<template>
  <div class="shadow w-full flex rounded-xl p-3">
    <div class="w-1/3">Logo</div>
    <div class="w-2/3">
      <h4 class="font-bold mb-3 text-md">Hola</h4>
      <h3 class="text-gray-400 mb-3 text-xs">Category</h3>
      <p class="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet,
        ut fugiat libero, ratione quas fuga dicta delectus necessitatibus quos,
        consectetur facere modi aspernatur consequatur sed obcaecati neque
        perferendis soluta!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryItem",
  setup() {
    return {};
  },
});
</script>
