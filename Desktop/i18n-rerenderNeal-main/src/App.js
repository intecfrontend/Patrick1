import "./assets/global.scss";
import { useBetween } from "use-between";
import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact/Contact";
import StyleSwitcher from "./components/style-switcher";
import { useShareableState } from "./assets/sharables";
import { useEffect } from "react";
import { styled, ThemeProvider } from "styled-components";
import {
  pinkTheme,
  orangeTheme,
  greenTheme,
  blueTheme,
  redTheme,
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./assets/themes.js";

import { useTranslation } from "react-i18next";

// prettier-ignore
export default function App() {
  const { theme, colorTheme } = useBetween(useShareableState);
  const { t } = useTranslation();
  
  // const currentLanguageCode = cookies.get('i18next') || 'en';
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  // useEffect(() => {
  //   document.body.dir = currentLanguage.dir || 'ltr'
  //   document.title = t('app_title')
  // }, [currentLanguage, t])

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ThemeProvider theme={colorTheme === "pink" ? pinkTheme : pinkTheme && colorTheme === "orange" ? orangeTheme : orangeTheme && colorTheme === "green" ? greenTheme : greenTheme && colorTheme === "blue" ? blueTheme : blueTheme && colorTheme === "red" ? redTheme : redTheme}>
        <GlobalStyles />
          <Header />
          <StyleSwitcher />
          <Hero />
          <Contact />
      </ThemeProvider>
    </ThemeProvider>
  );  
}
