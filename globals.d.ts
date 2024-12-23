export {};

declare global {
  interface Window {
    player: any;
    shaka: any;
    ui: any;
    sigmaPacker: any;
  }
}
