<template>
  <ion-page>
    <HeaderLayout />
    <ion-content>
      <div class="p-5">
        <h1 class="font-bold text-[20px]">
          Xem truyền hình: {{ channel?.name }}
        </h1>

        <LiveNonDrm v-if="loadDone" />
        <div v-else>Loading</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import HeaderLayout from "@/components/HeaderLayout.vue";
import LiveNonDrm from "@/components/LiveNonDrm.vue";
import { useScript } from "@/composables/useScript";
import { channels } from "@/constants";
import { IonContent, IonPage } from "@ionic/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const { loadDone, loadPlayerSdks } = useScript();
loadPlayerSdks();
const route = useRoute();

const channel = computed(() =>
  channels.find((item) => item.id === route.params.id)
);
</script>
