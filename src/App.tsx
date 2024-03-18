import NavSection from "./common/NavSection";
import HomePage from "./views/HomePage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app/GlobalStyle";
import { themeDark, themeLight } from "./app/theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/ThemeSwitch/themeSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./views/ContactPage";
import CurrencyCalculator from "./views/projects/CurrencyCalculator";
import MoviesBrowser from "./views/projects/MoviesBrowser";
import PersonalHomepage from "./views/projects/PersonalHomepage";
import ToDoList from "./views/projects/ToDoList";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <>
        <Router>
          <NavSection />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/projects/currency-calculator"
              element={<CurrencyCalculator />}
            />
            <Route
              path="/projects/movies-browser"
              element={<MoviesBrowser />}
            />
            <Route
              path="/projects/personal-homepage"
              element={<PersonalHomepage />}
            />
            <Route path="/projects/to-do-list" element={<ToDoList />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
