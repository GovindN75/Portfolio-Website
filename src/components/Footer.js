// src/components/Footer.js
import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/GetApp";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/material";

const Footer = ({ darkMode, theme }) => {

  return (
    <Box
      sx={{
        position: "relative",
        bottom: 0,
        width: "100%",
        minHeight: '10vh',
        backgroundColor: theme.palette.background.default,
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/govindnair02/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "primary.main",
          borderColor: "primary.main",
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
          color:"primary.main",
          borderColor: "primary.main",
        }}
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component="a"
        target="_blank"
        href="/Govind_Resume.pdf"
        rel="noopener noreferrer"
        sx={{
          color: "primary.main",
          borderColor: "primary.main",
        }}
      >
        <DownloadIcon />
      </IconButton>

      <IconButton
        component="a"
        href="mailto:your.email@example.com"
        sx={{
          color: "primary.main",
          borderColor: "primary.main",
        }}
      >
        <EmailIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
