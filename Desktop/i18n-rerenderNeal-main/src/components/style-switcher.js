import "../assets/global.scss";
import { useShareableState } from "../assets/sharables";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useLocalState } from "../assets/local-storage";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import { useBetween } from "use-between";

// prettier-ignore
export default function StyleSwitcher() {
  const currentLanguageCode = cookies.get("i18next") || "en";

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const checkToggler = () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
      setOpen(!open);
    }
  };
  window.addEventListener("scroll", checkToggler);

  const { theme, setTheme, setColorTheme } = useBetween(useShareableState);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={"style-switcher outer-shadow " + (open && "open")}>
      <div
        className="style-switcher-toggler s-icon outer-shadow hover-in-shadow"
        onClick={() => setOpen(!open)}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div
        className="day-night s-icon outer-shadow hover-in-shadow"
        onClick={() => themeToggler()}>
        <i className={"fas " + (theme === "light" ? "fa-moon" : "fa-sun")}></i>
      </div>
      <h4>{t("themeColors")}</h4>
      <div className="colors">
        <span className="color-1" onClick={() => setColorTheme("pink")}></span>
        <span
          className="color-2"
          onClick={() => setColorTheme("orange")}></span>
        <span className="color-3" onClick={() => setColorTheme("green")}></span>
        <span className="color-4" onClick={() => setColorTheme("blue")}></span>
        <span className="color-5" onClick={() => setColorTheme("red")}></span>
      </div>
      {/* <div className="languages">
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <span className="dropdown-item-text">{t("language")}</span>
          </li>
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <a
                href="#"
                className={
                  ("dropdown-item",
                  {
                    disabled: currentLanguageCode === code,
                  })
                }
                onClick={() => {
                  i18next.changeLanguage(code);
                }}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      
        <details>
        
          <summary>{t("language")}</summary>
          {languages.map(({ code, name, country_code }) => (
            // <li key={country_code}><a href="#" className={classNames("dropdown-item", {
            //       disabled: currentLanguageCode === code,
            //     })}
            //     onClick={() => {
            //       i18next.changeLanguage(code); 
            //     }}>
            //     <span
            //       className={`flag-icon flag-icon-${country_code} mx-2`}
            //       style={{
            //         opacity: currentLanguageCode === code ? 0.5 : 1,
            //       }}></span>
            //     {name}
            //   </a>
            // </li>
            
            <a href="#" className="flex lang" style={{display: currentLanguageCode === code ? "none" : "flex" }} key={country_code} onClick={()=> {i18next.changeLanguage(code); window.location.reload()}}>
              <img src={code === "en" ? "/img/united-kingdom.png" : "/img/france.png" && code === "nl" ? "/img/netherlands.png" : "/img/france.png"} alt="flag"/>
              {name}
            </a>

          ))}
        </details>
    </div>
  );
}
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "nl",
    name: "Nederlands",
    country_code: "nl",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
];
