import AboutPage from "@/components/AboutPage";

import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Locations from "@/components/Locations";
import OurJourney from "@/components/OurJourney";
import OurStory from "@/components/OurStory";
import OurValues from "@/components/OurValues";
import TopBar from "@/components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <Header />
      <AboutPage />
      <OurStory />
      <OurValues />
      <OurJourney />
      <Locations />
      <Certifications />
      <Footer />
    </>
  );
};

export default page;
