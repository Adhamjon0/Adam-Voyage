import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

/* PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Gallery from "./pages/Galery";

/* REGIONS */
import Samarqand from "./regions/Sam";
import Sam_ob from "./regions/Sam_ob.jsx";

/* PAGE ANIMATION */
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.35
};

/* ANIMATED ROUTES */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>

        {/* HOME */}
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />

        {/* BASIC PAGES */}
        <Route
          path="/about"
          element={
            <motion.div {...motionProps}>
              <About />
            </motion.div>
          }
        />

        <Route
          path="/services"
          element={
            <motion.div {...motionProps}>
              <Services />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div {...motionProps}>
              <Contact />
            </motion.div>
          }
        />

        <Route
          path="/gallery"
          element={
            <motion.div {...motionProps}>
              <Gallery />
            </motion.div>
          }
        />

        {/* SAMARQAND */}
        <Route
          path="/samarqand"
          element={
            <motion.div {...motionProps}>
              <Samarqand />
            </motion.div>
          }
        />

        {/* SAMARQAND TARIXIY OBIDALARI */}
        <Route
          path="/samarqand/obidalar"
          element={
            <motion.div {...motionProps}>
              <Sam_ob />
            </motion.div>
          }
        />

      </Routes>
    </AnimatePresence>
  );
};

/* REUSABLE MOTION PROPS */
const motionProps = {
  initial: "initial",
  animate: "in",
  exit: "out",
  variants: pageVariants,
  transition: pageTransition
};

/* APP */
export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen">

          {showIntro ? (
            <Intro onFinish={() => setShowIntro(false)} />
          ) : (
            <>
              <Header />

              <main className="flex-1">
                <AnimatedRoutes />
              </main>

              <Footer />
            </>
          )}

        </div>
      </Router>
    </I18nextProvider>
  );
}
