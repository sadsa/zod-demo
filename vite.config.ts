import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

/**
 * Server side ENV validation
 */

// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";
// import { z } from "zod";

// import { EnvSchema } from "./src/examples/04-env-validation";

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "VITE_");

//   try {
//     EnvSchema.parse(env);
//     console.log("✅ Environment variables validated successfully");
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       console.error(
//         "❌ Invalid environment variables:\n",
//         error.errors
//           .map((err) => `${err.path.join(".")}: ${err.message}`)
//           .join("\n")
//       );
//       process.exit(1);
//     }
//     throw error;
//   }

//   return {
//     plugins: [react()],
//     resolve: {
//       alias: {
//         "@": "/src",
//       },
//     },
//   };
// });
