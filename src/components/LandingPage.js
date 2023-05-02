import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/GetApp";
import EmailIcon from "@mui/icons-material/Email";
import { TypeAnimation } from "react-type-animation";
import { styled } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import CustomSwitch from "./CustomSwitch";


const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(17),
}));

const LandingPage = ({ darkMode, toggleDarkMode, theme }) => {
  const handleChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === 0) {
      const projectWrapperElement = document.getElementById("projects");
      if (projectWrapperElement) {
        projectWrapperElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(`${process.env.PUBLIC_URL}/Govind_Resume.pdf`, "_blank");
    }
  };

  const DescriptionText = () => {
    return (
      <TypeAnimation
        sequence={[
          "CS @ UWaterloo",
          1500,
          "Software Developer",
          1500,
          "Avid Learner",
          1500,
          "Martial Arts Enthusiast",
          1500,
        ]}
        speed={30}
        wrapper="span"
        repeat={Infinity}
      />
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        width: "100%",
        height: "100vh",
        transition: "background-color 0.3s",
        color: darkMode ? "#F5F5F5" : "grey.900",
        flex: 1,
        boxSizing: "border-box",
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" flexGrow={1}></Typography>
          <Tabs
            value={false}
            onChange={handleChange}
            textColor={theme.palette.primary.navTabs}
            sx={{
              marginRight: "-1rem",
              "& .MuiTab-root": {
                transition: "color 0.3s",
                "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: "transparent",
                  opacity: 0.8,
                },
              },
            }}
          >
            <StyledTab label="Projects" 
                sx={{
                  marginRight: "-1rem", // Adjust marginRight as desired
                }}/>
            <StyledTab label="Resume" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "fixed",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
        }}
      >
        <CustomSwitch
          theme={theme}
          checked={theme.palette.mode === "dark"}
          onChange={toggleDarkMode}
        />
      </Box>
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: "calc(100vh - 56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          <Typography variant="h2" component="h1" sx={{fontWeight: theme.typography.fontWeightBold,}}>
            Govind Nair
          </Typography>
          <Typography variant="h5" component="h2">
            <DescriptionText />
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              mt: 4,
            }}
          >
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/govindnair02/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: darkMode ? "inherit" : "primary.main",
                borderColor: darkMode ? "inherit" : "primary.main",
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/GovindN75"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: darkMode ? "inherit" : "primary.main",
                borderColor: darkMode ? "inherit" : "primary.main",
              }}
            >
              <GitHubIcon />
            </IconButton>

            <Button
              component="a"
              target="_blank"
              href="/Govind_Resume.pdf"
              rel="noopener noreferrer"
              variant="outlined"
              // color={darkMode ? "inherit" : "primary"}
              startIcon={<DownloadIcon />}
              // sx={{
              // color: darkMode ? 'inherit' : 'primary.main',
              // borderColor: darkMode ? 'inherit' : 'primary.main',
              // }}
            >
              My Resume
            </Button>

            <Button
              variant="outlined"
              // color={darkMode ? "inherit" : "primary"}
              startIcon={<EmailIcon />}
              component="a"
              href="mailto:g4nair@uwaterloo.ca"
              // sx={{
              // color: darkMode ? 'inherit' : 'primary.main',
              // borderColor: darkMode ? 'inherit' : 'primary.main',
              // }}
            >
              Email Me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
