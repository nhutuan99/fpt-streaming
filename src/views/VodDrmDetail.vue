<template>
  <ion-page>
    <HeaderLayout />
    <ion-content>
      <div class="p-5">
        <h1 class="font-bold text-[20px]">Xem phim DRM: {{ vod?.name }}</h1>

        <VodDrm v-if="loadDone" />
        <div v-else>Loading</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import HeaderLayout from "@/components/HeaderLayout.vue";
import VodDrm from "@/components/VodDrm.vue";
import { useScript } from "@/composables/useScript";
import { drmVods } from "@/constants";
import { IonContent, IonPage } from "@ionic/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const { loadDone, loadPlayerSdks } = useScript();
const route = useRoute();
const vod = computed(() => drmVods.find((item) => item.id === route.params.id));
loadPlayerSdks();
</script>
