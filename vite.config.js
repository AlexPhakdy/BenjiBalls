import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // public/ assets (mp3, images) don't need HMR watching, and on a
      // cloud-synced folder (OneDrive/SharePoint) the sync client transiently
      // locks these files, which crashes Vite's Windows file watcher with EBUSY.
      ignored: ["**/public/**"],
    },
  },
});
