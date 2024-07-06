import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "../../views/HomePage";
import AboutMe from "../../views/AboutMe";
import ContactPage from "../../views/ContactPage";
import ProjectDetails from "../../views/HomePage/Portfolio/ProjectDetails";
import NoResultsPage from "../../views/404";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutMe />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactPage />
            </motion.div>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <motion.div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDetails />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NoResultsPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
