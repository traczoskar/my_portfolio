import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app/GlobalStyle";
import { themeDark, themeLight } from "./app/theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./slices/themeSlice";
import AnimatedRoutes from "./app/AnimatedRoutes/AnimatedRoutes";
import ScrollToTopButton from "./common/ScrollToTopButton";
import { Helmet } from "react-helmet-async";
import { selectIsLanguageEN } from "./slices/languageSlice";

const App = () => {
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Helmet>
        <html lang={isLanguageEN ? "en" : "pl"} />
      </Helmet>
      <GlobalStyle />
      <ScrollToTopButton />
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
