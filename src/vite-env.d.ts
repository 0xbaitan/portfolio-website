/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  const src: string;
  export default src;
}
