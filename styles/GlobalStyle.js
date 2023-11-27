import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Bangers);
${variables}

html{
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}


*, 
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    transition: var(--transition);
    background-color: ${({ theme }) => theme.selection};
    color: ${({ theme }) => theme.color};
  }

  :focus {
    outline: 1.8px dashed ${({ theme }) => theme.color};
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.color};
  }
  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    /* background: ${({ theme }) => theme.shade}; */
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.border};
    /* border: 1px solid ${({ theme }) => theme.color}; */
    /* border-radius: 10px; */
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    /* background-color: ${({ theme }) => theme.background}; */
    background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    ${({ theme }) => theme.background};
    background-size: 10px, 100%;
    color:  ${({ theme }) => theme.text};
    font-family: "Bangers", cursive;
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }

  }

  #root, #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
