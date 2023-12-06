"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/provider";

const theme = {
  // ... your system-ui theme
  config: {
    useSystemColorMode: false, // or true
    initialColorMode: "light", // or "dark"
    cssVarPrefix: "chakra", // any string
  },
};

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
