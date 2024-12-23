<template>
  <div>
    <video
      autoplay
      muted
      playsinline
      id="video"
      class="w-full h-full max-w-[600px]"
      controls
    ></video>
  </div>
</template>

<script setup lang="ts">
import { vods } from "@/constants";
import { computed, onBeforeUnmount, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const vod = computed(() => vods.find((item) => item.id === route.params.id));

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  /*@ts-ignore*/
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  /*@ts-ignore*/
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error("Browser not supported!");
  }
}

async function initPlayer() {
  // Create a Player instance.
  const video = document.getElementById("video");
  /*@ts-ignore*/
  const player = new shaka.Player();
  await player.attach(video);

  // Attach player to the window to make it easy to access in the JS console.
  /*@ts-ignore*/
  window.player = player;

  // Listen for error events.
  player.addEventListener("error", onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(vod.value?.src);
    // This runs if the asynchronous load is successful.
    console.log("The video has now been loaded!");
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }
}

function onErrorEvent(event: any) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error: any) {
  // Log the error.
  console.error("Error code", error.code, "object", error);
}

onMounted(() => {
  initApp();
});

onBeforeUnmount(() => {
  const video = document.getElementById("video");
  /*@ts-ignore*/
  window.player.detach(video);
  /*@ts-ignore*/
  window.player.destroy();
  /*@ts-ignore*/
  //   window.player.unload();
  //   /*@ts-ignore*/
  //   window.player = null;
});
</script>
