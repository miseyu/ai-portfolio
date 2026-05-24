import sharedConfig from "@ai-portfolio/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.css",
        "../../packages/ui/**/*.{js,ts,jsx,tsx}",
      ],
    },
  ],
};

export default config;
