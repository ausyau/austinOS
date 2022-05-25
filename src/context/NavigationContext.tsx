import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface NavigationContextType {
  showHobbies: boolean;
  setShowHobbies: Dispatch<SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextType>({
  showHobbies: false,
  setShowHobbies: () => {},
});

export default NavigationContext;
