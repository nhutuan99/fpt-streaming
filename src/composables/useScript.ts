// mouse.js
import { loadJsScript } from "@/utils";
import { ref } from "vue";

export function useScript() {
  const loadDone = ref(false);
  const loadPlayerSdks = () => {
    if (window.shaka) {
      loadDone.value = true;
      return;
    }
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
  };

  return { loadDone, loadPlayerSdks };
}
