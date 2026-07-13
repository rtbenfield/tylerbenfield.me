import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    framework: "astro",
    httpPort: 4321,
    env: {
      vars: {
        HOST: "0.0.0.0",
      }
    }
  },
});
