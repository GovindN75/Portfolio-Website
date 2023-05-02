import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";

const ProjectTile = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  overflow: "hidden",
  left: "9.5%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "2px solid transparent",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transition: "all 0.2s ease-in-out",
    top: '-7px',
    border: `2px solid ${theme.palette.primary.main}`,
  },
  cursor: "pointer",
  width: "75%",
  height: "237px",
  top: "0px",
  position: "relative",
  padding: theme.spacing(2),
}));

const Header = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(20),
  },
}));

const Body = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(12),
  },
}));

const projectsData = [
  {
    title: "Recipe.io",
    githubLink: "https://github.com/GovindN75/HTN-Project",
    desc: "A full-stack web application for finding recipes based on your available ingredients.",
    tools: "React.js, Node.js, Express.js, Bootstrap"
  },
  {
    title: "Flappy Bird AI",
    githubLink: "https://github.com/GovindN75/Flappy-Bird-AI",
    desc: "An agent that uses NeuroEvolution to beat Flappy Bird.",
    tools: "Python, Pygame, NEAT"
  },
  {
    title: "Number Predictor",
    githubLink: "https://github.com/GovindN75/Number-Predictor",
    desc: "A GUI that predict the handwritten digit the user draws on the canvas.",
    tools: "Python, Tkinter, Tensorflow, OpenCV"
  },
  {
    title: "Portfolio Website",
    githubLink: "https://github.com/GovindN75/Portfolio-Website",
    desc: "The website you're on right now!",
    tools: "React.js, HTML, CSS, JS"
  },
  {
    title: "Sorting Visualizer",
    githubLink: "https://github.com/GovindN75/Sorting-Visualizer",
    desc: "A visualizer for various commonly used sorting algorithms.",
    tools: "Python, Matplotlib"
  },
  {
    title: "Battleship-Inspired Game",
    githubLink: "https://github.com/GovindN75/Battleship-Project",
    desc: "Our version of the original Battleship game built using Java and the Greenfoot IDE.",
    tools: "Java, Greenfoot"
  },

  // Add more projects here
];
const ProjectWrapper = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.background.default,
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  paddingBottom: '2%',
  boxSizing: "border-box",
}));

const Projects = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ProjectWrapper id="projects">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="left"
        sx={{ width: "80%" }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            paddingLeft: "4.5%",
            paddingBottom: "2%",
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.primary.main,
            fontSize: theme.typography.pxToRem(40),
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={isXs ? 1 : 3}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ProjectTile onClick={() => handleClick(project.githubLink)}>
                <Header>{project.title}</Header>
                <Body>{project.desc}</Body>
                <Footer>{project.tools}</Footer>
              </ProjectTile>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ProjectWrapper>
  );
};

export default Projects;
