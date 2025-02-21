// Providers.tsx

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Layout } from "../app/components/layout/layout";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  applyLayout?: boolean; // New prop to determine whether to apply the layout
}

export function Providers({
  children,
  themeProps,
  applyLayout = true, // Default to true if not specified
}: ProvidersProps) {
  if (!applyLayout) {
    // If applyLayout is explicitly set to false, render children without the layout
    return <>{children}</>;
  }

  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        {...themeProps}
      >
        <Layout>{children}</Layout>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
