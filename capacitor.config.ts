import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "fpt-live-stream",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#000000",
      showSpinner: true,
      spinnerStyle: "large",
    },
  },
};

export default config;
