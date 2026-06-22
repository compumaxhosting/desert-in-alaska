import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import ContactBar from "@/components/ContactBar";
import ContactBarTwo from "@/components/ContactBarTwo";
import FaqHomePage from "@/components/FaqHomePage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import ServicesOfferedAfterHero from "@/components/ServicesOfferedAfterHero";
import TopBar from "@/components/TopBar";
import WhatWeDoAndIndustriesWeServe from "@/components/WhatWeDoAndIndustriesWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
    <ContactBarTwo />
      <ContactBar />
      <ServicesOfferedAfterHero />
      <WhatWeDoAndIndustriesWeServe />  
      <HowWeWork />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Reviews />
      <FaqHomePage />
      <Contact />
      <Footer />
    </>
  );
}
