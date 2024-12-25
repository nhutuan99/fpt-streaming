<template>
  <ion-page>
    <HeaderLayout />
    <ion-content>
      <div class="p-5">
        <h1 class="font-bold text-[20px]">Nhập token</h1>
        <textarea
          rows="6"
          class="border w-full outline-none p-2"
          v-model="token"
        ></textarea>
        <div class="mt-5">
          <button
            class="border-0 outline-none py-2 px-4 rounded bg-blue-600 text-white disabled:bg-gray-600"
            :disabled="!token"
            @click="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import HeaderLayout from "@/components/HeaderLayout.vue";
import { TOKEN } from "@/constants/texts";
import { ref } from "vue";
const token = ref("");

const submit = () => {
  if (token.value) {
    localStorage.setItem(TOKEN, token.value);
    window.location.href = "/";
  }
};
</script>
