<template>
  <ion-page>
    <HeaderLayout />
    <ion-content>
      <div class="p-5">
        <h1 class="font-bold text-[20px]">Xem phim: {{ vod?.name }}</h1>

        <VodNonDrm v-if="loadDone" />
        <div v-else>Loading</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import HeaderLayout from "@/components/HeaderLayout.vue";
import VodNonDrm from "@/components/VodNonDrm.vue";
import { useScript } from "@/composables/useScript";
import { vods } from "@/constants";
import { IonContent, IonPage } from "@ionic/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const { loadDone, loadPlayerSdks } = useScript();
loadPlayerSdks();
const route = useRoute();

const vod = computed(() => vods.find((item) => item.id === route.params.id));
</script>
