import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface NavigationContextType {
  showHobbies: boolean;
  setShowHobbies: Dispatch<SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextType>({
  showHobbies: false,
  setShowHobbies: () => [],
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({children}: {children: JSX.Element}) => {
  const [showHobbies, setShowHobbies] = useState(false);
  const navigationValues = {showHobbies, setShowHobbies};

  return (
    <NavigationContext.Provider value={navigationValues}>
      {children}
    </NavigationContext.Provider>
  );
};
