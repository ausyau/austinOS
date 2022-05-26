import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavigationProvider } from "../src/context/NavigationContext";

function AustinOS({ Component, pageProps }: AppProps) {
  // Dark Theme https://javascript.plainenglish.io/light-and-dark-mode-in-react-web-application-with-tailwind-css-89674496b942

  return (
    <NavigationProvider>
      <Component {...pageProps} />
    </NavigationProvider>
  );
}

export default AustinOS;
