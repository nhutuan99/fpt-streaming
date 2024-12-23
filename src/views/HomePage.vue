<template>
  <ion-page>
    <HeaderLayout />

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="p-5">
        <h1 class="font-bold text-[20px]">Xem truyền hình</h1>
        <div class="flex flex-wrap gap-5">
          <RouterLink
            v-for="channel in channels"
            :key="channel.id"
            :to="`/channel/${channel.id}`"
          >
            <img :src="channel.icon" class="w-[150px]" />
            <div class="text-center mt-2">
              <strong>{{ channel.name }}</strong>
            </div>
          </RouterLink>
        </div>
      </div>

      <hr />

      <div class="p-5">
        <h1 class="font-bold text-[20px]">Xem phim</h1>
        <div class="flex flex-wrap gap-5">
          <RouterLink
            v-for="channel in vods"
            :key="channel.id"
            :to="`/vod/${channel.id}`"
          >
            <img :src="channel.icon" class="w-[150px]" />
            <div class="text-center mt-2">
              <strong>{{ channel.name }}</strong>
            </div>
          </RouterLink>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import HeaderLayout from "@/components/HeaderLayout.vue";

import { channels, vods } from "@/constants";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { RouterLink } from "vue-router";
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
