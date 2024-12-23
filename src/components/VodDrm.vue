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
const DRM_CONFIG_SIGMA_VOD = {
  streaming: {
    bufferingGoal: 30,
    bufferBehind: 60,
    lowLatencyMode: false,
    stallEnabled: false,
    retryParameters: {
      timeout: 0,
      maxAttempts: 3,
      baseDelay: 2000,
      backoffFactor: 2,
      fuzzFactor: 0.5,
    },
  },
  manifest: {
    retryParameters: {
      timeout: 0,
      maxAttempts: 3,
      baseDelay: 2000,
      backoffFactor: 2,
      fuzzFactor: 0.5,
    },
  },
  abr: {
    enabled: true,
  },
  drm: {
    retryParameters: {
      timeout: 0,
      maxAttempts: 3,
      baseDelay: 2000,
      backoffFactor: 2,
      fuzzFactor: 0.5,
    },
    servers: {
      "com.microsoft.playready":
        "https://license.sigmadrm.com/license/verify/playready",
      "com.widevine.alpha":
        "https://license.sigmadrm.com/license/verify/widevine",
      "com.apple.fps.1_0":
        "https://license.sigmadrm.com/license/verify/fairplay",
    },
  },
};

import { drmVods } from "@/constants";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const vod = computed(() => drmVods.find((item) => item.id === route.params.id));

const initApp = () => {
  window.shaka.polyfill.installAll();
  // if (this.isSafari) {
  //   window.shaka.polyfill.PatchedMediaKeysApple.install();
  // }
  return !!window.shaka.Player.isBrowserSupported();
};

const initDrmSigma = async () => {
  const video = document.getElementById("video");
  const player = new window.shaka.Player();
  await player.attach(video);
  player.configure(DRM_CONFIG_SIGMA_VOD);
  window.player = player;
  player.addEventListener("error", (ev: any) => {
    console.log("ERROR PLAYER ", ev);
  });
};

const initNetworkingEngineSigma = () => {
  const networkingEngine = window.player.getNetworkingEngine();
  networkingEngine.clearAllRequestFilters();
  networkingEngine.clearAllResponseFilters();
  networkingEngine.registerRequestFilter((type: any, request: any) => {
    if (type !== window.shaka.net.NetworkingEngine.RequestType.LICENSE) {
      return;
    }
    const packInfo = window.sigmaPacker.getDataPacker() || {};
    const dt = {
      userId: localStorage.getItem("USER_ID") || "96386133",
      sessionId:
        localStorage.getItem("SESSION_ID") ||
        "ZG206JAvsFSqvXvT75AoUnwrpqmZeeFa//p5wrrAfVJ6e/OooCi9Wb/rKIe8+ilfaz2l7poWv1r/qXaS75F5BSZ78K6af7haq/tzxr2QLQ9+eab5zS/7FO32Mq6vzDsUJX/ouJY5+wLtrXDf65F7GC1+87TIffsU7fwy0+OHf1N9K/Gimnq6C6n6dsa/xi0Ee3n0qMsr71r3/HbJ4ZRpGj07rfeaOq1Zou9jy+iSeAImfP2qznvsDvqzY5iq+j9Edi6ouMV59Rq67CSDkMFpDD128qnHf+gL/L1t06nJKlhAO73qmmvjGu3i",
      merchantId: "fptplay",
      appId: "sigma",
      reqId: packInfo.requestId,
      deviceInfo: packInfo.deviceInfo,
    };
    request.headers["Content-Type"] = "application/octet-stream";
    request.headers["custom-data"] = btoa(JSON.stringify(dt));
  });
  networkingEngine.registerResponseFilter((type: string, response: any) => {
    const StringUtils = window.shaka.util.StringUtils;
    const Uint8ArrayUtils = window.shaka.util.Uint8ArrayUtils;
    if (type == window.shaka.net.NetworkingEngine.RequestType.LICENSE) {
      try {
        const wrappedString = StringUtils.fromUTF8(response.data);
        const wrapped = JSON.parse(wrappedString);
        if (response.headers["client-info"]) {
          window.sigmaPacker.update(atob(response.headers["client-info"]));
        } else if (wrapped.clientInfo) {
          window.sigmaPacker.update(JSON.stringify(wrapped.clientInfo));
        }
        const rawLicenseBase64 = wrapped.license;
        response.data = Uint8ArrayUtils.fromBase64(rawLicenseBase64);
      } catch (err) {
        console.log("err :>> ", err);
      }
    }
  });
};

const playVideo = async () => {
  if (window.player && vod.value?.src) {
    try {
      await window.player.load(vod.value?.src);
      // This runs if the asynchronous load is successful.
      console.log("The video has now been loaded!");
    } catch (e) {
      // onError is executed if the asynchronous load fails.
      console.log("ERROR PLAYER ", e);
    }
  }
};

const initPlayer = async () => {
  initApp();
  await initDrmSigma();
  initNetworkingEngineSigma();
  playVideo();
};

onMounted(() => {
  initPlayer();
});
</script>
