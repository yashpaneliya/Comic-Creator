import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Navbar from "./Navbar";
import { useDarkMode } from "../hooks/useDarkMode";
import { lightTheme, darkTheme } from "../styles/theme";

const GlobalPadding = styled.div`
  ${({ theme }) => theme.mixins.padding};
`;

const StyledLayout = styled.div`
  /* display: flex;
    flex-direction: column;
    margin: 2em 12em;

     @media (max-width: 996px) {
        margin: 2em 9em;
    }

    @media (max-width: 768px) {
        margin: 2em 6em;
    }

    @media (max-width: 480px) {
        margin: 2em 3em;
    } */
  /* display: flex;
  flex-direction: column; */
  width: 90%;
  /* background-color: pink; */
  max-width: 1030px;
  margin: 0 auto;
  /* flex-grow: 1; */
  flex: 1 0 auto;
  /* @media (min-width: 600px) {
    width: 85%;
  }
  @media (min-width: 900px) {
    width: 80%;
  }
  @media (min-width: 1276px) {
    width: 75%;
  } */

  /* @media (min-width: 600px) {
    width: 90%;
  } */
  @media (min-width: 1000px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar currentTheme={theme} toggleTheme={themeToggler} />
      <StyledLayout>{children}</StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
