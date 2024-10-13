import { createGlobalStyle } from "styled-components";

const fontFace = (
  family: string,
  style: string,
  weight: string,
  name: string
) =>
  `@font-face {
		  font-family: ${family};
		  font-style: ${style};
		  font-weight: ${weight};
		  font-display: swap;
		  src: url(${`/assets/fonts/${name}.woff2`}) format('woff2'),
		  url(${`/assets/fonts/${name}.woff`}) format('woff');
	  }`;

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
	}

	html, body, #__next {
		height: 100%;
	}

	body {
		background-color: #fcfcfc;
		font-family: GeistVF, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizelegibility;
	}

	*, button, input {
		border: 0;
		outline: 0;
	}

	${fontFace("GeistVF", "normal", "regular", "GeistVF")}
`;

export default GlobalStyle;
