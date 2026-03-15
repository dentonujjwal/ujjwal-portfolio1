import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SkinDiseaseDemo from './components/SkinDiseaseDemo';
import Timeline from './components/Timeline';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Ujjwal Rai | Full Stack Java Developer</title>
        <meta name="description" content="Portfolio of Ujjwal Rai, a Full Stack Java Developer specializing in Java, Spring Boot, React, and Modern Web Application Development." />
        <meta name="keywords" content="Java Developer, Full Stack, React, Spring Boot, Portfolio, Ujjwal Rai" />
        <meta name="author" content="Ujjwal Rai" />
      </Helmet>

      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Timeline />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/skin-disease-detection" element={<SkinDiseaseDemo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
