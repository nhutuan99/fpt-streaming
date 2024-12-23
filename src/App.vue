<template>
  <ion-app v-if="loadDone">
    <ion-router-outlet />
  </ion-app>
  <div
    v-else
    class="fixed left-0 top-0 w-full h-full flex items-center justify-center"
  >
    Loading sdk
  </div>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { loadJsScript } from "./utils";
import { ref } from "vue";
const loadDone = ref(false);

loadJsScript({
  id: "sigma_packer_sdk",
  src: "shaka/sigma_packer_1.0.4.js",
  cb: () => {
    /*@ts-ignore*/
    window.sigmaPacker = new SigmaPacker();
    /*@ts-ignore*/
    window.sigmaPacker.onload = () => {
      loadJsScript({
        id: "shaka_ui_sdk",
        src: "shaka/shaka-player.compiled.min.js",
        cb: () => {
          loadDone.value = true;
        },
      });
    };
    /*@ts-ignore*/
    window.sigmaPacker.init();
  },
});
</script>
