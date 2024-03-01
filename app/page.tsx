'use client';

import { useRef } from 'react';
import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Portfolio from "@/components/Portfolio/Portfolio";
import CallToAction from "@/components/CallToAction/CallToAction";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  return (
    <>
      <Intro />
      <About />
      <CallToAction />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
