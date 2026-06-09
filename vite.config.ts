import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwind from "@tailwindcss/vite";
import { tanStackStartVite } from "@tanstack/start-plugin-core/vite";

export default defineConfig({
  plugins: [
    // TanStack Start integration (file-based routes, SSR, dev middleware)
    ...tanStackStartVite(
      {
        framework: "react",
        defaultEntryPaths: { client: "client", server: "server", start: "start" },
        providerEnvironmentName: "ssr",
        ssrIsProvider: true,
        ssrResolverStrategy: { type: "default" },
      },
      undefined,
    ),
    // Tailwind CSS plugin for proper processing of `src/styles.css`
    tailwind(),
    react(),
    tsconfigPaths(),
  ],
});
