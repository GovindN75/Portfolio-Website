import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FFFFFF",
        navTabs: '#000000'
      },
      typography: {
        fontFamily: "Roboto, sans-serif",
      },
      background: {
        default: "#27241D ",
        paper: "#616161",
      },
      // Add other color definitions as needed
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#dd2c00",
      },
      typography: {
        fontFamily: "Roboto, sans-serif",
      },
      background: {
        default: "#e0e0e0",
        paper: "#f5f5f5",
      },
      // Add other color definitions as needed
    },
  });

  const [theme, setTheme] = useState(darkMode ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme);
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <LandingPage
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          theme={theme}
        />
        <Projects />
        <Footer darkMode={darkMode} theme={theme} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
