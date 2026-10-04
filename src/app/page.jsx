// src/app/page.jsx
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Process from "@/components/Process";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
// import Projects from "@/components/Projects";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <About />
      <Process />      
      <Team />      
      {/* <Projects /> */}
      <CTA />
    </>
  );
}