import { useLocalState } from "./local-storage";

export const useShareableState = () => {
  const [theme, setTheme] = useLocalState("theme", "light");
  const [colorTheme, setColorTheme] = useLocalState("colorTheme", "pink");
  return {
    theme,
    setTheme,
    colorTheme,
    setColorTheme,
  };
};
