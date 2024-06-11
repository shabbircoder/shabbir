
import React from "react";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Form from "./components/Form";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import shabbir from "../src/components/shabbir.pdf"

export default function App() {
  return (
    <div>
      <Navbar resumeLink={shabbir} /> {/* Pass the resume link as a prop */}
      <section id="about">
        <Poster />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="">
        {/* Add your resume component or content here */}
      </section>
      <section id="contact">
        <Form />
      </section>
      <Footer />
    </div>
  );
}
