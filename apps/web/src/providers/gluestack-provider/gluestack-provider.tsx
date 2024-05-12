"use client"

import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Button } from "@repo/ui" // Optional if you want to use default theme
import { config } from "@repo/ui/config"

export function Providers({ children }: { children: React.ReactNode }) {
  console.log(Button);
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
}