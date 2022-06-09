import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    "utils/": path.resolve(__dirname, "./src/utils"),
    "reducers/": path.resolve(__dirname, "./src/reducers"),
  },
});
