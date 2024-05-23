import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        exclude: ["main.tsx", "**/**.stories.*"],
        thresholds: {
          branches: 100,
        },
      },
      environment: "jsdom",
      globals: true,
      root: "src",
      setupFiles: ["setupTests.ts"],
    },
  })
);
