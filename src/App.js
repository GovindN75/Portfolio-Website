import React from "react";
import MyNavbar from "./components/Navbar/my_navbar";
import Homeimg from "./components/Homeimg/home-img";
import LandingTitle from "./components/LandingTitle/landing-title";
import About from "./pages/About/About-comp";
import Skills from "./pages/Skills/Skills";
import Container from "react-bootstrap/Container";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/projects";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <Homeimg />
      <LandingTitle />
      <Container className="container-box rounded">
        <hr />
          <About />
      </Container>
      <div> 
        <Container className="container-box rounded">
            <hr />
            <Skills />
        </Container>
      </div>
            <hr />
      <Projects />
      <Container className="container-box rounded">
          <hr />
          <Contact />
      </Container>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
