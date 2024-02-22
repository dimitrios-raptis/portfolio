'use client'

import { useRef } from 'react';
import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  const scrollToContact = useRef<HTMLDivElement>(null);

  const scrollTo = () => {
    scrollToContact.current!.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Intro scrollTo={scrollTo} />
      <About />
      <Skills />
      <Contact scrollToContact={scrollToContact} />
      <Footer />
    </>
  );
}
