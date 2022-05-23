import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationContext from "../src/context/NavigationContext";

function AustinOS({ Component, pageProps }: AppProps) {
  const [showHobbies, setShowHobbies] = useState(false);
  const navigationValues = { showHobbies, setShowHobbies };
  // Dark Theme https://javascript.plainenglish.io/light-and-dark-mode-in-react-web-application-with-tailwind-css-89674496b942

  return (
    <NavigationContext.Provider value={navigationValues}>
      <Component {...pageProps} />
    </NavigationContext.Provider>
  );
}

export default AustinOS;
