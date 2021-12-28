import React, { useEffect } from "react";
import Header from "../../component/Header/Header";
import AboutMe from "./Section/About/AboutMe";
import Resume from "./Section/Resume/Resume";
import Services from "./Section/Services/Services";
import Portfolio from "./Section/Portfolio/Portfolio";
import Contact from "./Section/Contact";
import FloatBtn from "../../component/FloatBtn";

const Home = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <AboutMe />
        <Resume />
        <Services />
        <Portfolio />
        <Contact />
        <FloatBtn />
      </div>
    </>
  );
};

export default Home;
