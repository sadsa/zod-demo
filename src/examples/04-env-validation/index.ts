import { z } from "zod";

export const EnvSchema = z.object({
  VITE_PORT: z.string().transform(Number),
  VITE_DATABASE_URL: z.string().url(),
  VITE_API_KEY: z.string().min(1),
});
