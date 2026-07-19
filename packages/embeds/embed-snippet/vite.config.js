import viteBaseConfig from "../vite.config";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const path = require("node:path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  ...viteBaseConfig,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      name: "snippet",
      fileName: (format) => `snippet.${format}.js`,
    },
  },
});
