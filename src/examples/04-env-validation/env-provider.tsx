import { ReactNode, createContext, useContext } from "react";
import { z } from "zod";

import { EnvSchema } from "./";

type ValidatedEnv = z.infer<typeof EnvSchema>;

const EnvContext = createContext<ValidatedEnv | null>(null);

interface EnvProviderProps {
  children: ReactNode;
}

export function EnvProvider({ children }: EnvProviderProps) {
  const validatedEnv = EnvSchema.parse(import.meta.env);

  return (
    <EnvContext.Provider value={validatedEnv}>{children}</EnvContext.Provider>
  );
}

export function useEnv() {
  const context = useContext(EnvContext);
  if (context === null) {
    throw new Error("useEnv must be used within an EnvProvider");
  }
  return context;
}
