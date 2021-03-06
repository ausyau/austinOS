import React from "react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {config} from "@fortawesome/fontawesome-svg-core";

import type {AppProps} from "next/app";
import {NavigationProvider} from "../src/context/NavigationContext";
import {ThemeProvider} from "../src/context/ThemeContext";

library.add(fab, faCoffee);
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function AustinOS({Component, pageProps}: AppProps) {
  // Dark Theme https://javascript.plainenglish.io/light-and-dark-mode-in-react-web-application-with-tailwind-css-89674496b942

  return (
    <ThemeProvider>
      <NavigationProvider>
        <Component {...pageProps} />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default AustinOS;
