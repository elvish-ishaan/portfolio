"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Use type directly from the NextThemesProvider component
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>
} 