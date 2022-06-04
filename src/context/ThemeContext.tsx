import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs as Theme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "dark";
};

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

type ThemeProviderProps = {
  // initialTheme: Theme;
  children: JSX.Element;
};

export const ThemeProvider = ({
  // initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const rawSetTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  // if (initialTheme) {
  //   rawSetTheme(initialTheme);
  // }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
