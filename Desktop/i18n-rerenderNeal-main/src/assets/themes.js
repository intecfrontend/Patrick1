import { createGlobalStyle } from "styled-components";

export const pinkTheme = {
  colorThemeFontColor: "#fb839e",
};

export const orangeTheme = {
  colorThemeFontColor: "#ec9412",
};

export const greenTheme = {
  colorThemeFontColor: "#1fc586",
};

export const blueTheme = {
  colorThemeFontColor: "#2eb1ed",
};

export const redTheme = {
  colorThemeFontColor: "#cc3a3b",
};

export const lightTheme = {
  themeColor: "#eff0f4",
  fontColor: "#000",
  iconColor: "#000",
  outerShadow: "3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8",
  outerShadow0: "0 0 0 #d0d0d0, 0 0 0 #f8f8f8",
  innerShadow: "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
  innerShadow0: "inset 0 0 0 #d0d0d0, inset 0 0 0 #f8f8f8",
};

export const darkTheme = {
  /* Global */
  themeColor: "#2b2c2f",
  fontColor: "#fff",
  iconColor: "#fff",
  outerShadow: "3px 3px 3px #222327, -3px -3px 3px #363636",
  outerShadow0: "0 0 0 #222327, 0 0 0 #363636",
  innerShadow: "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636",
  innerShadow0: "inset 0 0 0 #222327, inset 0 0 0 #363636",
};

export const GlobalStyles = createGlobalStyle`
  /* Global */
  body,
    nav,
    .style-switcher,
    .s-icon {
		background-color: ${(props) => props.theme.themeColor};
	}
  .s-icon,
  .style-switcher h4 {
    color: ${(props) => props.theme.iconColor};

  }

  a,
  p {
    color: ${(props) => props.theme.fontColor}
  }

  .color-active {
    color: ${(props) => props.theme.colorThemeFontColor};
  }

  /* Shadows */
  .outer-shadow {
    box-shadow: ${(props) => props.theme.outerShadow};
  }

  .inner-shadow, 
  .hover-in-shadow:hover:after {
    box-shadow: ${(props) => props.theme.innerShadow}
  }

  .hover-in-shadow:hover {
    box-shadow: ${(props) => props.theme.outerShadow0};
  }
  
  /* Header */
  header span,
  header span::before,
  header span::after {
    background-color: ${(props) => props.theme.fontColor}
  }


  
  
  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.iconColor}:
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorThemeFontColor};
    
  }

  

`;
