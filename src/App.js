import React from 'react';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import ProjectTimeline from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import { Parallax } from "react-parallax";
import './App.css';

const App = () => {
  return (
    <div >
    <MyNavbar />
    <MyCarousal />
    <TitleMessage />
    <Particles
        className="particles particles-box"
        params={particlesOptions} />
    <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
          <Container className="container-box rounded">
                <hr />
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
      <Slide bottom duration={500}>
          <hr />
          <Skills />
          </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeline />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
