import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    base: "/bangs/",
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
        }),
    ],
});
